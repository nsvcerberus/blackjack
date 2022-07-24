import Player from './player'
const player = new Player();

export default {
  namespaced: player.namespaced,
  state: {
    ...player.state
  },
  mutations: {
    ...player.mutations
  },
  actions: {
    ...player.actions
  }
}