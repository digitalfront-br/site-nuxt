<template>
<div
  class="uk-position-relative uk-visible-toggle"
  tabindex="-1"
  uk-slideshow="animation: scale; min-height: 300; ratio: false"
>
  <ul class="uk-slideshow-items" uk-height-viewport="offset-top: 20">
    <li v-for="b in dados" :key="b.node.id">
      <img :src="b.node.img.url" alt="" uk-cover />
      <div class="uk-overlay-default uk-position-cover"></div>
      <div class="uk-position-center uk-position-medium uk-text-center uk-animation-fade">
        <div uk-slideshow-parallax="scale: 1,1,0.8">
          <h2
            :class="'uk-text-uppercase uk-text-bold  ' + b.node.info.titulo"
            uk-slideshow-parallax="x: 200,0,0"
          >
            {{ b.node.title }}
          </h2>
          <div
            :class="'uk-light ' + b.node.info.titulo"
            v-html="b.node.content"
            uk-slideshow-parallax="x: 400,0,0;"
          ></div>
          <p class="uk-margin-top" v-if="b.node.info.botao.mostrar === 'Exibir'">
            <nuxt-link :to="b.node.info.botao.url" :class="'uk-button uk-button-large ' + b.node.info.botao.cor">
              {{ b.node.info.botao.texto }}
            </nuxt-link>
          </p>
        </div>
      </div>
    </li>


    </ul>

    <a uk-icon="icon: chevron-left; ratio: 2.5" class="uk-position-center-left uk-position-small uk-light uk-hidden-hover" href="#" uk-slideshow-item="previous"></a>
    <a uk-icon="icon: chevron-right; ratio: 2.5" class="uk-position-center-right uk-position-small uk-light uk-hidden-hover" href="#" uk-slideshow-item="next"></a>

</div>
</template>
<script>
export default {
  props: {
    dados: {
      type: Array,
      required: true
    }
  }
}
</script>
