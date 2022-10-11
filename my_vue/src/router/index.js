// create router for the application
import VueRouter from 'vue-router'

import VShareHomePage from '../components/VShareHomePage.vue'
import VShareProfile from '../components/VShareProfile.vue'
import UploadPage from '../components/UploadPage.vue'

const router = new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/homepage",
        },
        {
            path: "/homepage",
            component: VShareHomePage,
            meta: { title: 'Homepage' }
        },
        {
            path: "/profile",
            component: VShareProfile,
            meta: { title: 'Profile' }
        },
        {
            path: '/upload',
            component: UploadPage,
            meta: { title: 'Upload' }
        },
        // {
        //     path: '/signin',
        //     component: SignInPage,
        //     meta: { title: 'Sign-in' }
        // },
        // {
        //     path: '/signup',
        //     component: SignUpPage,
        //     meta: { title: 'Sign-Up' }
        // }
        // {
        //     path: '/video',
        //     component: VideoPage
        // }

    ]
})

export default router

router.beforeEach((to, from, next) => {
    if (to.path === '/homepage' || to.path === '/signin' || to.path === '/signup') {
        // if (localStorage.getItem('login') === 'true') {
        //     next()
        // } else {
        //     alert('Please sign in first!')
        // }
        next()
    } else {
        if (localStorage.getItem('Token') !== null) {
            console.log(localStorage.getItem('Token'))
            next()
        } else {
            //next()
            alert('Please sign in first!')
            console.log(localStorage.getItem('Token'))
        }
    }
})

router.afterEach((to) => {
    document.title = to.meta.title
})
