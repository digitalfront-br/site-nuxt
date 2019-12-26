<template>
<div id="menu-mobile" uk-offcanvas="overlay: true">

  <div
    id="painel-menu-mobile"
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
        v-if="item.node.url !== 'http://centrodireitointernacional.com.br/'"
        v-for="item in links"
        :titulo="item.node.label"
        :url="item.node.url.replace('http://cedin.local', '')"
        :key="item.node.id"
      />
      <li v-else><a href="http://centrodireitointernacional.com.br/" target="_blank">Centro de Pesquisa</a></li>
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
</template>

<script>
export default {
  components: {
    Link: () => import("@/components/commons/LinkMobile")
  },
  data() {
    return {
      links: []
    };
  },
  methods:{
    recolheMenu(){
      console.log('clicado')
    }
  },
  mounted() {
    this.links = this.$store.state.menuLinks.mobile;
  }
};
</script>
