<template>
  <div class="site-grid" :class="{'-menu-open': this.$store.getters.getMenu, '-portrait': this.orientation === 'p', '-landscape': this.orientation === 'l','-menu-navigate': this.$store.getters.getMenuNavigate,}">
    
    <nuxt/>
  </div>
</template>

<script>



export default {

  data () {
    return {
      orientation: null
    }
  },
  methods: {
    onResize(event) {
      this.$store.commit("setMenu",false)
      this.deviceOrientation()
    },
    deviceOrientation() {
      let winH = window.innerHeight;
      let winW = window.innerWidth;
      if (winH > winW && this.orientation !== 'p') {
        this.orientation = 'p'
        this.$store.commit("setOrientation",'portrait')
      } else if (winW > winH && this.orientation !== 'l'){
        this.orientation = 'l'
        this.$store.commit("setOrientation",'landscape')
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.deviceOrientation();
  },
}

</script>

