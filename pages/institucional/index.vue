<template>
  <div
    v-if="page.img"
    class="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle"
    :style="'background-image: url(' + page.img.url + ');'"
  >
    <div class="uk-overlay-primary uk-position-cover">
      <div class="uk-position-center uk-text-center">
        <h1 class="uk-text-uppercase uk-text-bold uk-h2 uk-margin-small">{{ page.title }}</h1>
        <hr class="uk-divider-small uk-margin-remove" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: {}
    }
  },
  methods: {
    loadData() {
      this.page = this.$store.state.pages.institucional.page
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>
