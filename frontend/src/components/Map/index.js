import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";

import mockData from "../../assets/data/mockData.geojson";
import markerIcon from "../../assets/icons/marker.png";

export default class Map extends React.Component {
  static propTypes = {
    setMockData: PropTypes.func,
  };

  state = {
    lat: 38.8966,
    lng: -77.0664,
    zoom: 10,
    map: "",
  };

  flyToMarker = (currentFeature) => {
    // Center the map view on a specific pin
    this.state.map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15,
    });

    // Create a popup with more infos
    // Hacky way to remove previously created popup
    var popUps = document.getElementsByClassName("mapboxgl-popup");
    if (popUps[0]) popUps[0].remove();

    const SDG = currentFeature.properties.SDG.map((val, i) => {
      return `<div class="sdg" data-value=${val}>
        ${val}
      </div>`;
    });
    new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(
        `<h3>${currentFeature.properties.name}</h3>
        <h4><b>Weight</b>: ${currentFeature.properties.weight}kg</h4>
        <h4><b>Top SDG</b>:</h4>
        <div class='sdg-container'>
          ${SDG.join("")}
        </div>`
      )
      .addTo(this.state.map);
  };

  addMarkers = (data) => {
    const that = this;
    data.features.forEach(function (marker) {
      var el = document.createElement("div");
      el.id = "marker-" + marker.properties.id;
      el.className = "marker";
      el.style.backgroundImage = "url('" + markerIcon + "')";

      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(that.state.map);
      el.addEventListener("click", function (e) {
        that.flyToMarker(marker);
      });
    });
  };

  componentDidMount() {
    const that = this;
    // Read the content of the mocked data
    fetch(`${mockData}`)
      .then((response) => response.json())
      .then((data) => {
        // Feed the parent component with data
        that.props.setData(data.features);

        // Render the map
        this.setState({
          map: new mapboxgl.Map({
            container: this.mapContainer,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom,
          }),
        });

        this.state.map.on("move", () => {
          this.setState({
            lng: that.state.map.getCenter().lng.toFixed(4),
            lat: that.state.map.getCenter().lat.toFixed(4),
            zoom: that.state.map.getZoom().toFixed(2),
          });
        });

        this.state.map.on("load", () => {
          that.state.map.addSource("point", {
            type: "geojson",
            data: data,
          });

          that.addMarkers(data);
        });
      });
  }
  render() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWVnaXoiLCJhIjoiY2tlZTNwcDJ3MHBlOTJybHRzaWduNGRjaCJ9.E4R2Mr5QMvQnIWt8StxRQg";
    return (
      <div className="map">
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
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
