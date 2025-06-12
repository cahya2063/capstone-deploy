import L from 'leaflet';

class MapStory {
  constructor(idContainer) {
    this.map = L.map(idContainer, {
      center: [-7.6309, 111.523],
      zoom: 8,
      scrollWheelZoom: true,
    });

    this.markers = [];
    this.baseLayer();
  }

  baseLayer() {
    const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    const osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    });

    const openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution:
        'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    });

    this.baseLayers = {
      'openStreetMap': osm,
      'openStreetMap.HOT': osmHOT,
      'openToMap': openTopoMap,
    };
    L.control.layers(this.baseLayers).addTo(this.map);
  }

  createMultipleMarkers(markerDataArray) {
    this.deleteMarker();
    markerDataArray.forEach(({ lat, lon, content }) => {
      const marker = L.marker([lat, lon]).addTo(this.map);
      if (content) marker.bindPopup(content);
      this.markers.push(marker);
    });
  }

  deleteMarker() {
    this.markers.forEach((marker) => {
      return this.map.removeLayer(marker);
    });
    this.markers = [];
  }

  getMap() {
    return this.map;
  }
}

export default MapStory;
