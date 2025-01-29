import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import IndexPage from './pages/Blogindex.vue';
import PostReader from './pages/PostReader.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomePage, meta: { title: 'Home' } },
  { path: '/about', component: AboutPage, meta: { title: 'AboutMe' } },
  { path: '/index', component: IndexPage, meta: { title: 'Index' } },
  { path: '/post/:file', name: 'PostReader', component: PostReader, props: true}
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
