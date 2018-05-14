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
  to_be_developed: true
}
```

## which frameworks and front-end libraries do I want to support?
### frameworks
- Geocortex Essential
- GeoNode

### front-end libraries
- Mapbox GL JS
- OpenLayers with ol-mapbox-style
- ArcGIS API for JavaScript Series 3
- ArcGIS API for JavaScript Series 4
