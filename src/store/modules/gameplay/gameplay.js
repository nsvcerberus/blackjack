import deck from './modules/deck/deck.js'
import dealer from './modules/players/dealer.js'
import user from './modules/players/user.js'

export default {
  namespaced: true,
  state: {
    roundLaunched: false,
    showWinner: false
  },
  mutations: {
    setRoundLaunched: (state, value) => state.roundLaunched = value
  },
  actions: {
    launchRound(context) {
      context.commit('setRoundLaunched', true);
      context.dispatch('gameplay/deck/create', null, {root:true});
      context.dispatch('gameplay/deck/dealCards', null, {root:true});
    }
  },
  modules: {
    deck,
    dealer,
    user
  }
}