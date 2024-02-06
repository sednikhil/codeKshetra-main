import 'leaflet/dist/leaflet.css';
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { redMarker } from './Icon';

const MapComponent = ({mapCentres}) => {

  // console.log(mapCentres);
    return (
      <MapContainer
        center={[26.4499, 80.3319]} // Set the initial center of the map
        zoom={5} // Set the initial zoom level
        minZoom={4}
        style={{ width: '100%', height: '600px', position: 'relative', boxShadow: '0px 0px 5px 3px rgba(0,0,0,.3)'}} // Set the map's width and height
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapCentres && mapCentres.map((mapcentre, index) => (
          <Marker
            key={index}
            position={[mapcentre.location.coordinates[1], mapcentre.location.coordinates[0]]} // Use the latitude and longitude from your coordinates array
            icon={redMarker}
          >
            <Popup>{mapcentre.name}</Popup>
          </Marker>
        ))}

      </MapContainer>
    );
  };
  
  export default MapComponent;
  