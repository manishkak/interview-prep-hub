const fs = require('fs')
const path = require('path')

// Paths are relative to this script's location (scripts/)
const repoRoot = path.resolve(__dirname, '..')
const grokkingRoot = path.resolve(repoRoot, '..', 'Grokking')
const notesRoot = path.resolve(repoRoot, 'notes')

function normalizeName(name) {
  return name
    .replace(/[^a-z0-9]/gi, '')
    .toLowerCase()
}

function collectSourceFiles(dir) {
  const results = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...collectSourceFiles(full))
    } else if (/\.(js|ts|jsx|tsx)$/.test(entry.name)) {
      results.push(full)
    }
  }
  return results
}

function collectMarkdownFiles(dir) {
  const results = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...collectMarkdownFiles(full))
    } else if (/\.md$/.test(entry.name)) {
      results.push(full)
    }
  }
  return results
}

function readFileSafe(file) {
  try {
    return fs.readFileSync(file, 'utf8')
  } catch (err) {
    return null
  }
}

function replaceSolutionSection(markdown, code, lang) {
  // Replace the ## Solution section code block if it's the placeholder
  const solutionHeader = /(^|\n)## Solution\s*\n([\s\S]*?)(?=\n## |$)/i
  const match = markdown.match(solutionHeader)
  if (!match) return markdown
  const newBlock = '\n## Solution\n\n```' + lang + '\n' + code + '\n```\n\n'
  return markdown.replace(solutionHeader, newBlock)
}

function main() {
  if (!fs.existsSync(grokkingRoot)) {
    console.error('Grokking folder not found at', grokkingRoot)
    process.exit(1)
  }
  const sources = collectSourceFiles(grokkingRoot)
  const mdFiles = collectMarkdownFiles(notesRoot)

  // Build map of normalized source basenames -> file path
  const sourceMap = new Map()
  for (const s of sources) {
    const base = path.basename(s, path.extname(s))
    sourceMap.set(normalizeName(base), s)
  }

  let updated = 0
  for (const md of mdFiles) {
    const mdBase = path.basename(md, '.md')
    const normalized = normalizeName(mdBase)
    // Try exact match first
    let sourceFile = sourceMap.get(normalized)
    if (!sourceFile) {
      // Try to find any source whose normalized name contains normalized mdBase or vice versa
      for (const [k, v] of sourceMap.entries()) {
        if (k.includes(normalized) || normalized.includes(k)) {
          sourceFile = v
          break
        }
      }
    }
    if (!sourceFile) continue

    const code = readFileSafe(sourceFile)
    if (!code) continue

    const mdContent = readFileSafe(md)
    if (!mdContent) continue

    // Detect placeholder: presence of 'Describe the problem statement' or 'Add your example solution here'
    if (!/Describe the problem statement|Add your example solution here/i.test(mdContent)) continue

    const lang = path.extname(sourceFile).replace('.', '') || 'js'
    const newMd = replaceSolutionSection(mdContent, code, lang)
    if (newMd === mdContent) continue
    fs.writeFileSync(md, newMd, 'utf8')
    console.log('Updated', md, 'from', sourceFile)
    updated++
  }

  console.log(`Backfill complete. ${updated} files updated.`)
}

main()
