<template>
  <div>

    <!-- <slice-event :sliceRaw="slice"/> -->

   <!-- <h6>comp Slices -> {{slicesRaw}}</h6>  -->

    <div v-for="(slice, index) in slices" :key="'slice-' + index">


      <!-- EVENT -->
      <template v-if="slice.slice_type === 'event'">
        <slice-event :sliceRaw="slice"/>
      </template>

      

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

    </div>
  </div>
</template>

<script>

import sliceText   from '~/components/slices/slice-text.vue'
import sliceEvent   from '~/components/slices/slice-event.vue'
import sliceImage   from '~/components/slices/slice-image.vue'
import sliceQuote   from '~/components/slices/slice-quote.vue'

export default {
  props: [
    'slicesRaw'
  ],
  components: {
    sliceText,
    sliceEvent,
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

