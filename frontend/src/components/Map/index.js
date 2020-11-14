import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

import mockData from "../../assets/data/mockData.geojson";
import marker from "../../assets/icons/marker.png";
import mapboxgl from "mapbox-gl";

export default class Map extends React.Component {
  static propTypes = {
    setMockData: PropTypes.func,
  };

  state = {
    lat: 38.8966,
    lng: -77.0664,
    zoom: 10,
  };

  componentDidMount() {
    // Get the inside of the mocked data to feed the parent container
    fetch(`${mockData}`)
      .then((response) => response.json())
      .then((data) => this.props.setData(data.features));

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
      map.loadImage(marker, function (error, image) {
        if (error) throw error;
        map.addImage("marker", image);
        map.addSource("point", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [0, 0],
                },
              },
            ],
          },
        });
        /* Add the data to your map as a layer */
        map.addLayer({
          id: "locations",
          type: "symbol",
          /* Add a GeoJSON source containing place coordinates and information. */
          source: {
            type: "geojson",
            data: mockData,
          },
          layout: {
            "icon-image": "marker",
            "icon-allow-overlap": true,
          },
        });
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
