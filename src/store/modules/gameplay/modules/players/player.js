import { cardsData } from "@/data/cards";

export default class {
  constructor() {
    this.namespaced = true,
    this.state = {
      cards: [],
      scores: 0,
      winner: false
    },
    /* this.getters: {
      getCards: (state, card) => state.cards.push(card),
    }, */
    this.mutations = {
      addCard: (state, card) => state.cards.push(card),
      countScores: (state) => state.scores = this.countScores()
    },
    this.actions = {
      async passCard(context, card) {
        context.commit('addCard', card);
        context.commit('countScores');
      }
    }
  }

  countScores() {
    let results = [];

    this.state.cards.forEach(card => {
      let newResults = [];
      cardsData.cards[card].scores.forEach((score, index) => {
        if (results.length > 0)
          results.forEach(result => newResults.push(score + result));
        else
          newResults.push(score);

        if (index == cardsData.cards[card].scores.length - 1)
          results = [...newResults];
      });
    });

    let result = results[0];
    if(results.length > 1) {
      var valuesBefore21 = [...results.filter(value => value <= 21)];
      if(valuesBefore21.length > 0)
        result = Math.max(...valuesBefore21);
      else
        result = Math.min(results);
    }

    return result;
  }
}