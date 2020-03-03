<template>
  <div class="container -theme-dark ">

    <prismic-edit-button :documentId="documentId"/>
    <site-header />


<!--     <div class="menu" >
      <top-menu :links="menu"/>
    </div> -->

    <div class="sgd-s-hero">
      <div>
        <h2 class="title">{{document.title[0].text}}</h2>
        <h6 class="title -sub">{{document.sub_title[0].text}}</h6>
      </div>
    </div>

    <slices :slices-raw="allSlices" />


     <slice-event />


    <div class="sgd-s-hero -footer">
      <div>
        <logo/>
        <h2 class="title">Demo page</h2>
        <h6 class="title -sub">by Active Talents</h6>
      </div>
    </div>



  </div>
</template>

<script>

import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"

import Logo from '~/components/Logo.vue'
import Home from '~/components/Home.vue'
//import topMenu   from '~/components/Menu.vue'
import Slices   from '~/components/Slices.vue'

import siteHeader from '~/components/Header.vue'
import sliceEvent   from '~/components/slices/slice-event.vue'


export default {
  components: {
    Logo,
    Home,
    siteHeader,
    sliceEvent,
    Slices
  },

  async asyncData({context, error, req}) {
    try{
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})

      let document = {}
      let _slices = []
      const result = await api.getSingle('event')

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
      // if (process.client) window.prismic.setupEditButton()

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




</style>
