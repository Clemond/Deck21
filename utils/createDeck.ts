import { ICard, Suit, Value } from "../types/ICard";

function createDeck(): ICard[] {
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
    "Ace",
  ];

  const deck: ICard[] = [];
  suits.map((suit) => values.map((value) => deck.push({ suit, value })));

  return deck;
  // * Use this to shuffle deck:
  // ! deck.sort(() => Math.random() - 0.5);
}
