'use client'

import ReactMapboxGl from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const accessToken = "pk.eyJ1IjoiZWxpbWFuMDUiLCJhIjoiY2xraG96bWd3MDNybjNkcXRjazNkNDU4MyJ9.fDBiW0CjtMM_zWauxmKnJg"
const Map = ReactMapboxGl({accessToken})
//const zoom = [10.00]

export const MapBiocloud = ({style}: any) => {

  return (
    <div className='map-biocloud'>
            <Map
            style="mapbox://styles/mapbox/streets-v8"
            zoom={[17.00]}
            center={[-56.15228, -34.92335]}
            containerStyle={{
            height: "100%",
            width: "100%"
            }}
            >
            </Map>
        </div>
  )
}
