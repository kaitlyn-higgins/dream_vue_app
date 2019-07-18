<template>
  <div class="map">

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <h1>Map page</h1>

    <div id='map'></div>
    

  </div>
</template>

<style>

  #map {top:0; bottom:0; width:100%; height:700px; }

   
  .mapboxgl-popup {
  max-width: 400px;
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
  }
</style>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      errors: [],
      tags: [],
    };
  },
  created: function() {
    axios.get("/api/tags").then(response => {
      this.map_tags_list = response.data.map_tags_list;
      this.tags = response.data.tags;
      // this.map_lat = response.data.map_lat;
      // this.map_long = response.data.map_long;
      // console.log(this.map_lat[0]);
      // console.log(this.map_long[0]);
      // console.log(this.tags);
      // console.log(this.map_tags_list);
      // console.log(this.tags[0]);

      mapboxgl.accessToken = 'pk.eyJ1Ijoia2FpdGx5bi1oaWdnaW5zIiwiYSI6ImNqdzhnenY3ZTA0bG40OXFtYXU5Y3o3OW0ifQ.ui0g5SMebq8LOjzECdtxMA';
      var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-88.72205, 41.95361], // starting position [lng, lat]
        zoom: 3.5 // starting zoom
      });
 
      map.on('load', function() {
         
        // Add a layer showing the places.
        map.addLayer({
          "id": "places",
          "type": "symbol",
          "source": {
            "type": "geojson",
            "data": {
              "type": "FeatureCollection",
              "features": this.map_tags_list
            }
          },
          "layout": {
            "icon-image": "{icon}-15",
            "icon-allow-overlap": true
          }
        });
                 
        // Create a popup, but don't add it to the map yet.
        var popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false
        });
                 
        map.on('mouseenter', 'places', function(e) {
          // Change the cursor style as a UI indicator.
          map.getCanvas().style.cursor = 'pointer';
           
          var coordinates = e.features[0].geometry.coordinates.slice();
          var description = e.features[0].properties.description;
           
          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }
           
          // Populate the popup and set its coordinates
          // based on the feature found.
          popup.setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
        });
           
        map.on('mouseleave', 'places', function() {
          map.getCanvas().style.cursor = '';
          popup.remove();
        });
      }.bind(this));

    });
  },
  mounted: function() {
 


  },

  methods: {

  }
};
</script>