<template>
  <li><nuxt-link :to="url">{{ titulo }}</nuxt-link></li>
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
 }
}
</script>
