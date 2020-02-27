<template>


<section class="s- site-twitter site-grid" :class="{ '-dark-mode': theme}">
    <div class="gc">

        <div class="g-12">
          <div class="header-primary">

             <div class="label">API+IFTTT</div>
             <h2 class="header">
              Twitter 
            </h2>

          </div>

          <div class="tweet-wrapper">
       
            <div class="tweet"
              v-for="tweet in tweets"
              :key="tweet.id"
            >
              <figure>
                <svg-icon name="sm-twitter" class="-pos-center" />  
              </figure>
              "{{ tweet.text }}"
            </div>
 
          </div>

          <div class="button-wrapper">
            <a href="https://twitter.com/kennethillman" class="btn -small -secondary" target="_blank">To Twitter</a>
          </div>

        </div>

    </div>
</section>

</template>

<script>
import tweets from '@/tweets/tweets'

export default {
  props: [
    'mode'
  ],
  data() {
    return {
      theme: this.mode === 'dark' ? true : false,
      tweets
    }
  }
}
</script>

<style lang="scss">

  .site-twitter {
    background-color: #f3f3f3;

    .tweet-wrapper {
      padding: 24px 0 0;
    }

    .button-wrapper {
      padding: 1em 0;
      text-align: center;
    }

    .tweet {

      max-width: 600px;
      font-size: 16px;
      font-weight: bold;
      line-height: 1.5;
      background-color: #fff;
      border-radius: 3px;
      box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
      padding: 36px 24px;
      color: $grey2;
      margin: 0 auto 36px;
      position: relative;

      svg {
        fill: $grey1;
        width: 60%;
      }

      figure {
        background-color: #fff;
        height: 48px;
        width: 48px;
        border-radius: 200px;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%,-40%);
      }

      @media screen and (min-width: 768px)  {
        padding: 36px 24px 36px 70px;

        svg {
          width: 50%;
        }

        figure {
          background-color: #fff;
          height: 68px;
          width: 68px;
          left: 0;
          top: 50%;
          transform: translate(-40%,-50%);
        }
      } 

    }

    &.-dark-mode {
      background-color: #2a2a2a;

      .tweet {
        background-color: #1a1a1a;
        color: #aaa;

        svg {
          fill: #aaa;
        }

        figure {
          background-color: #1a1a1a;
        }

        @media screen and (min-width: 768px)  {
          figure {
            background-color: #1a1a1a;
          }
        } 

      }

    }

  }
  
</style>