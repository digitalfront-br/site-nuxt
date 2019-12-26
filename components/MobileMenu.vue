<template>
<div id="menu-mobile" uk-offcanvas="overlay: true">

  <div
    class="uk-offcanvas-bar uk-flex uk-flex-column uk-text-center uk-offcanvas-bar-animation uk-offcanvas-slide"
  >
    <button
      class="uk-offcanvas-close uk-close-large uk-icon uk-close"
      type="button"
      uk-close=""
    ></button>

    <ul
      class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical uk-nav-parent-icon"
      uk-nav=""
    >
      <Link
        v-if="links"
        v-for="item in links"
        :titulo="item.node.label"
        :url="item.node.url.replace('http://cedin.local', '')"
        :key="item.node.id"
      />
    </ul>

    <div>
      <div
        class="uk-grid-small uk-child-width-auto uk-flex-inline uk-grid"
        uk-grid=""
      >
        <div class="uk-first-column">
          <nuxt-link
            class="uk-icon-button uk-icon"
            to="#"
            uk-icon="icon: facebook"
          ></nuxt-link>
        </div>
        <div>
          <nuxt-link
            class="uk-icon-button uk-icon"
            to="#"
            uk-icon="icon: twitter"
          ></nuxt-link>
        </div>
        <div>
          <nuxt-link class="uk-icon-button uk-icon" to="#" uk-icon="icon: mail"></nuxt-link>
        </div>
        <div>
          <nuxt-link
            class="uk-icon-button uk-icon"
            to="#"
            uk-icon="icon: receiver"
          ></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</div>

  <!-- <div class="uk-container">
      <nav class="uk-navbar">
        <div class="uk-navbar-left">
          <nuxt-link to="../" class="uk-navbar-item uk-logo"
            >
            landing
          </nuxt-link>
        </div>
        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav uk-visible@m">
            <Link
              v-if="links"
              v-for="item in links"
              :titulo="item.node.label"
              :url="item.node.url.replace('http://cedin.local', '')"
              :key="item.node.id"
            />
          </ul>
          <nuxt-link
            uk-navbar-toggle-icon=""
            to="#offcanvas"
            uk-toggle=""
            class="uk-navbar-toggle uk-hidden@m uk-icon uk-navbar-toggle-icon"
            ></nuxt-link>
        </div>
      </nav>
    </div> -->
</template>

<script>
export default {
  components: {
    Link: () => import("@/components/commons/Link")
  },
  data() {
    return {
      links: []
    };
  },
  mounted() {
    this.links = this.$store.state.menuLinks.mobile;
  }
};
</script>
