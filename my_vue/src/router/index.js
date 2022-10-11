import VueRouter from 'vue-router'
import ManagementSystem from '../pages/ManagementSystem'
import VideoPlay from "../components/VideoPlay"

export default new VueRouter({
    routes: [
        {
            path: "/Administrator",
            component: ManagementSystem
        },
        {
            path: "/VideoPlay",
            component: VideoPlay
        }
    ]
})