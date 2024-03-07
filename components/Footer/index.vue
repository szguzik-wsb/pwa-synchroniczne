<template>
  <footer>
    <Newsletter/>
    <Links/>
    <Copyright/>
  </footer>
</template>

<script>
import Newsletter from './Newsletter.vue'
import Links from './Links.vue'
import Copyright from './Copyright.vue'
export default {
  components: {
    Newsletter,
    Copyright,
    Links
  }
}
</script>