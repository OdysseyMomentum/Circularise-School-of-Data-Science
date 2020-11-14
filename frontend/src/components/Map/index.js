import React from "react";
import mockDataCollection from "../../assets/data/mockDataCollection.geojson";
import marker from "../../assets/icons/marker.png";
import mapboxgl from "mapbox-gl";
import "./styles.css";

export default class Map extends React.Component {
  state = {
    lat: 38.909671,
    lng: -77.034084,
    zoom: 14,
  };

  componentDidMount() {
    // function buildLocationList(data) {
    //   data.features.forEach(function(store, i){
    //     /**
    //      * Create a shortcut for `store.properties`,
    //      * which will be used several times below.
    //     **/
    //     var prop = store.properties;

    //     /* Add a new listing section to the sidebar. */
    //     var listings = document.getElementById('listings');
    //     var listing = listings.appendChild(document.createElement('div'));
    //     /* Assign a unique `id` to the listing. */
    //     listing.id = "listing-" + prop.id;
    //     /* Assign the `item` class to each listing for styling. */
    //     listing.className = 'item';

    //     /* Add the link to the individual listing created above. */
    //     var link = listing.appendChild(document.createElement('a'));
    //     link.href = '#';
    //     link.className = 'title';
    //     link.id = "link-" + prop.id;
    //     link.innerHTML = prop.address;

    //     /* Add details to the individual listing. */
    //     var details = listing.appendChild(document.createElement('div'));
    //     details.innerHTML = prop.city;
    //     if (prop.phone) {
    //       details.innerHTML += ' · ' + prop.phoneFormatted;
    //     }
    //   });
    // }

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
        console.log(mockDataCollection);
        map.addImage("cat", image);
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
            data: mockDataCollection,
          },
          layout: {
            "icon-image": "cat",
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
