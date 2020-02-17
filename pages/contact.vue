<template>

    <div class="sgd-p-contact -theme-dark"
        :class="{'-sent': this.sent === 'sent', '-error': this.sent === 'error'}">

    <prismic-edit-button :documentId="documentId"/>
    <site-header />

    <div class="custom-overlay -bg-pink"></div>

    <section class="s- ">

     <div class="sgd-s-hero">
      <div>
        <h2 class="title">Contact us</h2>
      </div>
    </div>
      <div class="section-body">
      <form action="https://formspree.io/xgevzbap" method="POST" ref="form" > <!-- v-if="!sent" -->
            <div class="gc contact-form">
              <div class="g-5 g-push-1 text two">

                  <div>
                    <label for="name" hidden>Name:</label>
                    <input type="text" name="name" placeholder="Your Name" ref="formname" required>
                  </div>
                  <div>
                    <label for="email" hidden>Email:</label>
                    <input type="email" name="email" placeholder="Your Email" ref="formemail" required/>
                  </div>
              </div>
              <div class="g-5 text two">
                <div>
                  <label for="message" hidden>Message:</label>
                  <textarea  rows="3" name="message" placeholder="Tell us, how can we help you?" ref="formmeassage"  required></textarea>
                </div>
              </div>

              <div class="g-12 -text-center three contact-send"><br>
                <div class="btn" @click="submitForm">Send</div></div>
            </div>
        </form>


        <!-- Thanks -->
        <div class="gc contact-thankyou" >
          <div class="g-12">
            <h2 class="header-primary -in-view">Thank you!</h2>
            <p>We will get back to you ASAP.</p>
          </div>
        </div>

        <!-- Error -->
        <div class="gc contact-error" >
          <div class="g-12">
            <h2 class="header-primary -in-view">Oops! An error!</h2>
            <p>Please use our direct e-mails below.</p>
          </div>
        </div>

        <!-- Address ++ -->
        <div class="gc contact-details">
          <div class="g-3 g-push-1"><strong>Active Talents</strong>
            Gustav III:s Boulverad 161 <br>
            169 74 Solna <br>
            Stockholm <br>
            Sweden</div>
          <div class="g-4 ">
              <strong>Inquieries</strong>
              <a href="mailto:kenneth@activetalents.se">kenneth@activetalents.se</a><br>
              <a href="mailto:nidhi@activetalents.se">nidhi@activetalents.se</a>
          </div>
          <div class="g-3 ">
            <strong>Social</strong>
            <a href="https://www.linkedin.com/company/activetalents" target="_blank">Linkedin</a><br>
          </div>
        </div>


      </div>

  
    </section>
    </div>

</template>


<script>


import siteHeader from '~/components/Header.vue'

export default {
  components: {
    siteHeader,
  },
  data() {
    return {
      sent: false,
      formData: false
    };
  },
  methods: {
    submitForm(ev) {
      ev.preventDefault();
      const form = this.$refs.form;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.sent = 'sent';
        } else {
          this.sent = 'error';
        }
      };
      xhr.send(data);
    }
  }
}
</script>

<style lang="scss">

  .sgd-p-contact {
    min-height: 100vh;

    strong {
      font-size: 18px;
      margin-bottom: 6px;
      line-height: 1;
      display: block;
    }

    .contact-form {
      transition: 0.5s ease all;
      opacity: 1;
      position: relative;
      z-index: 2;
    }

    .contact-thankyou,
    .contact-error {

      h2 {
        margin-bottom: 24px;
      }
      p {
        font-size: 22px;
      }
      transition: 0.5s ease all;
      text-align: center;
      opacity: 0;
      position: absolute;
      left: 50%;
      top: 50px;
      transform: translate(-50%, -50px);
    }

    &.-sent {
      .contact-thankyou {
        opacity: 1;
        transform: translate(-50%, 0);
      }
    }

    &.-error {
      .contact-error{
        opacity: 1;
        transform: translate(-50%, 0);
      }
    }

    &.-error,
    &.-sent {
      .contact-form {
        opacity: 0;
        transform: translate(0, 50px);
      }
    }



    .section-body {
      position: relative;
      width: 100%;
    }

    input,
    select,
    textarea {
      -webkit-appearance: none;
      border: 0;
      border-radius: 0;
      height: 50px;
      line-height: 50px;
      margin-bottom: 20px;
      display: block;
      width: 100%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.23);
      font-size: 18px;
      background: transparent!important;
      transition: 0.5s ease all;
      color: $orange;
      &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #fff;
        opacity: 1; /* Firefox */
      }
      &:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #fff;
      }

      &::-ms-input-placeholder { /* Microsoft Edge */
        color: #fff;
      }
    }

    textarea {
      height: auto;
      line-height: 1.4;
    }

    .contact-send {
      margin-bottom: 50px;
    }

    .contact-details {
      margin-bottom: 50px;
      font-size: 14px;
      > div {
        margin-bottom: 30px;
      }
    }

    @media screen and (min-width: 768px)  {
      textarea {
        height: 120px;
      }

      .contact-details > div:nth-child(2) {
        text-align: center;
      }

      .contact-details > div:last-child {
        text-align: right;
      }

    }

  }

</style>
