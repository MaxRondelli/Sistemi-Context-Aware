import Layer from 'ol/layer/Layer';
import './style.css';
import {Map, Tile, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import { Projection, fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import ImageLayer from 'ol/layer/Image';

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  target: 'map',
  view: new View({
    center: fromLonLat([11.3394883, 44.4938134]),
    zoom: 13,
  }),
});

document.getElementById('zoom-out').onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom - 1);
};

document.getElementById('zoom-in').onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom + 1);
};

document.getElementById('osm').onclick = function () {
  document.getElementById('ztl').onclick = function () {
    const extent = [0, 0, 1024, 968];
    const projection = new Projection({
      code: 'xkcd-image',
      units: 'pixels',
      extent: extent ,
    });

    map = new Map({
      layers: [
        new ImageLayer({
          source: new Static({
            attributions: '© <a href="https://xkcd.com/license.html">xkcd</a>',
            url: 'https://imgs.xkcd.com/comics/online_communities.png',
            projection: projection,
            imageExtent: extent
          }),
        }),
      ],
      target: 'map',
      view: new View({
        projection: projection,
        center: getCenter(extent),
        zoom: 2,
        maxZoom: 8,
      }),
    });
  }
}