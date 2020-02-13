<template>
  <section class="container">

    <prismic-edit-button :documentId="documentId"/>
    <div id="to-top"></div>

    <home/>

<!--     <div class="menu" >
      <top-menu :links="menu"/>
    </div> -->

    <div class="sgd-s-hero -bg-pattern-light">
      <div>
        <logo/>
        <h2 class="title">{{document.title[0].text}}</h2>
        <h6 class="title -sub">{{document.sub_title[0].text}}</h6>
        <h6 class="title -sub -small"><a :href="document.link_to_github[0].text" target="_blank">Github</a></h6>
      </div>
    </div>

    <slices :slices-raw="allSlices" />

    <!-- Check is any content exist -->

      <div v-if="allContent.length !== 0" class="content-main">
    
        <section v-for="content in allContent" :key="content.id" v-bind:content="content" class="latest-content-list">
          
          <content-list :content="content" />

        </section>
      </div>

      <!-- If no content return message -->
      <div v-else class="content-main">
        <p>No content published at this time.</p>
      </div>

    <div class="sgd-s-hero -footer">
      <div>
        <logo/>
        <h2 class="title">Demo page</h2>
        <h6 class="title -sub">by Active Talents</h6>
      </div>
    </div>

  </section>
</template>

<script>

import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"

import Logo from '~/components/Logo.vue'
import Home from '~/components/Home.vue'
//import topMenu   from '~/components/Menu.vue'
import Slices   from '~/components/Slices.vue'

import ContentList from '~/components/ContentList.vue'

export default {
  components: {
    Logo,
    Home,
    //topMenu,
    Slices,
    ContentList
  },

  async asyncData({context, error, req}) {
    try{
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})

      let document = {}
      let _slices = []
      const result = await api.getSingle('startpage')

      document = result.data
      _slices = document.body

      // let menu = {}
      // const topMenu = await api.getSingle('menu')
      // menu = topMenu.data

       // Query to get allContent content to preview
      const prismicContent = await api.query(
        Prismic.Predicates.at("document.type", "content"),
        { orderings : '[my.post.date desc]' }
      )


      // Load the edit button
      if (process.client) window.prismic.setupEditButton()

      return {
        document,
        documentId: result.id,
        // menu,
        allContent: prismicContent.results,
        allSlices: _slices
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style lang="scss">

  @import "~/assets/scss/styleguide/styleguide-imports.scss";

  .sgd-s-grid {
    min-height: 65vh
  }


  // - - - EDIT BUTTON - PRISMIC

  .wio-link {
    position: fixed;
    z-index: 10;
    right: 40px;
    bottom: 40px;
  }

  // - - - MENU

  .menu {
    position: fixed;
    top: 0;
    right: 0;
    padding: 24px;
    z-index: 20;
  }






  // - - - BUTTON

  .btn-temp {
    color: $white;
    background: $black;
    padding: 8px 12px;
    border-radius: 99px;
    font-size: 14px;
    line-height: 1;
    text-decoration: none;
    display: inline-block;
    margin: 0 0 0 6px
    // @media screen and (min-width: 768px) {
    //   padding: 16px 44px;
    //   font-size: 18px;
    // }
  }


</style>
