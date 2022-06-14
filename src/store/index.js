import { createStore } from 'vuex'
import room from './room'
import ui from './ui'

export default createStore({
  modules: {
    room,
    ui
  }
})
