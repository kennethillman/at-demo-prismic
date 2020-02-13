<template>
  <nav class="site-menu">
 <!--  {{menuClean}} -->

      <ul>
        <li v-for="(item,index) in menuClean" :key="index">
          <a class="btnn"  href="#" v-scroll-to="item[1]" >{{item[0]}}</a>
        </li>
      </ul>

  </nav>
</template>

<script>
export default {
  props: ['links'],
  name: 'topmenu',
  data() {
    return {
       menuRaw: this.links,
       menuClean: []
    }
  },
  methods: {

    clean : function(links){

      let _links = links.body[0].items;

      // The view model.
      let vm = this;

      _links.forEach(function(item) {

        let _item = []
        let clean_url = ''
        let item_text = item.link_label[0].text
        let item_url = item.link.url

        if (item.link.url.includes('https://#')) {
          clean_url = item_url.replace('https://','');
          item_url = clean_url
        }

        _item.push(item_text)
        _item.push(item_url)

        vm.menuClean.push(_item)

      });


    },
  },
  created() {
    this.clean(this.menuRaw)
  }
}
</script>

<style lang="scss">

  .site-menu {
    li, ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: inline-block;
    }
  }

</style>
