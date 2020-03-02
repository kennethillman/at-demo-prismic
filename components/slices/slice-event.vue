<template>

  <div>
        <section class="sgd-s-slice-event -no-image -bg-pattern-dark ">
      <div>
        <div class="teaser-text col">
          <div class="col-body">
            <div class="header-primary">
              <div class="anchor">Conference</div><div class="label -large">January 16, 2020<!-- {{formattedDate}} --></div>
            </div> 
              <div class="header">In/Visible Talks<!-- {{ $prismic.richTextAsPlain(content.data.title) }} --></div> 
              <div class="desc">The boundaries of design are constantly evolving. In 20/20, we’ve asked our speakers to GO BEYOND the expected perspectives, guardrails, materials, and thinking of the creative practice. Join us on January 16, 2020 for the 3rd annual In/Visible Talks.</div>
              <br>
              <div class="were">Sanibel Island, Florida, United States</div>
            </div>
          </div>
        </div>
      </section>

      <section class="sgd-s-slice-event -no-image -bg-pattern-dark ">
        <div>
          <div class="teaser-text col">
            <div class="col-body">
              <div class="header-primary">
              <div class="anchor">Conference</div><br><div class="label -large">January 16, 2020<!-- {{formattedDate}} --></div></div> 
              <div class="header">In/Visible Talks<!-- {{ $prismic.richTextAsPlain(content.data.title) }} --></div> 
              <div class="desc">The boundaries of design are constantly evolving. In 20/20, we’ve asked our speakers to GO BEYOND the expected perspectives, guardrails, materials, and thinking of the creative practice. Join us on January 16, 2020 for the 3rd annual In/Visible Talks.</div>
              <br>
              <div class="were">Sanibel Island, Florida, United States</div>
            </div>
          </div>
        </div>
      </section>

      <section class="sgd-s-slice-event -no-image -bg-pattern-dark ">
        <div>
          <div class="teaser-text col">
            <div class="col-body">
              <div class="header-primary">
              <div class="anchor">Conference</div><br><div class="label -large">January 16, 2020<!-- {{formattedDate}} --></div></div> 
              <div class="header">In/Visible Talks<!-- {{ $prismic.richTextAsPlain(content.data.title) }} --></div> 
              <div class="desc">The boundaries of design are constantly evolving. In 20/20, we’ve asked our speakers to GO BEYOND the expected perspectives, guardrails, materials, and thinking of the creative practice. Join us on January 16, 2020 for the 3rd annual In/Visible Talks.</div>
              <br>
              <div class="were">Sanibel Island, Florida, United States</div>
            </div>
          </div>
        </div>
      </section>
  </div>
  
  <!-- <prismic-rich-text :field="sliceRaw.primary.text"/> -->

</template>

<script>
export default {
  props: ['sliceRaw'],
  name: 'slice-event'
}
</script>

<style lang="scss">

  section.sgd-s-slice-event {

    display: block;
    padding:0;




    .were {
      font-style: italic;
      color: $grey2
    }
   




    // - - - LAYOUT / FLEX

    .col {
      flex: 1;
      box-sizing: border-box;
      padding: 16px 40px 16px 16px;
    }

    .col-body {
      background-color: #313131;
      padding: 16px 40px 16px 16px;

    }


    // - - - IMAGE

    figure {
      background-size: cover;
      background-position: center center;
    }


    // - - - TYPOGRAPY

    .header-primary {
      text-align: left;
      margin-bottom: 12px;

    }


    .desc {
      height: 2.7em; overflow: hidden;
    }

    .header {
      text-transform: uppercase;
      font-weight: 300;
      font-size: 32px;
      letter-spacing: .06em;
      margin-bottom: 8px;
      line-height: 1.14;
      span {
        display: block;
        line-height: 1;
        font-weight: 600;
        font-size: .5em;
      }
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
        //font-size: 32px;
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

      
    .label {
      &.-large {
        font-size: 16px;
        font-weight: 600;
        margin: 4px 0 0;
      }
    }


      .header {
        // font-size: 48px;
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
        font-size: 48px;
        margin-bottom: 40px;
        span {
          font-size: 24px;
        }
      }
      .col-body {
        padding: 6px 56px;
      }

    }



  }



</style>
