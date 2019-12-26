import gql from 'graphql-tag'
export const state = () => ({
  mobile: [],
  desktop: []
})
export const mutations = {
  LOAD_ITENS_MENU (state, value) {
    state.desktop = value.edges[0].node.menuItems.edges
    state.mobile = value.edges[1].node.menuItems.edges
  }
}
export const actions = {
  // async loadMenus() {
  //   const response = await this.$apollo.data({
  //     menus:{
  //       prefetch: true,
  //       query: () => import('@/apollo/query/Menus.gql')
  //     }
  //   })
  //   console.log('isso vem do graphql', response)
  // }
}
