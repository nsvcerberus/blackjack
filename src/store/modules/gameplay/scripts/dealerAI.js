import { mapGetters } from "vuex";

export const initialDealOfCards = () => {
  console.log("map state = " + mapGetters('gameplay', ['getLastCardFromDeck']));
}

/* const deck = [];

export const defineCardsToDeck = () => {
  Object.keys(cardsData.cards).forEach(key => deck.push(key));
  return shuffleDeck();
}

const shuffleDeck = () => {
  let i = deck.length;

  while(i > 0) {
    let indexFirstElement = getRandomIntFromRange(0, deck.length);
    let indexSecondElement = getRandomIntFromRange(0, deck.length);

    if(indexFirstElement != indexSecondElement) {
      [deck[indexFirstElement], deck[indexSecondElement]] = [deck[indexSecondElement], deck[indexFirstElement]];
      i--;
    }
  }

  return deck;
} */