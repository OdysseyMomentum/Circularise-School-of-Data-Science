import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import "./styles.css";

export default class Map extends React.Component {
  state = {
    lng: 5,
    lat: 34,
    zoom: 2,
  };
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
  }
  render() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWVnaXoiLCJhIjoiY2tlZTNwcDJ3MHBlOTJybHRzaWduNGRjaCJ9.E4R2Mr5QMvQnIWt8StxRQg";
    return (
      <header className="map">
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </header>
    );
  }
}
