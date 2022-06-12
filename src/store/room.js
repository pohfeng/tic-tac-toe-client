import { io } from 'socket.io-client'
import router from '../router'

export default {
  namespaced: true,
  state: {
    winningCombinations: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ],
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
    turn: 'x',
    winner: null,
    isDraw: false
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
    },
    SET_WINNER(state, winner) {
      state.winner = winner
    },
    SET_IS_DRAW(state, isDraw) {
      state.isDraw = isDraw
    }
  },
  actions: {
    joinRoom({ state, commit, dispatch }, { url, roomId }) {
      commit('SET_SOCKET', io(url))
      commit('SET_MARK', 'o')

      state.socket.on('connect', () => {
        commit('SET_ROOM_ID', roomId)
        state.socket.emit('join', roomId)
        state.socket.on('room-closed', () => {
          window.alert('This room does not exists!')
        })
        state.socket.on('join-room', (id) => {
          if (id === state.socket.id)
            router.push({ name: 'game-page', params: { id: roomId } })
        })
        state.socket.on('game-play-update-server', async (data) => {
          commit('UPDATE_GAME_DATA', data)
          await dispatch('checkWinner')
          await dispatch('checkDraw')
          if (!state.winner && !state.isDraw)
            commit('SET_TURN', state.turn === 'x' ? 'o' : 'x')
        })
      })
    },
    createRoom({ state, commit, dispatch }, { url }) {
      commit('SET_SOCKET', io(url))

      state.socket.on('connect', () => {
        commit('SET_ROOM_ID', state.socket.id)
        router.push({ name: 'create-room-page' })
        state.socket.on('Hello', (msg) => {
          console.log('hello: ', msg)
          router.push({ name: 'game-page', params: { id: state.socket.id } })
        })
        state.socket.on('game-play-update-server', async (data) => {
          commit('UPDATE_GAME_DATA', data)
          await dispatch('checkWinner')
          await dispatch('checkDraw')
          if (!state.winner && !state.isDraw)
            commit('SET_TURN', state.turn === 'x' ? 'o' : 'x')
        })
      })
    },
    updateGameData({ state, commit }, { latestData }) {
      commit('UPDATE_GAME_DATA', latestData)
      state.socket.emit('game-play-update', {
        id: state.roomId,
        data: latestData
      })
    },
    checkWinner({ state, commit }) {
      const values = Object.values(state.gameData)
      console.log('values: ', values)
      console.log('turn: ', state.turn)
      const winner = state.winningCombinations.some((combination) => {
        return combination.every((index) => {
          return values[index] === state.turn
        })
      })
      console.log('winner: ', winner)
      if (winner) commit('SET_WINNER', state.turn)
    },
    checkDraw({ state, commit }) {
      const values = Object.values(state.gameData)
      const isDraw =
        values.every((value) => {
          return value === 'x' || value === 'o'
        }) && !state.winner
      if (isDraw) commit('SET_IS_DRAW', true)
    },
    restartGame({ commit }) {
      commit('UPDATE_GAME_DATA', {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: ''
      })
      commit('SET_TURN', 'x')
      commit('SET_WINNER', null)
      commit('SET_IS_DRAW', false)
    },
    resetState({ commit }) {
      commit('SET_ROOM_ID', '')
      commit('SET_SOCKET', null)
      commit('UPDATE_GAME_DATA', {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: ''
      })
      commit('SET_TURN', 'x')
      commit('SET_WINNER', null)
      commit('SET_IS_DRAW', false)
    }
  }
}
