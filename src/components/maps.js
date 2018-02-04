import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
// import HostelandTourData from "./HostelandTourData";
// import { Grid, Card, Icon, Feed } from 'semantic-ui-react';

// console.log("hi");
// var latitude = navigator.geolocation.getCurrentPosition(function(data) {
//   return (data.coords.latitude)
// })
// var longitude = navigator.geolocation.getCurrentPosition(function(data) {
//   return (data.coords.longitude)
// })

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB_fEkwD6OqzP8_b-sw6fMfsAEPMWWB74k&libraries=geometry,drawing,places",
    // loadingElement: <div />,
    loadingElement: <div style={{ height: `200px`, width: `250px` }} />,
    // loadingElement: <div style={{ height: `100%`, width: `100%` }} />,

    // containerElement: <div />,
    containerElement: <div style={{ height: `200px`, width: `250px` }} />,
    // containerElement: <div style={{ height: `400px`, width: `1000px` }} />,

    // mapElement: <div />,
    mapElement: <div style={{ height: `200px`, width: `250px`}} />,
    // mapElement: <div style={{ height: `100%`, width: `800px` }} />,

    center: {
      lat: 39.733676,
      lng: -104.992740
    },
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{
      lat: props.x, //|| 39.733676,
      lng: props.y //|| -104.992740
    }}
  >
  {/* Hostel Pirwa Colonial Calle Tordo, Cusco 08000, Peru */}
    {props.isMarkerShown &&
      <Marker
        position={{
        lat: props.x, //|| 39.733676,
        lng: props.y //|| -104.992740
      }}
        onClick={props.onMarkerClick}
      />
    }
  </GoogleMap>
);

class Gmaps extends React.PureComponent {
  state = {
    isMarkerShown: true,
  }
  componentDidMount() {
    this.delayedShowMarker()
  }
  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }
  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }
  render() {
    return (
      <div>
        <MyMapComponent
          // x={this.state.lat}
          // y={this.state.lng}
          x={39.733676}
          y={-104.992740}
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
        />
      </div>

    )
  }
}

export default Gmaps;
