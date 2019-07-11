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
  /*body { margin:0; padding:0; }*/
  #map {top:0; bottom:0; width:100%; height:700px; }
</style>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      errors: []
    };
  },
  mounted: function() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2FpdGx5bi1oaWdnaW5zIiwiYSI6ImNqdzhnenY3ZTA0bG40OXFtYXU5Y3o3OW0ifQ.ui0g5SMebq8LOjzECdtxMA';
    var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [-88.72205, 41.95361], // starting position [lng, lat]
      zoom: 3.5 // starting zoom
    });
  },
  methods: {
  }
};
</script>