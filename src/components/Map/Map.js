import React, { Component } from "react";
import { connect } from "react-redux";
import ReactMapGL, {
  Marker,
  FlyToInterpolator,
  LinearInterpolator
} from "react-map-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import {
  getDriverCoordinates,
  getDriverRoute,
  getAddressLatLong,
  updateAddressInput,
  getActiveDriver,
  getActiveItems
} from "../../redux/senderReducer";
import { addLocation } from "../../redux/mainReducer";
import { AutoSizer } from "react-virtualized";
import Cards from "../Dashboard/Cards/Cards";
import ActiveCard from "../Dashboard/Cards/ActiveCard/ActiveCard";
import mapMarker from "./pictures/green_pin.png";
import gps from "./pictures/gps.png";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css";
require("dotenv").config();

class Map extends Component {
  constructor() {
    super();
    this.state = {
      searchAddressInput: "",
      viewport: {
        // width: 700,
        // height: 970,
        latitude: 32.927,
        longitude: -96.799,
        zoom: 13
      }
    };
    this.drawRoute = this.drawRoute.bind(this);
    this.addGeoCoder = this.addGeoCoder.bind(this);
  }

  async drawRoute() {
    await this.props.getDriverCoordinates();
    console.log(
      this.props.sender.activeDriver.current_longitude,
      this.props.sender.activeDriver.current_latitude
    );
    await this.props.getDriverRoute(
      this.state.viewport.longitude,
      this.state.viewport.latitude,
      this.props.sender.activeDriver.current_longitude,
      this.props.sender.activeDriver.current_latitude
    );

    const viewport = {
      ...this.state.viewport,
      longitude: this.state.viewport.longitude,
      latitude: this.state.viewport.latitude,
      zoom: 12,
      transitionDuration: 7000,
      transitionInterpolator: new FlyToInterpolator()
    };
    this.setState({ viewport });

    const map = this.reactMap.getMap();

    map.on("render", () => {
      map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: this.props.sender.routeCoordinates
            }
          }
        },
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "#26a96c",
          "line-width": 4
        }
      });
    });
  }

  locateUser() {
    navigator.geolocation.getCurrentPosition(position => {
      let newObj = { ...this.state.viewport };
      newObj.longitude = position.coords.longitude;
      newObj.latitude = position.coords.latitude;
      newObj.zoom = 16;
      this.props.addLocation(
        position.coords.longitude,
        position.coords.latitude
      );
      this.setState({
        viewport: newObj
      });
    });
  }

  handleInput(input) {
    console.log(input);
    this.setState({ searchAddressInput: input });
  }

  addGeoCoder() {
    const map = this.reactMap.getMap();
    map.addControl(
      new MapboxGeocoder({
        accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
        placeholder: "Input an Address",
        localGeocoder: e => this.handleInput(e)
      })
    );
  }
  componentDidMount() {
    const { getActiveDriver, getActiveItems } = this.props;
    this.locateUser();
    this.addGeoCoder();
    getActiveItems();
    getActiveDriver();
  }
  render() {
    let latitude = this.state.viewport.latitude;
    let longitude = this.state.viewport.longitude;

    return (
      <div className="mapBox">
        <AutoSizer defaultHeight={500} defaultWidth={700}>
          {({ height, width }) => (
            <ReactMapGL
              ref={reactMap => {
                this.reactMap = reactMap;
              }}
              onViewportChange={this.locateUser}
              width={width}
              height={height}
              transitionDuration={1000}
              transitionInterpolator={new LinearInterpolator()}
              mapStyle="mapbox://styles/bstid/cjnuq80xg3p3a2spao7krspfp"
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
              {...this.state.viewport}
              onViewportChange={viewport => this.setState({ viewport })}
            >
              {/* <Marker
                latitude={32.7777531}
                longitude={-96.79547939}
                offsetTop={-2}
              >
                <img src={mapMarker} className="mapMarker" alt="marker" />
              </Marker> */}
            </ReactMapGL>
          )}
        </AutoSizer>

        <img
          src={gps}
          alt=""
          className="gpsIcon"
          onClick={() => this.locateUser()}
        />
        <ActiveCard className="seconds" addGeoCoder={this.addGeoCoder} />
        <Cards
          parseAddress={this.parseAddress}
          searchAddressInput={this.state.searchAddressInput}
          latitude={latitude}
          longitude={longitude}
          drawRoute={this.drawRoute}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { sender: state.sender, main: state.main };
};

export default connect(
  mapStateToProps,
  {
    getDriverCoordinates,
    getDriverRoute,
    addLocation,
    getAddressLatLong,
    updateAddressInput,
    getActiveDriver,
    getActiveItems
  }
)(Map);
