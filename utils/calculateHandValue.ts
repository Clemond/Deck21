import { Hand } from "../types/hand.types";

export default function CalculateHandValue(hand: Hand) {
  let value = 0;
  let aces = 0;

  hand.forEach((card) => {
    if (["Jack", "Queen", "King"].includes(card.value)) {
      value += 10;
    } else if (card.value === "Ace") {
      value += 11;
      aces += 1;
    } else {
      value += parseInt(card.value);
    }
  });

  while (value > 21 && aces > 0) {
    value -= 10;
    aces -= 1;
  }

  return value;
}
