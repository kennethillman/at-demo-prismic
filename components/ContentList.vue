<template>
  <nuxt-link :to="link" class="content-list-link">

    <section class="content-list -no-image ">
      <div>
        <div class="teaser-text col">
          <div class="col-body">
            <div class="header-primary">
              <div class="anchor">Content</div> <div class="label">{{formattedDate}}</div></div> 
              <div class="header">{{ $prismic.richTextAsPlain(content.data.title) }}</div> 
              <div class="from">{{setPreamble(content)}}</div>
            </div>
          </div>
        </div>
      </section>

  </nuxt-link>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js"

export default {
  props: ['content'],
  data: function() {
    return {
      link: '',
      formattedDate: this.content.last_publication_date.substring(0, 10),
    }
  },
  name: 'content-list-item',
  methods: {

    setPreamble (content) {
      const textLimit = 200;
      let preamble = content.data.preamble[0].text;
      const limitedText = preamble.substr(0, textLimit)

      if (preamble.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(' ')) + '...';
      }
      else {
        return preamble;
      }
    },
  },
  created () {
    this.link = LinkResolver(this.content)
  },
}
</script>

<style lang="scss">

  .content-list-link {
    text-decoration: none;
    color: #5a5a5a;
    &:hover {
      text-decoration: none;
      .from {
        color: $black; 
      }
      .col-body {
        background-color: #f0f0f0;
      } 
    }
  }

  .content-list {

    display: block;
    padding:0;
   
    .teaser-text {
      padding: 0 16px;
      width: 100%;
    }
   
    .col-body {
      background-color: #f3f3f3;
      padding: 2rem;
      margin: 2rem;
      max-width: 960px;
      font-size: 16px;
      line-height: 1.5;
      border-radius: 3px;
      box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
      padding: 36px 24px;
      color: $grey2;
      margin: 0 auto 36px;
      position: relative;
    }
    


   



    // - - - TYPOGRAPY

    .header-primary {
      text-align: left;
      margin-bottom: 16px;

    }

    .header {
      text-transform: uppercase;
      font-weight: 300;
      font-size: 24px;
      letter-spacing: .06em;
      margin-bottom: 24px;
      line-height: 1.14;
      color: $pink;
    }



  // - - - RESPONSIVE

    // 600px
    @media screen and (min-width: 600px)  {
      .header {
        font-size: 32px;
        line-height: 1.14;
      }
    }


    // 768px
    @media screen and (min-width: 768px)  {

      > div {
        display: flex;
        align-items: center;
        flex-direction: row;
        max-width: 1280px;
        margin: 0 auto;
      }




      .header {
        font-size: 24px;
      }
      .col-body {
        //padding: 6px 24px;
      }




      .teaser-image {
        figure {
          @include aspect-ratio-img(14,9);
        }
      }

    }

    // 1024px
    @media screen and (min-width: 1024px)  {
      .header {
        font-size: 32px;
      }
      .col-body {
        // padding: 6px 32px;
      }


    }

    // 1280px
    @media screen and (min-width: 1280px)  {

      .header {
        font-size: 40px;
        margin-bottom: 40px
      }
      .col-body {
        //padding: 6px 56px;
      }

    }



  }

</style>
