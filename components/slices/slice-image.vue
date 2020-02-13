<template>

  <section class="sgd-s-slice-image">
    <div class="gc -maximize">

      <div class="row">
        <div class="g-12">
          <div class="header-primary">
            <div class="anchor">Image</div> <div class="label">Slice</div>
          </div>
        </div>
      </div>

      <div class="row image">
        <div class="g-10 g-push-1">
          <img :src="sliceRaw.primary.image.url" />
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

  .sgd-s-slice-image {
    padding: 32px 0 32px!important;
    position: relative;
    .image {
      margin-top: 24px;
    }
  }

</style>
