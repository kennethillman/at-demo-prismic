<template>
  <p>Loading the Prismic's Preview...</p>
</template>

<script>

import Prismic from "prismic-javascript"
import LinkResolver from "~/plugins/link-resolver.js"
// import PrismicConfig from "~/prismic.config.js"

export default {
  name: 'Preview',
  async asyncData({ query, redirect }) {

    let previewToken = query.token

    console.log('previewToken -> ' + previewToken); // Undefined <--- !! 

    const api = await Prismic.getApi(process.env.PRISMIC_API)

    const url = await api.previewSession(previewToken, LinkResolver, '/')
    console.log('url -> ' + url);
    redirect(url)
  },
}
</script>
