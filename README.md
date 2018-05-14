# usl
A universal style language ;-) ... actually a macro.

## usage
```sh
$ node usl.js style.hjson > style.json
```
This will create style.json from more human-friendly style.hjson, adding default values with minor properties.

## why?
Because it seems to me that we need more properties to create style.js (or VectorTileServer/resources/styles/root.json I might say) which works well with various frameworks and front-end libraries.

## an example of style.hjson
```hjson
{
  sources: {
    example: {
      tiles: 'https://example.com/somewhere/{z}/{x}/{y}.pbf'
      attribution: some text
      minzoom: 5
      maxzoom: 16
    }
  }
  layers: [
    {
      id: background
      type: background
      paint: {
        background-color: '#000'
      }
    }
    {
      id: polygon
      type: fill
      source-layer: polygon
      paint: {
        fill-color: '#fff'
        fill-outline-color: '#fff'
        fill-opacity: 0.1
      }
    }
    {
      id: linestring
      type: line
      source-layer: linestring
      paint: {
        line-color: '#9e9e9e'
        line-width: 1
      }
    }
    {
      id: point
      type: symbol
      source-layer: point
      layout: {
        text-field: '{text}'
        text-font: 'Metropolis Light'
      }
      paint: {
        text-color: '#e0e0e0'
      }
    }
  ]
}
```

### some specifications
- As default 'source' for layers, the first source in source description will be automatically used.

## which frameworks and front-end libraries do I want to support?
### frameworks
- Geocortex Essential
- GeoNode

### front-end libraries
- Mapbox GL JS
- OpenLayers with ol-mapbox-style
- ArcGIS API for JavaScript Series 3
- ArcGIS API for JavaScript Series 4
