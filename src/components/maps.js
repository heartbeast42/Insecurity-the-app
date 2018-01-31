import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import HostelandTourData from "./HostelandTourData";
import { Grid, Card, Icon, Feed } from 'semantic-ui-react';

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB_fEkwD6OqzP8_b-sw6fMfsAEPMWWB74k&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%`, width: `100%` }} />,
    // loadingElement: <div style={{ height: `100%`, width: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: `100%` }} />,
    // containerElement: <div style={{ height: `400px`, width: `1000px` }} />,
    mapElement: <div style={{ height: `100%`, width: `100%`}} />,
    // mapElement: <div style={{ height: `100%`, width: `800px` }} />,
    center: { lat: 25.03, lng: 121.6 },
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: -13.519504, lng: -71.980509 }}
  >
  {/* Hostel Pirwa Colonial Calle Tordo, Cusco 08000, Peru */}
    {props.isMarkerShown && <Marker position={{ lat: -13.519504, lng: -71.980509 }} onClick={props.onMarkerClick} />}
  {/* Sunset House Cusco Tandapata 353-B San Blas, Cusco, Peru */}
    {props.isMarkerShown && <Marker position={{ lat: -13.512206, lng: -71.977316 }} onClick={props.onMarkerClick} />}
  {/* Ecopackers Santa Teresa 375, Cusco, Peru */}
    {props.isMarkerShown && <Marker position={{ lat: -13.516174, lng: -71.981071 }} onClick={props.onMarkerClick} />}
  {/* Intro Hostels Cusco 515, Cuesta de Sta. Ana 561, Cusco 08000, Peru */}
    {props.isMarkerShown && <Marker position={{ lat: -13.515630, lng: -71.983850 }} onClick={props.onMarkerClick} />}
  {/* Pariwana Hostel Cusco Teresa 375, Cusco, Peru */}
    {props.isMarkerShown && <Marker position={{ lat: -13.519504, lng: -71.980509 }} onClick={props.onMarkerClick} />}
  {/* Magic Packer Hostel Calle Hospital 772, Cusco 08000, Peru */}
    {props.isMarkerShown && <Marker position={{ lat: -13.521445, lng: -71.985040 }} onClick={props.onMarkerClick} />}
  {/* Inka Club Hostel 284 int. 3, Siete Cuartones, Cusco, Peru */}
    {props.isMarkerShown && <Marker position={{ lat: -13.516124, lng: -71.982163 }} onClick={props.onMarkerClick} />}
  {/* Dragonfly Hostels Siete Cuartones 245, Cusco 08000, Peru */}
    {props.isMarkerShown && <Marker position={{ lat: -13.516007, lng: -71.981904 }} onClick={props.onMarkerClick} />}
  {/* Sungate Hostels 395,, Procuradores, Cusco 08000, Peru */}
    {props.isMarkerShown && <Marker position={{ lat: -13.515193, lng: -71.979852 }} onClick={props.onMarkerClick} />}
  {/* The Point Hostel Meson De La Estrella 172, Cusco 08000, Peru */}
    {props.isMarkerShown && <Marker position={{ lat: -13.519885, lng: -71.980354 }} onClick={props.onMarkerClick} />}
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
        <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
      <Card>
                  <Card.Content>
                    <Card.Header>Hostels & Tours</Card.Header>
                    <Card.Meta>
                      <span className="date">Backpacker since 2018</span>
                    </Card.Meta>
                    <Card.Description>
                      <h1> Book Travel </h1>
                      <HostelandTourData />
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>

                  </Card.Content>
                </Card>
                </Grid.Column>
                <Grid.Column>
<Card>
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
      </Card>
      </Grid.Column>
      </Grid.Row>
      </Grid>
      </div>
    )
  }
}

export default Gmaps;
