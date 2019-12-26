<template>
  <div>
    <Banner v-if="dados.banners" :dados="dados.banners" />
  </div>
</template>
<script>
import Banner from '@/components/Banner'
export default {
  components: {
    Banner
  },
  data() {
    return {
      dados: []
    }
  },
  methods:{
    loadPage () {
      this.dados = this.$store.state.pages.home
    }
  },
  mounted() {
    this.loadPage()
    console.log('do store ', this.dados)
  }
}
</script>
