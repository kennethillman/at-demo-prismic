<template>
  <div class="at-content" :data-wio-id= documentId>
   
      <!-- <back/> -->
      <site-header />
      <prismic-edit-button :documentId="documentId"/>

      <div class="sgd-s-hero ">
        <div>
          <h2 class="title">{{document.title[0].text}}</h2>
          <h6 class="title -sub">"Content"</h6>
        </div>
      </div>

      <section class="s-preamble">
        <div class="gc -g-center">
          <div class="g-10">
            <p class="preamble">
              {{document.preamble[0].text}}
            </p>
          </div>
        </div>
      </section>

      <slices :slicesRaw="slices"/>

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
import Back from '~/components/Back.vue'
import Slices   from '~/components/Slices.vue'

import siteHeader from '~/components/Header.vue'


export default {
  name: 'post',
  components: {
    Slices,
    Back,
    siteHeader
  },
  head () {
    return {
      title: 'AT | Content | ' + this.document.title[0].text
    }
  },
  async asyncData({ params, error, req }) {
    try{
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})

      // Query to get content
      const post = await api.getByUID("content", params.uid)

      // Load the edit button
      if (process.client) window.prismic.setupEditButton()

      // Returns data to be used in template
      return {
        document: post.data,
        documentId: post.id,
        slices: post.data.body
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },

}
</script>

<style lang="scss">

  .at-content {
    .preamble {
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 1.6;
      margin-bottom: 72px;
      color: #000;
    }
  }

</style>



