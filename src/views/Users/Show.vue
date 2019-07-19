<template>
  <div class="users-show">

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

<!-- current user options / views -->

    <!-- <div v-if="isCurrentUser()">
      <h2>Welcome back, {{ user.username }}</h2>

      <button><router-link to="/dreams/new">Enter a new dream</router-link></button>
     
      <button> <router-link v-bind:to="'/users/' + user.id + '/edit'">Edit Account Info</router-link></button>
    </div> -->


<!-- dream strand text -->

    <!-- <div>
      <h2 v-if="isCurrentUser()">Your dream strand</h2>
      <h2 v-else>{{user.username}}'s dream strand</h2>

    </div> -->


<!-- photo of user -->
    <!-- <div><img v-bind:src="user.photo" alt=""></div> -->


    <!-- filter search bar -->

    <!-- <div>
      <label for="dream-filter" v-if="isCurrentUser()">Search your dreams</label>
      <label for="dream-filter" v-else>Search {{user.username}}'s dreams</label>
      <input type="text" placeholder="Enter search term" v-model="dreamFilter" list="titles">
    </div>


    <label for="dream-filter">Find dreams by theme</label>
    <span v-for="theme in themes">
      <input type="radio" id="theme.name" :value="theme.name" v-model="dreamFilter"> {{ theme.name }}
    </span> -->

    <!-- autocompletion -->

    <!-- <datalist id="titles">
      <option v-for="dream in user.dreams">{{ dream.title }}</option>
    </datalist> -->


    <!-- sorting buttons -->

    <!-- <div>
      <button v-on:click="setSortAttribute('updated_at')">Sort by Date</button>
        <i v-if="sortAttribute === 'updated_at' && sortAscending === 1">^</i>
        <i v-if="sortAttribute === 'updated_at' && sortAscending === -1"></i>
    </div> -->


    <!-- main content w/ filter enabled -->
   
    <!-- <div v-for="dream in orderBy(filterBy(user.dreams, dreamFilter, 'title', 'content', 'tags', 'themes'), sortAttribute, sortAscending)">  

      <h2 class="title"><router-link v-bind:to="'/dreams/' + dream.id">{{ dream.title }}</router-link></h2>
      <p class="date">Posted / updated: {{ formattedDate(dream.updated_at) }}</p>
      <div class="image_url"><img v-bind:src="dream.image_url" alt=""></div>

      <div v-for="tag in dream.tags">
        <h4 class="tag_name">
        <ul>
          <li><router-link v-bind:to="'/tags/' + tag.id">{{ tag.name }}</router-link></li>
        </ul>
        </h4>
      </div> 
    </div> -->






    
      <div class="ms-site-containerbg-full-page bg-primary-dark"> 


        <div class="ms-hero-page ms-hero-img-coffee ms-hero-bg-success mb-6">
          <div class="container">
            <div class="text-center">
              <h1 v-if="isCurrentUser()" class="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Welcome back, {{ user.username }}</h1>

              <p v-if="isCurrentUser()" class="lead lead-lg color-white text-center center-block mt-2 mb-4 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7">Add some more <span class="color-warning">silk</span> to your dream strand.</p>

              <p v-else class="lead lead-lg color-white text-center center-block mt-2 mb-4 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7">{{user.username}}'s <span class="color-warning">dream strand</span></p>
              
              <div v-if="isCurrentUser()">
                <router-link to="/dreams/new" class="btn btn-raised btn-warning animated fadeInUp animation-delay-10"><i class="zmdi zmdi-accounts"></i> Enter A New Dream</router-link>
              
                <router-link v-bind:to="'/users/' + user.id + '/edit'" class="btn btn-raised btn-info animated fadeInUp animation-delay-10"><i class="zmdi zmdi-email"></i> Edit Account Info</router-link>
              </div>


              <form class="mw-500 center-block animated fadeInUp">
                <input type="text" placeholder="Search for dreams" v-model="dreamFilter" class="form-control color-white">
                <button type="button" class="btn btn-raised btn-primary btn-block"><i class="zmdi zmdi-search"></i> Search</button>
              </form>

              <div>
                <button v-on:click="setSortAttribute('updated_at')" class="btn btn-raised btn-royal">Sort by Date</button>
                  <i v-if="sortAttribute === 'updated_at' && sortAscending === 1">^</i>
                  <i v-if="sortAttribute === 'updated_at' && sortAscending === -1"></i>

              </div>

              <!-- <div>
                <button v-for="theme in themes" v-on:click="setSortAttribute('theme.name')">{{theme.name}}</button>
              </div> -->


            </div>
          </div>
        </div>




        <div class="container ">
          <div class="row">
            <div  class="col-lg-8">








<!-- cards -->
              <article v-for="dream in orderBy(filterBy(user.dreams, dreamFilter, 'title', 'content', 'tags', 'themes'), sortAttribute, sortAscending)" class="card wow fadeInLeft animation-delay-5 mb-4">
                <div class="card-body overflow-hidden">
                  <div class="row">
                    <div class="col-lg-6">
                      <img v-bind:src="dream.image_url" alt="" class="img-fluid mb-4">
                    </div>
                    <div class="col-lg-6">
                      <h3 class="no-mt title"><router-link v-bind:to="'/dreams/' + dream.id">{{ dream.title }}</router-link></h3>


                      <p class="mb-4 tag-name">
                        <span v-for="tag in filterBy(dream.tags, tagFilter, 'name')" class="btn-lg ms-tag ms-tag-light color-primary"><router-link v-bind:to="'/tags/' + tag.id">{{ tag.name }}</router-link></span>
                      </p>
                    </div>
                  </div>



                  <div class="row">

                    <div class="col-lg-8">


                      <p class="mb-4 theme-name">
                        <span v-for="theme in filterBy(dream.themes, themeFilter, 'name')">
                          <a v-if="theme.name === 'Lucid'" class="btn btn-raised btn-success">{{ theme.name }}</a>

                          <a v-if="theme.name === 'Nightmare'" class="btn btn-raised btn-default">{{ theme.name }}</a>

                          <a v-if="theme.name === 'Memory'" class="btn btn-raised btn-primary">{{ theme.name }}</a>

                          <a v-if="theme.name === 'Adventure'" class="btn btn-raised btn-danger">{{ theme.name }}</a>

                          <a v-if="theme.name === 'Recurring'" class="btn btn-raised btn-info">{{ theme.name }}</a>

                          <a v-if="theme.name === 'Healing'" class="btn btn-raised btn-white">{{ theme.name }}</a>

                          <a v-if="theme.name === 'inspiration'" class="btn btn-raised btn-warning">{{ theme.name }}</a>

                        </span>
                      </p>


                      <span class="ml-1 d-none d-sm-inline"><i class="zmdi zmdi-time mr-05 color-info date"></i> <span class="color-medium-dark">Posted / updated: {{ formattedDate(dream.updated_at) }}</span></span>
                    </div>
                    <div class="col-lg-4 text-right">
                      <router-link v-bind:to="'/dreams/' + dream.id" class="btn btn-primary btn-raised btn-block animate-icon">Read More <i class="ml-1 no-mr zmdi zmdi-long-arrow-right"></i></router-link>
                    </div>
                  </div>
                </div>
              </article>


              <!-- <article class="card wow fadeInLeft animation-delay-5 mb-4">
                <div class="card-body overflow-hidden">
                  <div class="row">
                    <div class="col-lg-6">
                      <img src="assets/img/demo/post2.jpg" alt="" class="img-fluid mb-4">
                    </div>
                    <div class="col-lg-6">
                      <h3 class="no-mt"><a href="javascript:void(0)">Earum delectus libero ipsa temporibus in minus</a></h3>
                      <p class="mb-4">Lorem ipsum dolor sit amet, consectetur alter adipisicing elit. Facilis, natuse inse voluptates officia repudianda beatae magni es repudiandae beatae magni magnam autem natuse inse on voluptates elit sit molestias.</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-8">
                      <img src="assets/img/demo/avatar50.jpg" alt="..." class="rounded-circle mr-1"> by <a href="javascript:void(0)">Victoria</a> in <a href="javascript:void(0)" class="ms-tag ms-tag-royal">Productivity</a>
                      <span class="ml-1 d-none d-sm-inline"><i class="zmdi zmdi-time mr-05 color-info"></i> <span class="color-medium-dark">Aufust 18, 2015</span></span>
                    </div>
                    <div class="col-lg-4 text-right">
                      <a href="javascript:void(0)" class="btn btn-primary btn-raised btn-block animate-icon">Read More <i class="ml-1 no-mr zmdi zmdi-long-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </article>

              <article class="card wow fadeInLeft animation-delay-5 mb-4">
                <div class="card-body overflow-hidden">
                  <div class="row">
                    <div class="col-lg-6">
                      <img src="assets/img/demo/post3.jpg" alt="" class="img-fluid mb-4">
                    </div>
                    <div class="col-lg-6">
                      <h3 class="no-mt"><a href="javascript:void(0)">Earum delectus libero ipsa temporibus in minus</a></h3>
                      <p class="mb-4">Lorem ipsum dolor sit amet, consectetur alter adipisicing elit. Facilis, natuse inse voluptates officia repudianda beatae magni es repudiandae beatae magni magnam autem natuse inse on voluptates elit sit molestias.</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-8">
                      <img src="assets/img/demo/avatar50.jpg" alt="..." class="rounded-circle mr-1"> by <a href="javascript:void(0)">Victoria</a> in <a href="javascript:void(0)" class="ms-tag ms-tag-warning">Graphics</a>
                      <span class="ml-1 d-none d-sm-inline"><i class="zmdi zmdi-time mr-05 color-info"></i> <span class="color-medium-dark">January 27, 2016</span></span>
                    </div>
                    <div class="col-lg-4 text-right">
                      <a href="javascript:void(0)" class="btn btn-primary btn-raised btn-block animate-icon">Read More <i class="ml-1 no-mr zmdi zmdi-long-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </article>
              <article class="card wow fadeInLeft animation-delay-5 mb-4">
                <div class="card-body overflow-hidden">
                  <div class="row">
                    <div class="col-lg-6">
                      <img src="assets/img/demo/post1.jpg" alt="" class="img-fluid mb-4">
                    </div>
                    <div class="col-lg-6">
                      <h3 class="no-mt"><a href="javascript:void(0)">Earum delectus libero ipsa temporibus in minus</a></h3>
                      <p class="mb-4">Lorem ipsum dolor sit amet, consectetur alter adipisicing elit. Facilis, natuse inse voluptates officia repudianda beatae magni es repudiandae beatae magni magnam autem natuse inse on voluptates elit sit molestias.</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-8">
                      <img src="assets/img/demo/avatar50.jpg" alt="..." class="rounded-circle mr-1"> by <a href="javascript:void(0)">Victoria</a> in <a href="javascript:void(0)" class="ms-tag ms-tag-success">Multimedia</a>
                      <span class="ml-1 d-none d-sm-inline"><i class="zmdi zmdi-time mr-05 color-info"></i> <span class="color-medium-dark">January 27, 2016</span></span>
                    </div>
                    <div class="col-lg-4 text-right">
                      <a href="javascript:void(0)" class="btn btn-primary btn-raised btn-block animate-icon">Read More <i class="ml-1 no-mr zmdi zmdi-long-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </article> -->

      <!-- pages buttons at bottom -->
              <nav aria-label="Page navigation">
                <ul class="pagination pagination-plain">
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0)" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0)">4</a></li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0)" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>


    <!-- column of stuff-->

            <div class="col-lg-4 column-container">

      <!-- photo -->   
              <div class="card animated fadeInUp animation-delay-7 user-box">
                <div class="ms-hero-bg-info ms-hero-img-mountain">
                  <h3 class="color-white index-1 text-center no-m pt-4">{{user.username}}</h3>

                  <img v-bind:src="user.photo" alt="" class="img-avatar-circle">
                </div>
                <div class="card-body overflow-hidden pt-4 text-center">
                  <!-- <h3 class="color-primary">About me</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur alter adipisicing elit. Facilis, natuse inse voluptates officia repudiandae beatae magni es magnam autem molestias.</p>
                  <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-google"><i class="zmdi zmdi-google"></i></a>
                  <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-facebook"><i class="zmdi zmdi-facebook"></i></a>
                  <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-twitter"><i class="zmdi zmdi-twitter"></i></a>
                  <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-instagram"><i class="zmdi zmdi-instagram"></i></a> -->
                </div>
              </div>



    <!-- navigation -->
              <div class="card card-primary animated fadeInUp animation-delay-7 navigation-box">
                <div class="card-header">
                  <h3 class="card-title"><i class="zmdi zmdi-apps"></i> Navigation</h3>
                </div>
                <div class="card-tabs">
                  <ul class="nav nav-tabs nav-tabs-transparent indicator-primary nav-tabs-full nav-tabs-4" role="tablist">
                    <!-- <li class="nav-item"><a href="#favorite" aria-controls="favorite" role="tab" data-toggle="tab" class="nav-link withoutripple active"><i class="no-mr zmdi zmdi-star"></i></a></li> -->
                    <li class="nav-item"><a href="#categories" aria-controls="categories" role="tab" data-toggle="tab" class="nav-link withoutripple"><i class="no-mr zmdi zmdi-folder"></i></a></li>
                    <li class="nav-item"><a href="#archives" aria-controls="archives" role="tab" data-toggle="tab" class="nav-link withoutripple"><i class="no-mr zmdi zmdi-time"></i></a></li>
                    <li class="nav-item"><a href="#tags" aria-controls="tags" role="tab" data-toggle="tab" class="nav-link withoutripple"><i class="no-mr zmdi zmdi-tag-more"></i></a></li>
                  </ul>
                </div>
                <div class="tab-content">
                  <!-- <div role="tabpanel" class="tab-pane fade active show" id="favorite">
                    <div class="card-body overflow-hidden">
                      <div class="ms-media-list">
                        <div class="media mb-2">
                          <div class="media-left media-middle">
                            <a href="#">
                              <img class="d-flex mr-3 media-object media-object-circle" src="assets/img/demo/p75.jpg" alt="...">
                            </a>
                          </div>
                          <div class="media-body">
                            <a href="javascript:void(0)" class="media-heading">Lorem ipsum dolor sit amet in consectetur adipisicing</a>
                            <div class="media-footer text-small">
                              <span class="mr-1"><i class="zmdi zmdi-time color-info mr-05"></i> August 18, 2016</span>
                              <span><i class="zmdi zmdi-folder-outline color-success mr-05"></i> <a href="javascript:void(0)">Design</a></span>
                            </div>
                          </div>
                        </div>
                        <div class="media mb-2">
                          <div class="media-left media-middle">
                            <a href="#">
                              <img class="d-flex mr-3 media-object media-object-circle" src="assets/img/demo/p75.jpg" alt="...">
                            </a>
                          </div>
                          <div class="media-body">
                            <a href="javascript:void(0)" class="media-heading">Nemo enim ipsam voluptatem quia voluptas sit aspernatur</a>
                            <div class="media-footer text-small">
                              <span class="mr-1"><i class="zmdi zmdi-time color-info mr-05"></i> August 18, 2016</span>
                              <span><i class="zmdi zmdi-folder-outline color-danger mr-05"></i> <a href="javascript:void(0)">Productivity</a></span>
                            </div>
                          </div>
                        </div>
                        <div class="media">
                          <div class="media-left media-middle">
                            <a href="#">
                              <img class="d-flex mr-3 media-object media-object-circle" src="assets/img/demo/p75.jpg" alt="...">
                            </a>
                          </div>
                          <div class="media-body">
                            <a href="javascript:void(0)" class="media-heading">inventore veritatis et vitae quasi architecto beatae </a>
                            <div class="media-footer text-small">
                              <span class="mr-1"><i class="zmdi zmdi-time color-info mr-05"></i> August 18, 2016</span>
                              <span><i class="zmdi zmdi-folder-outline color-royal-light mr-05"></i> <a href="javascript:void(0)">Resources</a></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> -->
                  <div role="tabpanel" class="tab-pane fade" id="categories">


                    <!-- filter search bar -->

                    <!-- <div>
                      <label for="dream-filter" v-if="isCurrentUser()">Search your dreams</label>
                      <label for="dream-filter" v-else>Search {{user.username}}'s dreams</label>
                      <input type="text" placeholder="Enter search term" v-model="dreamFilter" list="titles">
                    </div>



                    <label for="dream-filter">Find dreams by theme</label>
                    <span v-for="theme in themes">
                      <input type="radio" id="theme.name" :value="theme.name" v-model="dreamFilter"> {{ theme.name }}
                    </span> -->


                    <!-- sorting buttons -->

                    <!-- <div>
                      <button v-on:click="setSortAttribute('updated_at')">Sort by Date</button>
                        <i v-if="sortAttribute === 'updated_at' && sortAscending === 1">^</i>
                        <i v-if="sortAttribute === 'updated_at' && sortAscending === -1"></i>
                      <button v-on:click="setSortAttribute('lucid')">Lucid</button>
                    </div> -->

                    <div v-for="theme in themes" class="list-group">


                      <!-- <input id="theme.name" :value="theme.name"  class="list-group-item list-group-item-action withripple"><i class=" color-info zmdi zmdi-cocktail"></i>{{theme.name}}<span class="ml-auto badge-pill badge-pill-info">25</span> -->

                      <a href="javascript:void(0)" class="list-group-item list-group-item-action withripple"><i class=" color-info zmdi zmdi-cocktail"></i>{{theme.name}}<span class="ml-auto badge-pill badge-pill-info">25</span></a>



                      <!-- <a href="javascript:void(0)" class="list-group-item list-group-item-action withripple"><i class=" color-warning zmdi zmdi-collection-image"></i> Graphics <span class="ml-auto badge-pill badge-pill-warning">14</span></a>
                      <a href="javascript:void(0)" class="list-group-item list-group-item-action withripple"><i class=" color-danger zmdi zmdi-case-check"></i> Productivity <span class="ml-auto badge-pill badge-pill-danger">7</span></a>
                      <a href="javascript:void(0)" class="list-group-item list-group-item-action withripple"><i class=" color-royal zmdi zmdi-folder-star-alt"></i>Resources <span class="ml-auto badge-pill badge-pill-royal">67</span></a>
                      <a href="javascript:void(0)" class="list-group-item list-group-item-action withripple"><i class=" color-success zmdi zmdi-play-circle-outline"></i>Multimedia <span class="ml-auto badge-pill badge-pill-success">32</span></a> -->
                    </div>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="archives">
                    <div class="list-group">
                      <a href="javascript:void(0)" class="list-group-item list-group-item-action withripple"><i class="zmdi zmdi-calendar"></i> January 2016 <span class="ml-auto badge-pill">25</span></a>
                      <a href="javascript:void(0)" class="list-group-item list-group-item-action withripple"><i class="zmdi zmdi-calendar"></i> February 2016 <span class="ml-auto badge-pill">14</span></a>
                      <a href="javascript:void(0)" class="list-group-item list-group-item-action withripple"><i class="zmdi zmdi-calendar"></i> March 2016 <span class="ml-auto badge-pill">9</span></a>
                      <a href="javascript:void(0)" class="list-group-item list-group-item-action withripple"><i class="zmdi zmdi-calendar"></i> April 2016 <span class="ml-auto badge-pill">12</span></a>
                      <a href="javascript:void(0)" class="list-group-item list-group-item-action withripple"><i class="zmdi zmdi-calendar"></i> June 2016 <span class="ml-auto badge-pill">65</span></a>
                    </div>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="tags">
                    <div class="card-body overflow-hidden overflow-hidden text-center">
                      <a href="javascript:void(0)" class="ms-tag ms-tag-primary">Design</a>
                      <a href="javascript:void(0)" class="ms-tag ms-tag-primary">Productivity</a>
                      <a href="javascript:void(0)" class="ms-tag ms-tag-primary">Web</a>
                      <a href="javascript:void(0)" class="ms-tag ms-tag-primary">Resources</a>
                      <a href="javascript:void(0)" class="ms-tag ms-tag-primary">Multimedia</a>
                      <a href="javascript:void(0)" class="ms-tag ms-tag-primary">HTML5</a>
                      <a href="javascript:void(0)" class="ms-tag ms-tag-primary">CSS3</a>
                      <a href="javascript:void(0)" class="ms-tag ms-tag-primary">Javascript</a>
                      <a href="javascript:void(0)" class="ms-tag ms-tag-primary">Jquery</a>
                      <a href="javascript:void(0)" class="ms-tag ms-tag-primary">Bootstrap</a>
                      <a href="javascript:void(0)" class="ms-tag ms-tag-primary">Angular</a>
                      <a href="javascript:void(0)" class="ms-tag ms-tag-primary">Gulp</a>
                      <a href="javascript:void(0)" class="ms-tag ms-tag-primary">Atom</a>
                      <a href="javascript:void(0)" class="ms-tag ms-tag-primary">Fonts</a>
                      <a href="javascript:void(0)" class="ms-tag ms-tag-primary">Pictures</a>
                      <a href="javascript:void(0)" class="ms-tag ms-tag-primary">Developers</a>
                      <a href="javascript:void(0)" class="ms-tag ms-tag-primary">Code</a>
                      <a href="javascript:void(0)" class="ms-tag ms-tag-primary">SASS</a>
                      <a href="javascript:void(0)" class="ms-tag ms-tag-primary">Less</a>
                    </div>
                  </div>
                </div>
              </div>
    <!--feature video  -->
              <!-- <div class="card card-success animated fadeInUp animation-delay-7">
                <div class="card-header">
                  <h3 class="card-title"><i class="zmdi zmdi-play-circle-outline"></i> Feature Video</h3>
                </div>
                <div class="js-player" data-plyr-provider="vimeo" data-plyr-embed-id="94747106"></div>
              </div> -->

     <!-- text widget -->
              <!-- <div class="card card-primary animated fadeInUp animation-delay-7">
                <div class="card-header">
                  <h3 class="card-title"><i class="zmdi zmdi-widgets"></i> Text Widget</h3>
                </div>
                <div class="card-body overflow-hidden">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ipsam non eaque est architecto doloribus, labore nesciunt laudantium, ex id ea, cum facilis similique tenetur fugit nemo id minima possimus.</p>
                </div>
              </div> -->
            </div>
          </div>
        </div> <!-- container -->
        <div class="btn-back-top">
          <a href="#" data-scroll id="back-top" class="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised "><i class="zmdi zmdi-long-arrow-up"></i></a>
        </div>
      </div> <!-- ms-site-container -->






  </div>
</template>

<style>
  
.column-container {
  align-items: flex-start;
}

.user-box {
  position: sticky;
  top: 8rem;
}

.navigation-box {
  position: sticky;
  top: 34rem;
}


</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
import moment from 'moment';

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      // dream: {},
      // tags: [],
      user: [],
      current_user: [],
      dreams: [],
      tags: [],
      errors: [],
      dreamFilter: "",
      sortAttribute: "updated_at",
      sortAscending: 1,
      themes: [],
      tagFilter: "",
      themeFilter: ""
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.user);
      // console.log(this.user.dreams.tags);
    }).catch(error => {
      this.errors = error.response.data.errors;
    });
    axios.get("/api/themes").then(response => {
      this.themes = response.data;
      console.log(this.themes);
    });
  },
  methods: {
    setSortAttribute: function(attribute) {
      if (this.sortAttribute === attribute) {
        this.sortAscending = this.sortAscending * -1;
      } else {
        this.sortAscending = 1;
      }
      this.sortAttribute = attribute;
    },
    isCurrentUser: function() {
      console.log(typeof localStorage.getItem("user_id"));
      console.log(typeof this.user.id);
      if (localStorage.getItem("user_id") == this.user.id) {
        console.log("true");
        return true;
      } else {
        console.log("false");
        return false;
      }
    },

    formattedDate: function(date) {
      return moment(date).format('LLLL');
    }
  }
};
</script>