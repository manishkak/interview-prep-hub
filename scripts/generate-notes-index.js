const fs = require('fs')
const path = require('path')

const appRoot = path.resolve(__dirname, '..')
const notesRoot = path.join(appRoot, 'notes')
const publicNotesRoot = path.join(appRoot, 'public', 'notes')
const indexPath = path.join(appRoot, 'src', 'data', 'notes-index.json')

function slug(value) {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/--+/g, '-')
}

function ensureDirectory(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function copyDirectory(source, target) {
  ensureDirectory(target)
  const entries = fs.readdirSync(source, { withFileTypes: true })
  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name)
    const targetPath = path.join(target, entry.name)
    if (entry.isDirectory()) {
      copyDirectory(sourcePath, targetPath)
    } else if (entry.isFile()) {
      fs.copyFileSync(sourcePath, targetPath)
    }
  }
}

function buildIndex() {
  ensureDirectory(publicNotesRoot)
  copyDirectory(notesRoot, publicNotesRoot)

  const topics = fs.readdirSync(notesRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((topicDir) => {
      const topicName = topicDir.name
      const topicSlug = slug(topicName)
      const topicPath = path.join(notesRoot, topicName)
      const problems = fs
        .readdirSync(topicPath, { withFileTypes: true })
        .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((entry) => ({
          topicName,
          topicSlug,
          problemName: path.basename(entry.name, '.md'),
          problemSlug: slug(path.basename(entry.name, '.md')),
          fileName: entry.name,
          relativePath: `${topicName}/${entry.name}`
        }))

      return {
        topicName,
        topicSlug,
        problems
      }
    })

  fs.writeFileSync(indexPath, JSON.stringify({ topics }, null, 2))
  console.log(`Generated notes index with ${topics.length} topics.`)
}

buildIndex()
