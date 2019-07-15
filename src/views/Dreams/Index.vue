<template>
  <div class="dreams-index">


    

    <!-- sorting buttons -->
<!-- 
    <div>
      <button v-on:click="setSortAttribute('updated_at')">Sort by Date</button>
        <i v-if="sortAttribute === 'updated_at' && sortAscending === 1">^</i>
        <i v-if="sortAttribute === 'updated_at' && sortAscending === -1"></i>

        <button v-on:click="setSortAttribute('themes')">Sort by Theme</button>
          <i v-if="sortAttribute === 'themes' && sortAscending === 1">^</i>
          <i v-if="sortAttribute === 'themes' && sortAscending === -1"></i>
    </div> -->

<!--     <div v-for="dream in dreams"> -->

    <!-- <div v-for="dream in orderBy(filterBy(dreams, dreamFilter, 'title', 'content', 'tags', 'themes'),sortAttribute, sortAscending)">
      <h2 class="title"><router-link :to="'/dreams/' + dream.id">{{ dream.title }}</router-link></h2>
      <h5 class="username"><router-link :to="'/users/' + dream.user.id">{{ dream.user.username }}</router-link></h5>
      <h6>Dream Themes: </h6>
      <li v-for="theme in dream.themes">{{ theme.name }}</li>
      <div class="image_url"><img v-bind:src="dream.image_url" alt=""></div>
      <p class="content">{{ dream.content }}</p>

      <div v-for="tag in dream.tags">
        <h4 class="tag_name">
        <ul>
          <li><router-link :to="'/tags/' + tag.id">{{ tag.name }}</router-link></li>
        </ul>
        </h4>
      </div> 

    </div> -->

    <div class="material-background"></div>


    <div class="ms-hero-page-override ms-hero-img-city ms-hero-bg-royal">
      <div class="container">
        <div class="text-center">
          <h1 class="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Collective Dream Web</span></h1>
          <form class="mw-500 center-block animated fadeInUp">
            <input type="text" placeholder="Search for dreams" v-model="dreamFilter" class="form-control color-white">
            <button type="button" class="btn btn-raised btn-primary btn-block"><i class="zmdi zmdi-search"></i> Search</button>
          </form>
        </div>
      </div>
    </div>

    <div class="card d-none d-md-block">
      <div class="card-header bg-primary">
        <h3 class="card-title text-center"><i class="zmdi zmdi-filter-list"></i>Filter List</h3>
      </div>
      <div class="row no-m">
        <div class="col-lg-8 col-sm-12 no-pr no-pl">
          <h4 class="text-center no-mb">Categories</h4>
          <ul class="nav nav-tabs nav-tabs-transparent indicator-primary nav-tabs-full nav-tabs-7" role="tablist">
            
            <li class="nav-item"><a class="nav-link withoutripple no-pl no-pr filter active" data-filter="all" href="#cat" aria-controls="cat" role="tab" data-toggle="tab">All</a></li>
            <li class="nav-item"><a class="nav-link withoutripple no-pl no-pr filter" data-filter=".category-1" href="#cat1" aria-controls="cat1" role="tab" data-toggle="tab">Web Design</span></a></li>
            <li class="nav-item"><a class="nav-link withoutripple no-pl no-pr filter" data-filter=".category-2" href="#cat2" aria-controls="cat2" role="tab" data-toggle="tab">Nature</a></li>
            <li class="nav-item"><a class="nav-link withoutripple no-pl no-pr filter" data-filter=".category-3" href="#cat3" aria-controls="cat3" role="tab" data-toggle="tab">People</a></li>
            <li class="nav-item"><a class="nav-link withoutripple no-pl no-pr filter" data-filter=".category-4" href="#cat4" aria-controls="cat4" role="tab" data-toggle="tab">Landscape</a></li>
            <li class="nav-item"><a class="nav-link withoutripple no-pl no-pr filter" data-filter=".category-5" href="#cat5" aria-controls="cat5" role="tab" data-toggle="tab">Cities</a></li>
            <li class="nav-item"><a class="nav-link withoutripple no-pl no-pr filter" data-filter=".category-6" href="#cat6" aria-controls="cat6" role="tab" data-toggle="tab">Fashion</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-sm-6 no-pr no-pl">
          <h4 class="text-center no-mb">Columns</h4>
          <ul class="nav nav-tabs nav-tabs-transparent indicator-primary nav-tabs-full nav-tabs-4" role="tablist">
            <li class="nav-item"><a id="Cols1" class="nav-link withoutripple" href="#home7" aria-controls="home7" role="tab" data-toggle="tab">1</a></li>
            <li class="nav-item"><a id="Cols2" class="nav-link withoutripple" href="#profile7" aria-controls="profile7" role="tab" data-toggle="tab">2</span></a></li>
            <li class="nav-item"><a id="Cols3" class="nav-link withoutripple active" href="#messages7" aria-controls="messages7" role="tab" data-toggle="tab">3</a></li>
            <li class="nav-item"><a id="Cols4" class="nav-link withoutripple" href="#settings7" aria-controls="settings7" role="tab" data-toggle="tab">4</a></li>
          </ul>
        </div>
      </div>
    </div>
    

    <div class="container">
      <div class="text-center mb-6">
        <h1>Collective Dream Web</h1>
        
        <!-- filter search bar -->
        <!-- <div>
          <label for="dream-filter">Search dreams</label>
          <input type="text" placeholder="Enter search term" v-model="dreamFilter">
        </div> -->

        <label for="dream-filter">Find dreams by theme</label>
        <span v-for="theme in themes">
          <input type="radio" id="theme.name" :value="theme.name" v-model="dreamFilter"> {{ theme.name }}
        </span>


        <h1 class="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Collective Dream Web</h1>
        <p class="lead lead-lg color-white text-center center-block mt-2 mb-4 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7">Discover our projects and the <span class="colorStar">rigorous process</span> of creation. Our principles are creativity, design, experience and knowledge.</p>
      </div>
      <div class="row">
        <div class="col">
          <div class="row masonry-container">


            <div v-for="dream in orderBy(filterBy(dreams, dreamFilter, 'title', 'content', 'tags', 'themes'),sortAttribute, sortAscending)" class="col-lg-4 col-md-6 masonry-item wow fadeInUp animation-delay-2">
              <div class="card">
                <figure class="ms-thumbnail ms-thumbnail-horizontal">
                  <img v-bind:src="dream.image_url" alt="" class="img-fluid">
                  <figcaption class="ms-thumbnail-caption text-center">
                    <div class="ms-thumbnail-caption-content">
                      <h4 class="ms-thumbnail-caption-title mb-2">{{dream.title}}</h4>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-danger"><i class="zmdi zmdi-favorite"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs ml-1 mr-1 btn-circle-white color-warning"><i class="zmdi zmdi-star"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs ml-1 btn-circle-white color-success"><i class="zmdi zmdi-share"></i></a>
                    </div>
                  </figcaption>
                </figure>
                <div class="card-body overflow-hidden text-center">
                  <ul class="row">
                    <div style="display:flex; flex-direction: row; justify-content: center; align-items: center">
                      <span v-for="theme in dream.themes">
                        <a v-if="theme.name === 'Lucid'" href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-success wow zoomInDown"><i class="zmdi zmdi-eye"></i></a>

                        <a v-if="theme.name === 'Nightmare'" href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-dark wow zoomInDown"><i class="zmdi zmdi-flash"></i></a>

                        <a v-if="theme.name === 'Memory'" href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-primary wow zoomInDown"><i class="zmdi zmdi-flare"></i></a>

                        <a v-if="theme.name === 'Adventure'" href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-danger wow zoomInDown"><i class="zmdi zmdi-landscape"></i></a>

                        <a v-if="theme.name === 'Recurring'" href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-info wow zoomInDown"><i class="zmdi zmdi-repeat"></i></a>

                        <a v-if="theme.name === 'Healing'" href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-light wow zoomInDown"><i class="zmdi zmdi-flower-alt"></i></a>

                        <a v-if="theme.name === 'inspiration'" href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-warning wow zoomInDown"><i class="zmdi zmdi-brush"></i></a>
                      </span>

                 
                    
                      <!-- <li href="javascript:void(0)" class="btn-circle btn-circle-royal btn-circle-raised btn-card-float right wow zoomInDown index-2"><i class="zmdi zmdi-star"></i></li>
   
                      <li href="javascript:void(0)" class="btn-circle btn-circle-royal btn-circle-raised btn-card-float right wow zoomInDown index-2"><i class="zmdi zmdi-star"></i></li>
    
                      <li href="javascript:void(0)" class="btn-circle btn-circle-royal btn-circle-raised btn-card-float right wow zoomInDown index-2"><i class="zmdi zmdi-star"></i></li>
              
                      <li href="javascript:void(0)" class="btn-circle btn-circle-royal btn-circle-raised btn-card-float right wow zoomInDown index-2"><i class="zmdi zmdi-star"></i></li>
             
                      <li href="javascript:void(0)" class="btn-circle btn-circle-royal btn-circle-raised btn-card-float right wow zoomInDown index-2"><i class="zmdi zmdi-star"></i></li>
           
                      <li href="javascript:void(0)" class="btn-circle btn-circle-royal btn-circle-raised btn-card-float right wow zoomInDown index-2"><i class="zmdi zmdi-star"></i></li>
         
                      <li href="javascript:void(0)" class="btn-circle btn-circle-royal btn-circle-raised btn-card-float right wow zoomInDown index-2"><i class="zmdi zmdi-star"></i></li> -->
                   
                    </div>
                  </ul>


                  <!-- <a href="javascript:void(0)" class="btn-circle btn-circle-royal btn-circle-raised btn-card-float right wow zoomInDown index-2"><i class="zmdi zmdi-star"></i></a> -->


                  <h4 class="color-royal"><router-link :to="'/dreams/' + dream.id">{{ dream.title }}</router-link></h4>
                  <div v-for="tag in dream.tags">
                    <p class="tag_name">
                    <ul>
                      <li><p><router-link :to="'/tags/' + tag.id">{{ tag.name }}</router-link></p></li>
                    </ul>
                    </p>
                  </div>
                  <router-link :to="'/users/' + dream.user.id" class="btn btn-royal"><i class="zmdi zmdi-star"></i>{{dream.user.username}}</router-link>
                  <router-link :to="'/dreams/' + dream.id" class="btn btn-royal btn-raised"><i class="zmdi zmdi-globe"></i> See Dream Content</router-link>
                </div>
              </div>
            </div> <!-- item -->
          
          </div>
        </div>
      </div>
    </div> <!-- container -->


    <!-- <div class="material-background"></div>
       <div class="container">

          <div class="row">
            <div class="col">
              <div class="row masonry-container">

                <div v-for="dream in orderBy(filterBy(dreams, dreamFilter, 'title', 'content', 'tags', 'themes'),sortAttribute, sortAscending)" class="col-lg-4 col-md-6 masonry-item wow fadeInUp animation-delay-2">
                  <div class="card">
                    <figure class="ms-thumbnail ms-thumbnail-horizontal">
                      <img v-bind:src="dream.image_url" alt="" class="img-fluid">

                    </figure>
                    <div class="card-body overflow-hidden text-center">
                      <a href="javascript:void(0)" class="btn-circle btn-circle-warning btn-circle-raised btn-card-float right wow zoomInDown index-2"><i class="zmdi zmdi-star"></i></a>
                      <h4 class="color-warning"><router-link :to="'/dreams/' + dream.id">{{ dream.title }}</router-link></h4>

                      <div v-for="tag in dream.tags">
                        <h4 class="tag_name">
                        <ul>
                          <li><p><router-link :to="'/tags/' + tag.id">{{ tag.name }}</router-link></p></li>
                        </ul>
                        </h4>
                      </div> 

                    <router-link :to="'/users/' + dream.user.id" class="btn btn-warning"><i class="zmdi zmdi-star"></i>{{ dream.user.username }}</router-link>

                   <router-link :to="'/dreams/' + dream.id"></router-link>
                      <router-link :to="'/dreams/' + dream.id" class="btn btn-royal btn-raised"><i class="zmdi zmdi-globe"></i> See dream content</router-link>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div> --> 
        
  </div>
</template>


<style>
/*  ul {display: inline;} 
  ul li { list-style: none;display: inline;}*/
  /*#row{
      display: inline-block;
      align: top;
  }*/
</style>


<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      dreams: [],
      tags: [],
      user: {},
      dreamFilter: "",
      themes: [],
      sortAttribute: "",
      sortAscending: 1
    };
  },
  created: function() {
    axios.get("/api/dreams").then(response => {
      this.dreams = response.data;
      console.log(this.dreams);
    });
    axios.get("/api/themes").then(response => {
      this.themes = response.data;
      console.log(this.themes);
    });
  },
  methods: {
    // setSortAttribute: function(attribute) {
    //   if (this.sortAttribute === attribute) {
    //     this.sortAscending = this.sortAscending * -1;
    //   } else {
    //     this.sortAscending = 1;
    //   }
    //   this.sortAttribute = attribute;
    // },
  }
};

</script>