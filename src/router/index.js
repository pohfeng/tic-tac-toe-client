import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import CreateRoomPage from '../pages/CreateRoomPage.vue'
import JoinRoomPage from '../pages/JoinRoomPage.vue'
import GamePage from '../pages/GamePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/create-room',
    name: 'create-room-page',
    component: CreateRoomPage
  },
  {
    path: '/join-room',
    name: 'join-room-page',
    component: JoinRoomPage
  },
  {
    path: '/game/:id',
    name: 'game-page',
    component: GamePage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
