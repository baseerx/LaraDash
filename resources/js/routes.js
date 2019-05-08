import Vue from 'vue'
import { Form, HasError, AlertError } from 'vform'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
const routes = [
    { path: '/profile', component: require('./components/Profile').default },
    { path: '/dashboard', component: require('./components/Dashboard').default },
    { path: '/users', component: require('./components/Users').default }
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

export default router
