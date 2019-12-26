<template>
  <nuxt-link active-class="uk-active" tag="li" :to="url" ><a @click="clicado()">{{ titulo }}</a></nuxt-link>
</template>

<script>
export default {
 props: {
   titulo: {
     type: String,
     required: true
   },
   url: {
     type: String,
     required: true
   },
 },
 methods:{
  clicado() {
    this.$uikit.offcanvas('#menu-mobile').toggle();
   }
 }
}
</script>
