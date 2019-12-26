<template>
  <div>
    <Header />
    <nuxt />
    <MobileMenu />
  </div>
</template>
<script>
import gql from 'graphql-tag'
import Menus from '@/apollo/query/Menus'
export default {
  components: {
    Header: () => import('@/components/Header'),
    MobileMenu: () => import('@/components/MobileMenu')
  },
  data() {
    return {
      loadMenu: []
    }
  },
  apollo: {
    loadMenu: {
      query: Menus
    }
  },
  mounted(){
    this.$store.commit('menuLinks/LOAD_ITENS_MENU', this.loadMenu)
    console.log(this.loadMenu)
    // this.$store.dispatch('menuLinks/loadMenus')
  }
}
</script>
