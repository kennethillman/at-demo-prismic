
<template>
    <div class="sgd-s-hero -cover -bg-pattern-light">
      <div>
        <logo/>

        <div v-if="error.statusCode === 404">
          <h2 class="title" >
            Page not found 
          </h2>
          <h6 class="title -sub">{{error.statusCode}}</h6><br><br>
          <nuxt-link class="btn -small" to="/" >Home</nuxt-link>
        </div>

        <div v-else>
          <h2 class="title" >
            An error occurred
          </h2>
          <h6 class="title -sub">{{error.statusCode}}</h6><br><br>
          <nuxt-link class="btn -small" to="/" >Home</nuxt-link>
        </div>
        
      </div>
    </div>
</template>

<script>

import Logo from '~/components/Logo.vue'

export default {
  head () {
    return {
      title: '404 - There is no page here!'
    }
  },
   components: {
    Logo
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss">
  @import "~/assets/scss/styleguide/styleguide-imports.scss";

  body .sgd-s-hero.-cover {
    min-height: 100vh;
  }
  
</style>
