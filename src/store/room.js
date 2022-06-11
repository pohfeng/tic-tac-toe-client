import { io } from 'socket.io-client'
import router from '../router'

export default {
  namespaced: true,
  state: {
    gameData: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: ''
    },
    roomId: '',
    socket: null,
    mark: 'x',
    turn: 'x'
  },
  mutations: {
    SET_ROOM_ID(state, id) {
      state.roomId = id
    },
    SET_SOCKET(state, socket) {
      state.socket = socket
    },
    UPDATE_GAME_DATA(state, latestData) {
      state.gameData = latestData
    },
    SET_MARK(state, mark) {
      state.mark = mark
    },
    SET_TURN(state, turn) {
      state.turn = turn
    }
  },
  actions: {
    joinRoom({ state, commit }, { url, roomId }) {
      commit('SET_SOCKET', io(url))
      commit('SET_MARK', 'o')

      state.socket.on('connect', () => {
        commit('SET_ROOM_ID', state.socket.id)
        console.log('roomId:', roomId)
        state.socket.emit('join', roomId)
        state.socket.on('game-play-update', (msg) => {
          console.log('join: ', msg)
        })
        router.push({ name: 'game-page', params: { id: state.socket.id } })
      })
    },
    createRoom({ state, commit }, { url }) {
      commit('SET_SOCKET', io(url))

      state.socket.on('connect', () => {
        commit('SET_ROOM_ID', state.socket.id)

        state.socket.on('game-play-update', (msg) => {
          console.log('creator:', msg)
        })
      })
    },
    updateGameData({ state, commit }, { latestData }) {
      commit('SET_TURN', state.turn === 'x' ? 'o' : 'x')
      commit('UPDATE_GAME_DATA', latestData)
      state.socket.emit('game-play-update', {
        id: state.roomId,
        data: latestData
      })
    }
  }
}
