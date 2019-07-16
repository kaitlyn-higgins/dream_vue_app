<template>
  <div class="tags-index">


    <!-- <h1>Tags Index</h1> -->

    <!-- filter search bar -->
    <!-- <div>
      <label for="tag-filter">Search Tags</label>
      <input type="text" placeholder="Enter search term" v-model="tagFilter" list="tags">
    </div> -->


    <!-- autocompletion -->
    <!-- <datalist id="tags">
      <option v-for="tag in tags">{{ tag.name }}</option>
    </datalist> -->


    <!-- <div id="container"></div> -->


    <!-- tag list with filter enabled -->
    <!-- <div v-for="tag in filterBy(tags, tagFilter, 'name')">
    
      <h2 class="name"><router-link v-bind:to="'/tags/' + tag.id">{{ tag.name }}</router-link></h2>
    </div> -->


     <!--  <div class="ms-site-container"> -->
        <div class="intro-full ms-hero-img-keyboard ms-hero-bg-primary color-white" id="home">
          <div class="intro-full-content index-1">
            <div class="container">
              <div class="text-center mb-4">
                <h2 class="animated zoomInRight animation-delay-7">Most Popular Dream Tags & Themes</h2>
                <div id="container" class="animated rollIn animation-delay-5"></div>
                
                <br>
              </div>
              <div class="text-center mb-2">
                <a data-scroll href="#timeline" class="btn-circle btn-circle-raised btn-circle-white animated fadeInUp animation-delay-20"><i class="zmdi zmdi-long-arrow-down"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="container container-full pt-6">


          <div class="card card-primary-inverse mt-4 wow fadeInUp" id="skills">
            <div class="card-body card-body-big">
 

              <h3 class="text-center fw-500 mb-4">All Strands</h3>

              <form class="mw-500 center-block animated fadeInUp">
                <input type="text" placeholder="Search for strands" v-model="tagFilter" class="form-control color-white">
                <button type="button" class="btn btn-raised btn-royal btn-block"><i class="zmdi zmdi-search"></i> Search</button>
              </form>

              <div class="text-center center-block mw-200">
                <span v-for="tag in filterBy(tags, tagFilter, 'name')" class="ms-tag ms-tag-light color-primary"><router-link v-bind:to="'/tags/' + tag.id">{{ tag.name }}</router-link></span>
              </div>

              <h4 class="text-center mt-10 mb-2">Click to see corresponding dreams</h4>
            </div>
          </div>


        </div> <!-- container -->
        <div class="btn-back-top">
          <a href="#" data-scroll id="back-top" class="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised "><i class="zmdi zmdi-long-arrow-up"></i></a>
        </div>
        <div class="bg-light index-1 intro-full-next pt-6">

          <div class="btn-back-top">
            <a href="#" data-scroll id="back-top" class="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised "><i class="zmdi zmdi-long-arrow-up"></i></a>
          </div>
        </div>
      <!-- </div>  --><!-- ms-site-container -->
      


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
      this.formatted_tag_series = response.data.formatted_tag_series;
      this.formatted_theme_series = response.data.formatted_theme_series;
      this.map_tags = response.data.map_tags;
      this.tags = response.data.tags;
      // console.log(this.tags);
      console.log(this.map_tags);
      // console.log(this.tags);
      Highcharts.chart('container', {
        chart: {
          type: 'packedbubble',
          height: '100%',
          backgroundColor: 'transparent'
        },
        title: {
          text: ''
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
                color: 'white',
                textOutline: 'none',
                fontWeight: 'heavy'
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
          data: this.formatted_tag_series
        },
        {
          name: 'Themes',
          data: this.formatted_theme_series
        }]
      });
      
    });
  },

};

</script>