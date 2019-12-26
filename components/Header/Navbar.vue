<template>
    <div class="uk-container">
      <nav class="uk-navbar">
        <div class="uk-navbar-left">
          <div class="uk-padding-small ">
            <nuxt-link to="../" class="uk-navbar-item uk-logo"
              >
              <img src="@/assets/img/logo.svg" alt="" />
            </nuxt-link>
          </div>
        </div>
        <div class="uk-navbar-right">
          <div class="uk-navbar-item">

          <ul class="uk-navbar-nav uk-visible@m">
            <Link
              v-for="item in links"
              :titulo="item.node.label"
              :url="item.node.url.replace('http://cedin.local', '')"
              :key="item.node.id"
            />
          </ul>
          <a
            uk-navbar-toggle-icon=""
            href="#menu-mobile"
            uk-toggle=""
            class="uk-navbar-toggle uk-hidden@m uk-icon uk-navbar-toggle-icon"
            ></a>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
  components: {
    Link: () => import("@/components/commons/Link")
  },
  data() {
    return {
      links: []
    }
  },
  mounted() {
   this.links = this.$store.state.menuLinks.desktop
  }
};
</script>
