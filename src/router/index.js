import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import CreateRoomPage from '../pages/CreateRoomPage.vue'
import JoinRoomPage from '../pages/JoinRoomPage.vue'
import GamePage from '../pages/GamePage.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/create-room',
    name: 'create-room-page',
    component: CreateRoomPage,
    beforeEnter: () => {
      if (!store.state.room.roomId) {
        return { name: 'home' }
      }
    }
  },
  {
    path: '/join-room',
    name: 'join-room-page',
    component: JoinRoomPage
  },
  {
    path: '/game/:id',
    name: 'game-page',
    component: GamePage,
    beforeEnter: async () => {
      // handle user refresh
      if (!store.state.room.roomId) {
        window.alert(
          'This Room is closed! Please create a new room or join an existing room to play.'
        )
        return { name: 'home' }
      }

      // reset game data
      await store.dispatch('room/restartGame')
      return true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
