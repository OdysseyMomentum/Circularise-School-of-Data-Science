import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";

import mockData from "../../assets/data/mockData.geojson";
import markerIcon from "../../assets/icons/marker.png";
import markerIconGrey from "../../assets/icons/markerGrey.png";

import Marker from "./Marker";

export default class Map extends React.Component {
  static propTypes = {
    setMockData: PropTypes.func,
  };

  state = {
    lat: 38.8966,
    lng: -77.0664,
    zoom: 10,
  };

  flyToMarker = (currentFeature, map) => {
    map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15,
    });
  };

  addMarkers = (data, map) => {
    const that = this;
    data.features.forEach(function (marker) {
      var el = document.createElement("div");
      el.id = "marker-" + marker.properties.id;
      el.className = "marker";
      el.style.backgroundImage = "url('" + markerIcon + "')";
      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
      // /**
      //  * Listen to the element and when it is clicked, do three things:
      //  * 1. Fly to the point
      //  * 2. Close all other popups and display popup for clicked store
      //  * 3. Highlight listing in sidebar (and remove highlight for all other listings)
      // **/
      el.addEventListener("click", function (e) {
        that.flyToMarker(marker, map);
        // map.flyTo({
        //   center: marker.geometry.coordinates,
        //   zoom: 15,
        // });
        // createPopUp(marker);
        // var activeItem = document.getElementsByClassName('active');
        // e.stopPropagation();
        // if (activeItem[0]) {
        //   activeItem[0].classList.remove('active');
        // }
        // var listing = document.getElementById('listing-' + marker.properties.id);
        // listing.classList.add('active');
      });
    });
  };

  componentDidMount() {
    const that = this;
    // Read the content of the mocked data
    fetch(`${mockData}`)
      .then((response) => response.json())
      .then((data) => {
        // Feed the parent container
        this.props.setData(data.features);

        // Render the map
        const map = new mapboxgl.Map({
          container: this.mapContainer,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [this.state.lng, this.state.lat],
          zoom: this.state.zoom,
        });

        map.on("move", () => {
          this.setState({
            lng: map.getCenter().lng.toFixed(4),
            lat: map.getCenter().lat.toFixed(4),
            zoom: map.getZoom().toFixed(2),
          });
        });

        map.on("load", function (e) {
          map.addSource("point", {
            type: "geojson",
            data: data,
          });

          that.addMarkers(data, map);
        });
      });
  }
  render() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWVnaXoiLCJhIjoiY2tlZTNwcDJ3MHBlOTJybHRzaWduNGRjaCJ9.E4R2Mr5QMvQnIWt8StxRQg";
    return (
      <div className="map">
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
        {/* {Object.keys(this.state.markers).map((key) => (
          <Marker key={key} />
        ))} */}
        <div className="sidebarStyle">
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div>
      </div>
    );
  }
}
