import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import Card from 'primevue/card';

import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const app = createApp(App);
app.use(router).use(PrimeVue)

app.component('Toolbar', Toolbar)
app.component('Button', Button)
app.component('Menubar', Menubar)
app.component('Card', Card)

app.mount('#app')



