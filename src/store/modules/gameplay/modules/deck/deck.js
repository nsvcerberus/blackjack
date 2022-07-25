import { promiseWithDelay } from '@/scripts/promises'
import { getRandomIntFromRange } from "@/scripts/randomeGenerators";
import { cardsData } from "@/data/cards"

export default {
  namespaced: true,
  state: {
    cards: []
  },
  getters: {
    getLastCardFromDeck: (state) => state.cards[state.cards.length - 1]
  },
  mutations: {
    setCardsToDeck: (state, value) => state.cards = value,
    removeLastCardFromDeck: (state) => state.cards.pop()
  },
  actions: {
    create(context) {
      const deck = [];
      Object.keys(cardsData.cards).forEach(key => deck.push(key));
      context.commit('setCardsToDeck', deck);
      context.dispatch('shuffleDeck');
    },
    shuffleDeck(context) {
      const deck = context.state.cards;
      let i = deck.length;

      while(i > 0) {
        let indexFirstElement = getRandomIntFromRange(0, deck.length);
        let indexSecondElement = getRandomIntFromRange(0, deck.length);

        if(indexFirstElement != indexSecondElement) {
          [deck[indexFirstElement], deck[indexSecondElement]] = [deck[indexSecondElement], deck[indexFirstElement]];
          i--;
        }
      }

      context.commit('setCardsToDeck', deck);
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
}