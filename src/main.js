import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import {createI18n} from 'vue-i18n';
import {createHead} from '@unhead/vue/client';

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

const modules = import.meta.glob('./locales/*.json', {eager: true});

const messages = {};

Object.keys(modules).forEach(path => {
  const matched = path.match(/\.\/locales\/(.*)\.json$/);
  if (matched && matched.length > 1) {
    const locale = matched[1];
    messages[locale] = modules[path].default;
  }
});

const i18n = createI18n({
  locale: navigator.language ? navigator.language.split('-')[0] : 'en',
  fallbackLocale: 'en',
  legacy: false,
  messages,
});

const app = createApp(App);
const head = createHead();
app.use(head);
app.use(router);
app.use(i18n);
app.mount('#app');
