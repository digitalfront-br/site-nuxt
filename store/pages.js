export const state = () => ({
  home: {
    banners: []
  },
  blog: {
    page: {},
    posts: []
  },
  institucional: {
    page: {}
  },
  faleConosco: {
    page: {}
  }
})

export const mutations = {
  // LOAD_PAGE_BLOG (state, value) {
  //   state.blog.page = value.edges[0].node
  // },
  LOAD_PAGE_HOME_BANNERS (state, value) {
    state.home.banners = value
    console.log('sassss', value)
  },
  LOAD_PAGES (state, value) {
    state.blog.page = value[0].node
    state.institucional.page = value[1].node
    state.faleConosco.page = value[2].node
  }
}
