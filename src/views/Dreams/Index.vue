<template>
  <div class="dreams-index">


    <h1>Collective Dream Web</h1>
    
    <!-- filter search bar -->
    <div>
      <label for="dream-filter">Search dreams</label>
      <input type="text" placeholder="Enter search term" v-model="dreamFilter">
    </div>

    <label for="dream-filter">Find dreams by theme</label>
    <span v-for="theme in themes">
      <input type="radio" id="theme.name" :value="theme.name" v-model="dreamFilter"> {{ theme.name }}
    </span>

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
       <div class="container">

          <div class="row">
            <div class="col">
              <div class="row masonry-container">

                <div v-for="dream in orderBy(filterBy(dreams, dreamFilter, 'title', 'content', 'tags', 'themes'),sortAttribute, sortAscending)" class="col-lg-4 col-md-6 masonry-item wow fadeInUp animation-delay-2">
                  <div class="card">
                    <figure class="ms-thumbnail ms-thumbnail-horizontal">
                      <img v-bind:src="dream.image_url" alt="" class="img-fluid">
                      <!-- <figcaption class="ms-thumbnail-caption text-center">
                        <div class="ms-thumbnail-caption-content">
                          <h4 class="ms-thumbnail-caption-title mb-2">Lorem ipsum dolor</h4>
                          <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-danger"><i class="zmdi zmdi-favorite"></i></a>
                          <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs ml-1 mr-1 btn-circle-white color-warning"><i class="zmdi zmdi-star"></i></a>
                          <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs ml-1 btn-circle-white color-success"><i class="zmdi zmdi-share"></i></a>
                        </div>
                      </figcaption> -->
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


                      <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam sed labore autem nesciunt ea veniam recusandae necessitatibus reprehenderit.</p> -->
                    <router-link :to="'/users/' + dream.user.id" class="btn btn-warning"><i class="zmdi zmdi-star"></i>{{ dream.user.username }}</router-link>
                   <!--    <a href="javascript:void(0)" class="btn btn-warning"><i class="zmdi zmdi-star"></i> Button</a> -->

                   <router-link :to="'/dreams/' + dream.id"></router-link>
                      <router-link :to="'/dreams/' + dream.id" class="btn btn-royal btn-raised"><i class="zmdi zmdi-globe"></i> See dream content</router-link>
                    </div>
                  </div>
                </div> <!-- item -->
  <!--               <div class="col-lg-4 col-md-6">
                  <div class="card width-auto">
                    <figure class="ms-thumbnail ms-thumbnail-horizontal">
                      <img src="assets/img/demo/port2.jpg" alt="" class="img-fluid">
                      <figcaption class="ms-thumbnail-caption text-center">
                        <div class="ms-thumbnail-caption-content">
                          <h4 class="ms-thumbnail-caption-title mb-2">Lorem ipsum dolor</h4>
                          <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-danger"><i class="zmdi zmdi-favorite"></i></a>
                          <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs ml-1 mr-1 btn-circle-white color-warning"><i class="zmdi zmdi-star"></i></a>
                          <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs ml-1 btn-circle-white color-success"><i class="zmdi zmdi-share"></i></a>
                        </div>
                      </figcaption>
                    </figure>
                    <div class="card-body overflow-hidden text-center">
                      <a href="javascript:void(0)" class="btn-circle btn-circle-royal btn-circle-raised btn-card-float right wow zoomInDown index-2"><i class="zmdi zmdi-star"></i></a>
                      <h4 class="color-royal">Lorem ipsum dolor sit</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam sed labore autem nesciunt ea veniam recusandae necessitatibus reprehenderit.</p>
                      <a href="javascript:void(0)" class="btn btn-royal"><i class="zmdi zmdi-star"></i> Button</a>
                      <a href="javascript:void(0)" class="btn btn-royal btn-raised"><i class="zmdi zmdi-globe"></i> Button</a>
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div> <!-- container -->
        
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
      // console.log(this.dreams);
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