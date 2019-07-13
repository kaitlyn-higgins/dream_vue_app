<template>
  <div class="spider-map">

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
  #marker {
  background-image: url('https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg');
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  }
   
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
      // monument: [-77.0353, 38.8895]
    };
  },
  created: function() {
    axios.get("/api/tags").then(response => {
      this.map_tags = response.data.map_tags;
      this.tags = response.data.tags;
      // this.map_lat = response.data.map_lat;
      // this.map_long = response.data.map_long;
      // console.log(this.map_lat[0]);
      // console.log(this.map_long[0]);
      // console.log(this.tags);
      // console.log(this.map_tags);
      // console.log(this.tags[0]);

      mapboxgl.accessToken = 'pk.eyJ1Ijoia2FpdGx5bi1oaWdnaW5zIiwiYSI6ImNqdzhnenY3ZTA0bG40OXFtYXU5Y3o3OW0ifQ.ui0g5SMebq8LOjzECdtxMA';

      var features = [
        {id: 0, type: 'car', color: 'red'},
        {id: 1, type: 'bicycle', color: '#ff00ff'},
        {id: 2, type: 'bus', color: 'blue'},
        {id: 3, type: 'cab', color: 'orange'},
        {id: 4, type: 'train', color: 'red'}
      ];
      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-74.50, 40],
        zoom: 9
      });

      var spiderifier = new MapboxglSpiderifier(map, {
        onClick: function(e, spiderLeg) {
          console.log('Clicked on ', spiderLeg);
        },
        markerWidth: 40,
        markerHeight: 40,
      });

      map.on('style.load', function() {
        spiderifier.spiderfy([-74.50, 40], features);
      });

      map.on('click', function() {
        spiderifier.unspiderfy();
      });

      console.log(spiderifier);
         

    });
  },
  mounted: function() {
 


  },

  methods: {

  }
};
</script>