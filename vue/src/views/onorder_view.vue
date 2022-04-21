<template>
  <div>
    <Header/>
    <Content/>
    <Footer/>
  </div>

</template>
<script>
import Header from '../components/view_header.vue'
import Content from '../components/view_content.vue'
import Footer from '../components/view_footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer,
  }
}

</script>


<style>
</style>
