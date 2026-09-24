import { GoogleGenAI } from '@google/genai'
import { writeFile, access } from 'node:fs/promises'
import path from 'node:path'

const ai = new GoogleGenAI({
  apiKey: process.env.NETLIFY_AI_GATEWAY_KEY,
  httpOptions: { baseUrl: process.env.NETLIFY_AI_GATEWAY_BASE_URL?.replace(/\/$/, '') },
})

const MODEL = 'gemini-3.1-flash-image'
const OUT = path.resolve('public/img')

const STYLE = `Style: flat editorial UI/UX case-study presentation graphic, rendered like a designer's Figma showcase board.
Strict palette only: warm cream paper (#F6F1E7), soft beige (#E8DFCF), deep forest green (#1E3A2C), muted bronze (#A9762F), off-white cards.
Clean modern geometric sans-serif interface typography, generous whitespace, soft rounded corners (16px), very subtle soft shadows, no gradients meshes, no neon.
Almost no written words — use short single words or abstract grey placeholder text bars instead of sentences, never paragraphs of text.
No human faces, no logos of real brands, no watermarks. Crisp high resolution, straight-on orthographic view, calm and professional.`

const jobs = [
  {
    file: 'hero-studio.png',
    aspect: '4:5',
    prompt: `A calm overhead composition of a UI/UX designer's desk on a warm cream surface: an open laptop showing an abstract wireframe grid, a tablet with a rounded mobile app frame, a few printed low-fidelity wireframe sheets, a small potted plant with deep green leaves, a bronze pen, and three beige sticky notes with simple drawn arrows. No hands, no faces.`,
  },
  {
    file: 'mealez-cover.png',
    aspect: '3:2',
    prompt: `Presentation cover board for a food delivery mobile app concept: three floating rounded smartphone frames at slight angles showing a food ordering interface — a home screen with restaurant cards and a green search bar, a dish detail screen with a large circular photo of a bowl of food, and a cart screen with list rows. Bronze circular accent shape behind the centre phone.`,
  },
  {
    file: 'mealez-screens.png',
    aspect: '16:9',
    prompt: `A flat row of five mobile app screens for a food delivery app, laid out evenly straight-on with equal gaps on cream: search results with filter chips, food detail with a photo of a noodle bowl and a green add button, cart with three list rows and a total, checkout with payment option rows, and an order tracking screen with a simple map line and a progress stepper.`,
  },
  {
    file: 'mealez-wireframes.png',
    aspect: '16:9',
    prompt: `Low-fidelity greyscale wireframe sheet for a food delivery mobile app: six hand-drawn-looking mobile wireframe boxes on cream paper, made of grey rectangles, circles for images, horizontal grey lines for text placeholders, and thin pencil annotation arrows between them. Deliberately rough and unstyled, like early sketches.`,
  },
  {
    file: 'zbazaar-cover.png',
    aspect: '3:2',
    prompt: `Presentation cover board for a fashion shopping mobile app concept: three floating rounded smartphone frames showing a clothing store interface — a home screen with a two-column grid of folded-garment product cards, a product detail screen with a large image of a linen shirt and size chips, and a wishlist screen with heart icons. Soft beige arch shape behind the phones.`,
  },
  {
    file: 'zbazaar-screens.png',
    aspect: '16:9',
    prompt: `A flat row of five mobile app screens for a fashion shopping app, straight-on with equal gaps on cream: category browse grid of garment cards, an open filter panel with price slider and size chips, product detail with image carousel dots and a dark green primary button, bag screen with two product rows and a summary, and an order confirmation screen with a bronze check circle.`,
  },
  {
    file: 'zbazaar-wireframes.png',
    aspect: '16:9',
    prompt: `Mid-fidelity greyscale wireframe sheet for a fashion shopping app: six mobile wireframe frames on cream, grey boxes with X-crossed image placeholders, grey text bars, a wireframed filter drawer and a wireframed product grid, connected by thin pencil arrows with small circled numbers.`,
  },
  {
    file: 'gallery-design-system.png',
    aspect: '4:3',
    prompt: `A design system component sheet on cream: neatly aligned rows of UI components — dark green primary buttons in three sizes, bronze secondary buttons, outlined buttons, disabled states, input fields, dropdowns, toggles, checkboxes, chips, and a colour swatch strip. Each row separated by thin beige rules, small grey label bars beside each row.`,
  },
  {
    file: 'gallery-type-color.png',
    aspect: '4:3',
    prompt: `A typography and colour specimen board on cream paper: a large single letter A in deep forest green, a type scale of five decreasing grey text bars, and a horizontal row of six rounded colour swatch tiles in cream, beige, bronze, olive, forest green and near-black, each with a tiny grey code bar beneath.`,
  },
  {
    file: 'gallery-journey-map.png',
    aspect: '16:9',
    prompt: `A user journey map board on cream: five vertical stage columns separated by thin beige lines, a bronze line graph of emotion rising and dipping across them, small beige sticky notes in each column, and simple outline icons (magnifier, cart, card, box) along the top row.`,
  },
  {
    file: 'gallery-research-board.png',
    aspect: '4:3',
    prompt: `A user research affinity board on cream: about twenty small square sticky notes in beige, pale olive and muted bronze, arranged into four labelled clusters with thin grey pencil circles drawn around each cluster, tiny grey scribble lines on the notes instead of readable words.`,
  },
  {
    file: 'gallery-prototype-flow.png',
    aspect: '16:9',
    prompt: `A clickable prototype flow diagram on cream: seven small rounded mobile screen thumbnails arranged in two rows, connected by thin bronze arrows with small circular hotspot dots on tap targets, like a Figma prototype wiring view. Screens are simplified grey and green blocks.`,
  },
]

async function gen(job) {
  const dest = path.join(OUT, job.file)
  try {
    await access(dest)
    console.log(`skip ${job.file} (exists)`)
    return true
  } catch {}

  const contents = `${job.prompt}\n\n${STYLE}\nComposition aspect ratio: ${job.aspect}.`

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await ai.models.generateContent({
        model: MODEL,
        contents,
        config: { imageConfig: { aspectRatio: job.aspect } },
      })
      const parts = res?.candidates?.[0]?.content?.parts ?? []
      const img = parts.find((p) => p.inlineData)
      if (!img) throw new Error('no image part returned')
      await writeFile(dest, Buffer.from(img.inlineData.data, 'base64'))
      console.log(`ok   ${job.file}`)
      return true
    } catch (err) {
      console.log(`fail ${job.file} attempt ${attempt}: ${err.message?.slice(0, 160)}`)
      if (attempt === 3) return false
      await new Promise((r) => setTimeout(r, attempt * 4000))
    }
  }
}

const CONCURRENCY = 3
const queue = [...jobs]
const results = []
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const job = queue.shift()
      results.push([job.file, await gen(job)])
    }
  }),
)
console.log('---')
console.log(`done: ${results.filter(([, ok]) => ok).length}/${results.length}`)
for (const [f, ok] of results) if (!ok) console.log(`MISSING ${f}`)
