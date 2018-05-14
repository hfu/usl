const hjson = require('hjson')
const fs = require('fs')

if (process.argv.length !== 3) {
  console.log('usage: node usl.js style.hjson > style.json')
  process.exit()
}

const processSource = (source) => {
  source.type = source.type || 'vector'
  source.tiles = [source.tiles]
  source.minzoom = source.minzoom || 5
  source.maxzoom = source.maxzoom || 16
  return source
}

const processLayer = (layer, defaultSource) => {
  layer.source = layer.source || defaultSource
  switch(layer.type) {
    case 'fill': 
      break
    case 'linestring':
      break
    case 'symbol':
      layer.layout['text-font'] = [layer.layout['text-font']]
      break
    default:
      break
  }
  return layer
}

let json = hjson.parse(fs.readFileSync(process.argv[2], {encoding: 'utf-8'}))

const source = Object.keys(json.sources)[0]

json.version = 8
json.glyphs = json.glyphs || 
  'https://hfu.github.io/openmaptiles-fonts/{fontstack}/{range}.pbf'
json.sprite = json.sprite || 
  'https://openmaptiles.github.io/osm-bright-gl-style/sprite'

for (const k of Object.keys(json.sources)) {
  json.sources[k] = processSource(json.sources[k])
}
for (const i in json.layers) {
  json.layers[i] = processLayer(json.layers[i], source)
}

console.log(JSON.stringify(json, null, 2))
