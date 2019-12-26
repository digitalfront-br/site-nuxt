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
import Pages from '@/apollo/query/Pages'
import Banners from '@/apollo/query/Banners'
export default {
  components: {
    Header: () => import('@/components/Header'),
    MobileMenu: () => import('@/components/MobileMenu')
  },
  data() {
    return {
      loadMenu: [],
      pages: [],
      banners: []
    }
  },
  apollo: {
    loadMenu: {
      prefetch: true,
      query: Menus
    },
    banners: {
      prefetch: true,
      query: Banners
    },
    pages: {
      prefetch: true,
      query: Pages
    }
  },
  mounted(){
    // this.$store.commit('pages/LOAD_PAGES', this.pages.edges)
    this.$store.commit('menuLinks/LOAD_ITENS_MENU', this.loadMenu)
    this.$store.commit('pages/LOAD_PAGE_HOME_BANNERS', this.banners.edges)
    this.$store.commit('pages/LOAD_PAGES', this.pages.edges)
    // this.$store.dispatch('menuLinks/loadMenus')
  }
}
</script>
