<template>
  <div>

   <!-- <h6>comp Slices -> {{slicesRaw}}</h6>  -->

    <section v-for="(slice, index) in slices" :key="'slice-' + index">


      <!-- TEXT -->
      <template v-if="slice.slice_type === 'text'">
        <slice-text :sliceRaw="slice"/>
      </template>


       <!-- IMAGE -->
       <template v-if="slice.slice_type === 'image'">

        <slice-image :sliceRaw="slice"/>

      </template>

      <!-- QUOTE -->
      <template v-if="slice.slice_type === 'quote'">
        <slice-quote :sliceRaw="slice"/>
      </template>

    </section>
  </div>
</template>

<script>

import sliceText   from '~/components/slices/slice-text.vue'
import sliceImage   from '~/components/slices/slice-image.vue'
import sliceQuote   from '~/components/slices/slice-quote.vue'

export default {
  props: [
    'slicesRaw'
  ],
  components: {
    sliceText,
    sliceQuote,
    sliceImage
  },
  data () {
    return {
      slices: this.slicesRaw
    };
  }

};
</script>

