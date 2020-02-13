<template>

  <section class="sgd-s-slice-quote -theme-light">
    <div class="gc">

      <div class="row">
        <div class="g-12">
          <div class="header-primary">
            <div class="anchor">Quote</div> <div class="label">Slice</div>
          </div>
        </div>
      </div>

      <div class="row reference">
        <div class="g-10 g-push-1">
          " {{sliceRaw.primary.quote[0].text}} "
          <div class="ref">
            John Doe
            <span class="company">Acme corp</span>
          </div>
        </div>
      </div>

    </div>
  </section>

</template>

<script>
export default {
  props: ['sliceRaw'],
  name: 'quote'
}
</script>

<style lang="scss">

  .sgd-s-slice-quote {
    margin: 2.5rem 0;

      .reference {
        margin-top: 24px; 
        font-style: italic;
        text-align: center;
        font-size: 32px
      }
      .ref {
        font-style: normal;
        text-align: right;
        padding: 24px 0 4px;
        font-size: 18px
      }
      .company {
        display: block;
        font-size: 12px;
     
      }
  }



</style>
