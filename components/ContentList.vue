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
      formattedDate: this.content.first_publication_date.substring(0, 10),
    }
  },
  name: 'content-widget',
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
      text-decoration: underline;
    }
  }

  .content-list {

    display: block;
    padding:0;
   

    &.-no-image {
        .col-body {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }
    }


    // - - - LAYOUT / FLEX

    .col {
      flex: 1;
      box-sizing: border-box;
    }

    .col-body {
      padding: 32px;
    }


    // - - - IMAGE

    figure {
      background-size: cover;
      background-position: center center;
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
    }

    // - - - TRIANGLE

    .triangel {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
      width: 0;
      height: 0;
      border-left: 1em solid transparent;
      border-right: 1em solid transparent;
      border-bottom: 1em solid $white;
    }

    .teaser-image {
      position: relative;
      overflow: hidden;
      z-index: 0;
      figure {
        @include aspect-ratio-img(2.3,1);
      }
    }

    &.-theme-light {
     .triangel {
        border-left: 1em solid transparent;
        border-right: 1em solid transparent;
        border-bottom: 1em solid #f3f3f3;
      }
    }
    &.-theme-gray {
      .triangel {
        border-left: 1em solid transparent;
        border-right: 1em solid transparent;
        border-bottom: 1em solid #666;
      }
    }
    &.-theme-dark {
      .triangel {
        border-left: 1em solid transparent;
        border-right: 1em solid transparent;
        border-bottom: 1em solid #313131;
      }
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

      &.-first {
         .col-body {
          margin-top: 5vh;
          margin-bottom: 5vh;
        }
        &.-no-image {
          .col-body {
            margin-top: 0;
            margin-bottom: 0;
          }
        }

        > div {
          display: block;
        }
      }


      .header {
        font-size: 24px;
      }
      .col-body {
        padding: 6px 24px;
      }

      .triangel {
        bottom: 50%;
        left: auto;
        right: 0;
        border-right: 1em solid $white;
        border-top: 1em solid transparent;
        border-bottom: 1em solid transparent;
        transform: translate(0, 50%);
      }

      &.-theme-light {
        background-color: #ffffff;
       .triangel {
          border-top: 1em solid transparent;
          border-bottom: 1em solid transparent;
          border-right: 1em solid #f3f3f3;
        }
      }
      &.-theme-gray {
        .triangel {
          border-top: 1em solid transparent;
          border-bottom: 1em solid transparent;
          border-right: 1em solid #666;
        }
      }
      &.-theme-dark {
        .triangel {
          border-top: 1em solid transparent;
          border-bottom: 1em solid transparent;
          border-right: 1em solid #313131;
        }
      }

      &.-image-right {
        > div {
          flex-direction: row-reverse;
          text-align: right;
        }
        .header-primary {
          text-align: right;
        }
        .triangel {
          position: absolute;
          bottom: 50%;
          right: auto;
          transform: rotate(180deg) translate(0, -50%);
        }

        .teaser-image {
          figure {

          }
        }

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
        padding: 6px 32px;
      }
      .triangel {
        font-size: 24px;
      }

    }

    // 1280px
    @media screen and (min-width: 1280px)  {

      .header {
        font-size: 40px;
        margin-bottom: 40px
      }
      .col-body {
        padding: 6px 56px;
      }

    }



  }

</style>
