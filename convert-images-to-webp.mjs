
import sharp from 'sharp'
import { readdir } from 'node:fs/promises'
import path from 'node:path'

const folders = [
  'public/images/projects',
  'public/images/certificates',
]

async function convertImages() {
  for (const folder of folders) {
    const files = await readdir(folder)

    for (const file of files) {
      if (!file.toLowerCase().endsWith('.png')) continue

      const inputPath = path.join(folder, file)
      const outputPath = path.join(
        folder,
        `${path.parse(file).name}.webp`
      )

      await sharp(inputPath)
        .webp({ quality: 82, effort: 6 })
        .toFile(outputPath)

      console.log(`Converted: ${inputPath} -> ${outputPath}`)
    }
  }

  console.log('\nAll PNG images converted successfully.')
  console.log('Original PNG files have been preserved.')
}

convertImages().catch((error) => {
  console.error('Conversion failed:', error)
  process.exitCode = 1
})
