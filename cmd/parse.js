const fs = require('fs')
const path = require('path')

const packagePath = path.resolve(__dirname, '../')
const package = JSON.parse(fs.readFileSync(
  path.resolve(packagePath, './package.json'),
  'utf-8'
))

const fields = [
  { key: 'prefix', name: 'prefix' },
  { key: 'body', name: 'body' },
  { key: 'description', name: 'description' }
]

const formatBody = body => {
  if (Array.isArray(body)) {
    body = body.join('\n')
  }
  body = body.replace(/\n/g, '↩')
  body = body.replace(/\t/g, '⇥')
  body = body.replace(/\$\{0\}/g, '')
  return '`' + body + '`'
}

const renderTable = ({ data, fields }) => {
  let tableString = ''
  tableString += '| ' + fields.map(({ name }) => name).join(' | ') + ' |' + '\n'
  tableString += '| ' + fields.map(() => '---').join(' | ') + ' |' + '\n'
  for (let index = 0; index < data.length; index += 1) {
    tableString += '| ' + fields.map(({ key }) => data[index][key]).join(' | ') + ' |' + '\n'
  }
  return tableString
}

const languageMap = {}
package.contributes.snippets.forEach(({ language, path }) => languageMap[path] = [...(languageMap[path] || []), language])

let apiMd = '# Snippet API Guidline' + '\n\n'

Object.entries(languageMap).map(([tpath, langs]) => {
  apiMd += `### ${langs.join(', ')}\n\n`
  const data = Object.values(
    JSON.parse(fs.readFileSync(path.resolve(packagePath, tpath), 'utf-8'))
  )
    .map(d => ({ ...d, body: formatBody(d.body) }))
  apiMd += renderTable({ data, fields }) + '\n\n'
})

fs.writeFileSync(path.resolve(packagePath, './api.md'), apiMd)