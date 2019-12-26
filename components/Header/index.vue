<template>
  <header
    uk-sticky="media: 960"
    class="uk-navbar-container uk-sticky uk-box-shadow-small"
  >
    <NavBar />
  </header>
</template>

<script>
export default {
  components:{
    NavBar: () => import('@/components/Header/Navbar')
  }
}
</script>
