import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

import App from './app.vue';
import HomeView from './views/home.vue';
import AboutView from './views/about.vue';
import NotfoundView from './views/notfound.vue';

const routes = [
  {path: '/', component: HomeView},
  {path: '/about', component: AboutView},
  {path: '/:pathMatch(.*)*', component: NotfoundView},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
