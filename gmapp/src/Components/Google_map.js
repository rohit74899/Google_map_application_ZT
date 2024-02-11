// MapContainer.js
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '90%'
};

class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={mapStyles}
        initialCenter={{ lat: 37.7749, lng: -122.4194 }}
        zoom={12}
      >
        <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);
