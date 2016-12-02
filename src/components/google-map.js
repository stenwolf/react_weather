import React from 'react';
import GoogleMap from 'google-map-react';

export default (props) => {
  return(
    <GoogleMap
     defaultCenter={{lat: props.lat, lng: props.lon}}
     defaultZoom={10}>
    </GoogleMap>
  );
}
