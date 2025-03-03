import { useState } from "react";
import calculateHandValue from "../utils/calculateHandValue";
import { ICard } from "../types/ICard";
import { createDeck } from "../utils/createDeck";

export default function UseBlackjack() {
  const [message, setMessage] = useState<string>("");
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [deck, setDeck] = useState<ICard[]>(createDeck());
  const [playerHand, setPlayerHand] = useState<ICard[]>([]);
  const [dealerHand, setDealerHand] = useState<ICard[]>([]);

  function stand() {
    let newDealerHand = [...dealerHand];
    while (calculateHandValue(newDealerHand) < 17) {
      newDealerHand.push(deck.pop()!);
    }

    setDealerHand(newDealerHand);
    checkWinner(newDealerHand);
  }

  function checkWinner(dealerHand: ICard[]) {
    const playerValue = calculateHandValue(playerHand);
    const dealerValue = calculateHandValue(dealerHand);

    if (dealerValue > 21 || playerValue > dealerValue) {
      setMessage("You win!");
    } else if (playerValue < dealerValue) {
      setMessage("Dealer wins!");
    } else {
      setMessage("It's a tie!");
    }

    setGameOver(true);
  }

  function startGame() {
    setPlayerHand([]);
    setDealerHand([]);
    const newDeck = createDeck();
    setDeck(newDeck);
    setGameOver(false);
    setMessage("");
  }

  function hit() {
    const newDeck = [...deck];
    const newCard = newDeck.pop()!;
    const newHand = [...playerHand, newCard];

    setPlayerHand(newHand);
    setDeck(newDeck);

    if (calculateHandValue(newHand) > 21) {
      setGameOver(true);
      setMessage("You busted! Dealer wins.");
    }
  }

  return {
    stand,
    checkWinner,
    startGame,
    hit,
    playerHand,
    dealerHand,
    gameOver,
    message
  };
}
