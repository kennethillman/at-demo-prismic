<template>

  <section class="sgd-s-slice-text">
    <div class="gc">

      <div class="row">
        <div class="g-12">
          <div class="header-primary">
            <div class="anchor">Text</div> <div class="label">Slice</div>
          </div>
        </div>
      </div>

      <div class="row text">
        <div class="g-8 g-push-2">
          <prismic-rich-text :field="sliceRaw.primary.text"/>
        </div>
      </div>

    </div>
  </section>

</template>

<script>
export default {
  props: ['sliceRaw'],
  name: 'text'
}
</script>

<style lang="scss">

  .sgd-s-slice-text {
    padding: 32px 0 32px!important;
    
    .text {
      margin-top: 24px;
    }
      
  }



</style>
