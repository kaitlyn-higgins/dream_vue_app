<template>
  <div class="dreams-index">

    <!-- search bar  -->
        <div class="ms-hero-page-override ms-hero-img-city ms-hero-bg-royal">
          <div class="container">
            <div class="text-center">
              <h1 class="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Collective Dream Web</span></h1>
              <form class="mw-500 center-block animated fadeInUp">
                <input type="text" placeholder="Search for dreams" v-model="dreamFilter" class="form-control color-white">
                <button type="button" class="btn btn-raised btn-primary btn-block"><i class="zmdi zmdi-search"></i> Search</button>
              </form>
              <label for="dream-filter">Find dreams by theme</label>
              <span v-for="theme in themes">
                <input type="radio" id="theme.name" :value="theme.name" v-model="dreamFilter"> {{ theme.name }}
              </span>
            </div>
          </div>
        </div>


        <div class="container">
    <!-- masonry cards -->
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
                            <a v-if="theme.name === 'Lucid'" href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-success wow zoomInDown mix"><i class="zmdi zmdi-eye"></i></a>

                            <a v-if="theme.name === 'Nightmare'" href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-dark wow zoomInDown mix"><i class="zmdi zmdi-flash"></i></a>

                            <a v-if="theme.name === 'Memory'" href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-primary wow zoomInDown mix"><i class="zmdi zmdi-flare"></i></a>

                            <a v-if="theme.name === 'Adventure'" href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-danger wow zoomInDown mix"><i class="zmdi zmdi-landscape"></i></a>

                            <a v-if="theme.name === 'Recurring'" href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-info wow zoomInDown mix"><i class="zmdi zmdi-repeat"></i></a>

                            <a v-if="theme.name === 'Healing'" href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-light wow zoomInDown mix"><i class="zmdi zmdi-flower-alt"></i></a>

                            <a v-if="theme.name === 'inspiration'" href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-warning wow zoomInDown mix"><i class="zmdi zmdi-brush"></i></a>
                          </span>
                        </div>
                      </ul>

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
                </div>
              
              </div>
            </div>
          </div>
        </div>


      


        
  </div>
</template>



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