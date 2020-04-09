import Vue from 'vue'
import Router from 'vue-router'
import profile from '../components/profile.vue'
import portfolio from '../components/portfolio.vue'
import skills from '../components/skills.vue'
import education from '../components/education.vue'
import activities from '../components/Activities.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'profile',
            component: profile
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: portfolio
        },
        {
            path: '/skills',
            name: 'skills',
            component: skills
        },
        {
            path: '/skills',
            name: 'skills',
            component: skills
        },
        {
            path: '/education',
            name: 'education',
            component: education
        },
        {
            path: '/activities',
            name: 'activities',
            component: activities
        },



    ]

})
