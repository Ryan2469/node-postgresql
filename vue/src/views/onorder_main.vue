<template>
  <div>
    <Tap/>
    <Grid/>
  </div>

</template>
<script>
import Grid from '../components/main_grid.vue'
import Tap from '../components/main_tap.vue'


export default {
  name: 'App',
  components: {
    Tap,
    Grid,
  }
}

</script>


<style>
</style>
