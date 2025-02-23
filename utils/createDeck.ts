import { ICard, Suit, Value } from "../types/ICard";

const suitMap: { [key: string]: string } = {
  Hearts: "H",
  Diamonds: "D",
  Clubs: "C",
  Spades: "S"
};

const valueMap: { [key: string]: string } = {
  Ace: "A",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "10": "10",
  Jack: "J",
  Queen: "Q",
  King: "K"
};

export function createDeck(): ICard[] {
  const suits: Suit[] = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const values: Value[] = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace"
  ];

  const deck: ICard[] = [];

  suits.map((suit) =>
    values.map((value) => {
      const cardImage = `https://deckofcardsapi.com/static/img/${valueMap[value]}${suitMap[suit]}.png`;
      deck.push({ suit, value, image: cardImage });
    })
  );

  return deck.sort(() => Math.random() - 0.5);

  // * Use this to shuffle deck:
  // ! deck.sort(() => Math.random() - 0.5);
  // * Use this to display the deck in order
  // ! deck;
}
