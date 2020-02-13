<template>

    
  </a>

  <nuxt-link to="../" class="site-back"><svg-icon class="back" name="arrow-right-thick" /></nuxt-link>


</template>

<style lang="scss">

  .site-back {
    border-radius: 400px;
    width: 64px;
    height: 64px;
    background-color: $pink;
    position: fixed;
    top: 16px;
    left: 16px;
    z-index: 222;
    transition: all .275s ease;

    svg {
      fill: $white;
      height: 32px;
      width: 32px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-55%, -50%) rotate(180deg);
    }

    &:hover{
      background-color: $purple;
    }

  }



</style>
