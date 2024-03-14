import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

var view = new View({
  projection: 'EPSG:4326'
});

const map = new Map({
  target: 'map',
  layers: [],
  view: new View({
    center: ol.proj.fromLonLat([11.3394883, 44.4938134]),
    zoom: 13
  })
});

view.setCenter([25.5433, 31.3123]);
view.setResolution(10000);
view.setZoom(7);