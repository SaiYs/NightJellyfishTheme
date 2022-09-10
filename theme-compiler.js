const fs = require('fs')

const sourcePath = './src'
const paths = fs.readdirSync(sourcePath)
let compileJsFiles = []
let watchJsFiles = []
let folders = [sourcePath]

// gather the folders paths
for (let path of paths) {
  if (!path.endsWith('.js')) {
    folders.push(sourcePath + '/' + path)
  }
}
// gather the .js files
for (let folder of folders) {
  let subContent = fs.readdirSync(folder)
  let subJsFiles = subContent.filter(path => path.endsWith('.js'))
  for (let file of subJsFiles) {
    if (folder === sourcePath) compileJsFiles.push(folder + '/' + file)
    watchJsFiles.push(folder + '/' + file)
  }
}

if (process.argv[2] === 'dev') {
  console.info('Watching files:')
  for (let file of watchJsFiles) {
    fs.watchFile(file, compile)
    console.info(file)
  }
} else if (process.argv[2] === 'prod') {
  compile()
  process.exit()
}

function compile() {
  // delete cache
  for (let path in require.cache) {
    if (path.endsWith('.js')) delete require.cache[path]
  }

  // loop in every theme file
  for (let compFile of compileJsFiles) {
    const src = require(compFile)
    let dictstring = JSON.stringify(src)


    // create json file name
    let jsonName = compFile.replace('.js', '').split('/')
    jsonName = jsonName[jsonName.length - 1]

    // change name field inside the json
    dictstring = dictstring.replace(/themename/g, jsonName)

    try {
      fs.writeFileSync(`./themes/${jsonName}.json`, dictstring)
    } catch (e) {
      console.error('error', e)
    }
    console.info(`${jsonName}.json file compiled!`)
  }
}
