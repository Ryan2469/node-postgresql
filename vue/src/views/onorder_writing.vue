<template>
  <div>
    <Header/>
    <Kendo/>

  </div>

</template>
<script>
import Header from '../components/writing_header.vue'
import Content from '../components/writing_content.vue'
import Kendo from '../components/writing_content_kendo.vue'

export default {
  name: 'App',
  components: {
    Header,
    Kendo,

  }
}
</script>


<style>
</style>
