import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/base/HomeView.vue'
import SignUp from '../views/auth/SignUp.vue'
import Login from '../views/auth/Login.vue'
import SharedTasks from '../views/shared/SharedTasks.vue'
import SharedTask from '@/views/shared/SharedTask.vue'
import Profile from '../views/profile/Profile.vue'
import Task from '@/views/task/Task.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path: '/signup',
    name: 'SignuUp',
    component: SignUp
  },{
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/shared-tasks',
    name: 'sharedTasks',
    component: SharedTasks
  },{
    path: '/@:username',
    name: 'profile',
    component: Profile
  },{
    path: '/shared/:pk',
    name: 'sharedTask',
    component: SharedTask
  },{
    path: '/task/:pk',
    name: 'task',
    component: Task
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
