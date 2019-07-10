<template>
  <div class="tags-index">


    <h1>Tags Index</h1>

    <!-- filter search bar -->
    <div>
      <label for="tag-filter">Search Tags</label>
      <input type="text" placeholder="Enter search term" v-model="tagFilter" list="tags">
    </div>


    <!-- autocompletion -->
    <datalist id="tags">
      <option v-for="tag in tags">{{ tag.name }}</option>
    </datalist>


    <div id="container"></div>

    <!-- tag list with filter enabled -->
    <div v-for="tag in filterBy(tags, tagFilter, 'name')">
    <!-- <div v-for="tag in tags"> -->
      <h2 class="name"><router-link v-bind:to="'/tags/' + tag.id">{{ tag.name }}</router-link></h2>

       
    </div>
  </div>
</template>

<style>
  #container {
    min-width: 320px;
    max-width: 800px;
    margin: 0 auto;
  }
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";


export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      tags: [],
      user: {},
      tagFilter: ""
    };
  },
  created: function() {
    axios.get("/api/tags").then(response => {
      this.formatted_series = response.data.formatted_series;
      this.tags = response.data.tags;
      // console.log(this.tags);

      // console.log(this.tags);
      Highcharts.chart('container', {
        chart: {
          type: 'packedbubble',
          height: '100%'
        },
        title: {
          text: 'Most popular dream tags'
        },
        tooltip: {
          useHTML: true,
          pointFormat: '<b>{point.name}:</b> {point.value} occurrence(s)'
        },
        plotOptions: {
          packedbubble: {
            minSize: '80%',
            maxSize: '180%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
              splitSeries: false,
              gravitationalConstant: 0.02
            },
            dataLabels: {
              enabled: true,
              format: '{point.name}',
              filter: {
                property: 'y',
                operator: '>',
                value: 0
              },
              style: {
                color: 'black',
                textOutline: 'none',
                fontWeight: 'normal'
              }
            }
          },
          series: {
            cursor: 'pointer',
            point: {
              events: {
                click: function(e) {

                  this.$router.push("/tags/" + this.tags.find(o => o.name === e.point.name).id);
                  // console.log(e.point.name);
                  // console.log(this.tags);
                }.bind(this),
              }
            }
          }
        },
        series: [{
          name: 'Dream Tags',
          data: this.formatted_series
        },]
      });
    });
  },
};

</script>