<template>
  <section class="container">


    <!-- HEADER / MENU / LOGO -->
    <site-header :menu="menu" />


    <!-- HERO -->
    <div class="sgd-s-hero -bg-pattern-light">
      <div>
        <logo/>
        <h2 class="title">{{document.title[0].text}}</h2>
        <h6 class="title -sub">{{document.sub_title[0].text}}</h6>
        <h6 class="title -sub -small"><a :href="document.link_to_github[0].text" target="_blank">Github</a></h6>
      </div>
    </div>
    

    <!-- PRISMIC SLICES -- DYNAMIC LAYOUT -->
    <slices :slices-raw="allSlices" />


    <!-- LISTING - "Content" -- A PRISMIC CUSTOM TYPE  -->

      <div v-if="allContent.length !== 0" class="s- content-main">

        <section v-for="content in allContent" :key="content.id"  class="latest-content-list">
          <content-list :content="content" />
        </section> 

      </div>

      <div v-else class="content-main">
        <p>No content to list is published at this time.</p>
      </div>


    <!-- TWITTER -->
    <twitter /> 


    <!-- FOOTER -->  
    <div class="sgd-s-hero -footer">
      <div>
        <logo/>
        <h2 class="title">Demo page</h2>
        <h6 class="title -sub">by Active Talents</h6>
      </div>
    </div>


    <!-- CMS EDIT BUTTON --> 
    <!-- <prismic-edit-button :documentId="documentId"/> -->

  </section>
</template>

<script>

import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"

import Logo from '~/components/Logo.vue'
import Home from '~/components/Home.vue'
//import topMenu   from '~/components/Menu.vue'
import Slices   from '~/components/Slices.vue'
import siteHeader from '~/components/Header.vue'

import ContentList from '~/components/ContentList.vue'

import Search from '~/components/Search.vue'
import Twitter from '~/components/Twitter.vue'

export default {
  components: {
    Logo,
    Home,
    siteHeader,
    Slices,
    ContentList,
    Search,
    Twitter
  },

  async asyncData({context, error, req}) {
    try{
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})

      let document = {}
      let _slices = []
      const result = await api.getSingle('startpage')

      document = result.data
      _slices = document.body

      let menu = {}
      const topMenu = await api.getSingle('navigation')
      menu = topMenu.data

      const prismicContent = await api.query(
        Prismic.Predicates.at("document.type", "content"),
        { orderings : '[my.content.last_publication_date desc]' }
      )

      // Load the edit button
      // if (process.client) window.prismic.setupEditButton()

      return {
        document,
        documentId: result.id,
        menu,
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


</style>
