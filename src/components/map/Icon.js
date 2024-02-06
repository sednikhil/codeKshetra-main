import L from 'leaflet';

const redMarker = new L.Icon({
    iconUrl: require('../../img/red-marker.png'),
    // iconRetinaUrl: require('../../img/red-marker.png'),
    // iconAnchor: null,
    // popupAnchor: null,
    // shadowUrl: null,
    // shadowSize: null,
    // shadowAnchor: null,
    iconSize: new L.Point(20, 30),
    className: 'leaflet-div-icon'
});

export { redMarker };

