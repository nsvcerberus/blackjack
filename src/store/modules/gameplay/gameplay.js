import { promiseWithDelay } from '@/scripts/promises'
import { generateDeck } from './scripts/deck'
import dealer from './modules/players/dealer.js'
import user from './modules/players/user.js'

export default {
  namespaced: true,
  state: {
    roundLaunched: false,
    cardsInDeck: [],
    showWinner: false
  },
  getters: {
    getLastCardFromDeck: (state) => state.cardsInDeck[state.cardsInDeck.length - 1]
  },
  mutations: {
    setRoundLaunched: (state, value) => state.roundLaunched = value,
    setCardsToDeck: (state, value) => state.cardsInDeck = value,
    removeLastCardFromDeck: (state) => state.cardsInDeck.pop()
  },
  actions: {
    launchRound(context) {
      context.commit('setRoundLaunched', true);
      context.commit('setCardsToDeck', generateDeck());
      context.dispatch('dealCards');
    },
    dealCards(context) {
      for (var i = 0; i < 4; i++) {
        promiseWithDelay(500 * i, [i]).then((args) => {
          let module = (args[0] % 2 == 0) ? 'user' : 'dealer';
          const card = context.getters.getLastCardFromDeck;
          context.dispatch('gameplay/' + module +'/passCard', card, {root:true});
          context.commit('removeLastCardFromDeck');
        });
      }
    }
  },
  modules: {
    dealer,
    user
  }
}