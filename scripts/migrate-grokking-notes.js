const fs = require('fs')
const path = require('path')

const supportedExtensions = ['.js', '.jsx', '.ts', '.tsx']

function slugify(value) {
  return value
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function ensureDirectory(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function normalizeTopic(topic) {
  return topic.replace(/[-_]+/g, ' ').trim()
}

function collectFiles(sourceRoot, baseDir = '') {
  const absolute = path.join(sourceRoot, baseDir)
  const entries = fs.readdirSync(absolute, { withFileTypes: true })

  return entries.flatMap((entry) => {
    if (entry.name.startsWith('.')) {
      return []
    }

    const entryPath = path.join(baseDir, entry.name)
    const fullPath = path.join(sourceRoot, entryPath)

    if (entry.isDirectory()) {
      return collectFiles(sourceRoot, entryPath)
    }

    if (!supportedExtensions.includes(path.extname(entry.name))) {
      return []
    }

    return [{ relativeDir: baseDir, fileName: entry.name, fullPath }]
  })
}

function titleFromFileName(fileName) {
  const name = path.basename(fileName, path.extname(fileName))
  return slugify(name)
}

function buildNoteContent(topicName, problemName) {
  return [
    `# ${problemName}`,
    '',
    '## Problem Statement',
    '',
    `Describe the problem statement for **${problemName}** here.`,
    '',
    '## Examples',
    '',
    '- Example input:',
    '- Example output:',
    '',
    '## Approach',
    '',
    'Explain the general approach, intuition, and algorithms.',
    '',
    '## Solution',
    '',
    '```ts',
    '// Add your example solution here',
    'function solution() {',
    '  return null',
    '}',
    '```',
    '',
    '## Time Complexity',
    '',
    '',
    '## Space Complexity',
    '',
    '',
    '## Notes',
    '',
    '- Add notes, edge cases, and patterns here.',
    ''
  ].join('\n')
}

function migrate(sourcePath, targetPath) {
  const sourceRoot = path.resolve(process.cwd(), sourcePath)
  const targetRoot = path.resolve(process.cwd(), targetPath)

  if (!fs.existsSync(sourceRoot)) {
    console.error(`Source folder not found: ${sourceRoot}`)
    process.exit(1)
  }

  const files = collectFiles(sourceRoot)
  if (files.length === 0) {
    console.log('No supported source files found to migrate.')
    return
  }

  let created = 0
  let skipped = 0

  files.forEach((entry) => {
    const topicName = normalizeTopic(entry.relativeDir || 'General')
    const problemName = titleFromFileName(entry.fileName)
    const topicDir = path.join(targetRoot, entry.relativeDir)
    const markdownName = `${problemName}.md`
    const markdownPath = path.join(topicDir, markdownName)

    ensureDirectory(topicDir)

    if (fs.existsSync(markdownPath)) {
      skipped += 1
      return
    }

    fs.writeFileSync(markdownPath, buildNoteContent(topicName, problemName), { encoding: 'utf8' })
    created += 1
  })

  console.log(`Migrated ${created} markdown files to ${targetRoot}. ${skipped} existing files were skipped.`)
}

const sourceArg = process.argv[2] || path.join('..', 'Grokking')
const targetArg = process.argv[3] || path.join(process.cwd(), 'notes')

migrate(sourceArg, targetArg)
