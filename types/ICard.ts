export type Suit = "Hearts" | "Diamonds" | "Clubs" | "Spades";
export type Value =
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "Jack"
  | "Queen"
  | "King"
  | "Ace";

export interface ICard {
  suit: Suit;
  value: Value;
  image?: string;
}
