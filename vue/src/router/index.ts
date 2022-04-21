import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// Native
import onorder_main from '../views/onorder_main.vue'
import onorder_main_grid from '../components/main_grid.vue'
import onorder_main_tap from '../components/main_tap.vue'

// Writing 
import onorder_writing from '../views/onorder_writing.vue'
import onorder_writing_content from '../components/writing_content.vue'
import onorder_writing_header from '../components/writing_header.vue'
import onorder_writing_kendo from '../components/writing_content_kendo.vue'

//view
import onorder_view from '../views/onorder_view.vue'
import onorder_view_header from '../components/view_header.vue'
import onorder_view_content from '../components/view_content.vue'
import onorder_view_footer from '../components/view_footer.vue'
import onorder_view_example from '../components/example.vue'


const routes: Array<RouteRecordRaw> = [
    // main
  {
    path: '/',
    name: 'main',
    component: onorder_main
  },

  {
    path: '/main_tap',
    name: '',
    component: onorder_main_tap
  },

  {
    path: '/main_grid',
    name: '',
    component: onorder_main_grid
  
  },

  // Writing

  {
    path: '/onorder_writing',
    name: 'writing',
    component: onorder_writing

  },

  {
    path: '/writing_header',
    name: '',
    component: onorder_writing_header

  },

  {
    path: '/writing_content',
    name: '',
    component: onorder_writing_content

  },

  {
    path: '/writing_kendo',
    name: '',
    component: onorder_writing_kendo

  },

  // View

  {
    path: '/onorder_view',
    name: 'view',
    component: onorder_view
  },


  {
    path: '/view_header',
    name: '',
    component: onorder_view_header
  },


  {
    path: '/view_content',
    name: '',
    component: onorder_view_content
  },

  {
    path: '/view_footer',
    name: '',
    component: onorder_view_footer
  },

  {
    path: '/example',
    name: '',
    component: onorder_view_example
  // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
