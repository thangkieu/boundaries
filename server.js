const fs = require("fs");
const fetch = require("node-fetch");

const list = [
  "1898509",
  "1898458",
  "1896050",
  "1895630",
  "7050386",
  "1891418",
  "1891352",
  "1889204",
  "1887959",
  "1904231",
  "1886159",
];
list.forEach(fetchGeoJSON);

function fetchGeoJSON(id) {
  fetch(`http://polygons.openstreetmap.fr/get_geojson.py?id=${id}&params=0`)
    .then((i) => i.text())
    .then((data) => {
      fs.writeFile(`data/${id}_geojson.json`, data, (err) => {
        console.log("err", err);
      });
    });
}
