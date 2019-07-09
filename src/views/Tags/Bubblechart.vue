<template>
  <div class="chartElem">
<!--     <div class="row">
      <highcharts class="chart" :options="chartOptions" :updateArgs="updateArgs"></highcharts>
      <div>
        <h3>Flexibly change the value of each point:</h3>
        <h4>Points:</h4>
        <form class="row points">
          <div v-for="index in 8" :key="index">
            <p>{{index}}</p>
            <input v-model.number="points[index-1]" type="number" class="numberInput">
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div id="title">
        <h3>Set chart title dynamically:</h3>
        <input type="text" v-model="title">
      </div>
      <div id="chartType">
        <h3>Select chart type:</h3>
        <select v-model="chartType">
          <option>Spline</option>
          <option>AreaSpline</option>
          <option>Line</option>
          <option>Scatter</option>
          <option>Column</option>
          <option>Area</option>
        </select>
      </div>
      <div id="animationDuration">
        <h3>Select update animation duration:</h3>
        <select v-model="animationDuration" type="number">
          <option>0</option>
          <option>500</option>
          <option>1000</option>
          <option>2000</option>
        </select>
      </div>
      <div id="seriesColor">
        <h3>Select color of the series:</h3>
        <div class="row">
          <input id="colorPicker" v-if="colorInputIsSupported" type="color" value="#6fcd98" v-model="seriesColor">
          <select v-else v-model="seriesColor">
            <option>Red</option>
            <option>Green</option>
            <option>Blue</option>
            <option>Pink</option>
            <option>Orange</option>
            <option>Brown</option>
            <option>Black</option>
            <option>Purple</option>
          </select>
        </div>
        <p>Current color: {{seriesColor}}</p>
      </div>
    </div> -->
    <div id="container"></div>
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

export default {
  data() {
    return {
      tags: []
    };
  },
  created: function() {
    axios.get("/api/tags").then(response => {
      this.tags = response.data;
      console.log(this.tags);
    });
  },
  mounted() {
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
        pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
      },
      plotOptions: {
        packedbubble: {
          minSize: '40%',
          maxSize: '120%',
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
              click: function() {
                // axios.get("/api/tags").then(response => {
                //   this.tags = response.data;
                //   console.log(this.tags);
                //   this.$router.push("/tags/1");
                // });
                

                location.href = '/tags';
                // location.href = 'https://en.wikipedia.org/wiki/' +
                //       this.options.name;
              }
            }
          }
        }
      },
      series: [{
        name: 'Dream Tags',
        data: [{
          name: 'Germany',
          value: 767.1
        }, {
          name: 'Dolphin',
          value: 20.7
        },
        {
          name: "Belgium",
          value: 97.2
        },
        {
          name: "Czech Republic",
          value: 111.7
        },
        {
          name: "Netherlands",
          value: 158.1
        },
        {
          name: "Spain",
          value: 241.6
        },
        {
          name: "Ukraine",
          value: 249.1
        },
        {
          name: "Poland",
          value: 298.1
        },
        {
          name: "France",
          value: 323.7
        },
        {
          name: "Romania",
          value: 78.3
        },
        {
          name: "United Kingdom",
          value: 415.4
        }, {
          name: "Turkey",
          value: 353.2
        }, {
          name: "Italy",
          value: 337.6
        },
        {
          name: "Greece",
          value: 71.1
        },
        {
          name: "Austria",
          value: 69.8
        },
        {
          name: "Belarus",
          value: 67.7
        },
        {
          name: "Serbia",
          value: 59.3
        },
        {
          name: "Finland",
          value: 54.8
        },
        {
          name: "Bulgaria",
          value: 51.2
        },
        {
          name: "Portugal",
          value: 48.3
        },
        {
          name: "Norway",
          value: 44.4
        },
        {
          name: "Sweden",
          value: 44.3
        },
        {
          name: "Hungary",
          value: 43.7
        },
        {
          name: "Switzerland",
          value: 40.2
        },
        {
          name: "Denmark",
          value: 40
        },
        {
          name: "Slovakia",
          value: 34.7
        },
        {
          name: "Ireland",
          value: 34.6
        },
        {
          name: "Croatia",
          value: 20.7
        },
        {
          name: "Estonia",
          value: 19.4
        },
        {
          name: "Slovenia",
          value: 16.7
        },
        {
          name: "Lithuania",
          value: 12.3
        },
        {
          name: "Luxembourg",
          value: 10.4
        },
        {
          name: "Macedonia",
          value: 9.5
        },
        {
          name: "Moldova",
          value: 7.8
        },
        {
          name: "Latvia",
          value: 7.5
        },
        {
          name: "Cyprus",
          value: 7.2
        }]
      },]
    });

  }
};
</script>
