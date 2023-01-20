import "./Game.css";
import { Hook } from "./Hook"
import { Cards } from "./Cards";
import { Score } from "./Score";
import { Manuel } from "./Manuel";
import { MemoryGameProvider} from "./MemoryGame"
import { useEffect } from "react";


export const Game = () => {
  return (
    <MemoryGameProvider>
      <MemoryGameContent />
    </MemoryGameProvider>
  )
};

export const MemoryGameContent = () => {
  const {cards, playGame} = Hook ()

  useEffect(() => {
    playGame();
  }, [])

  return (
    <div className="memory_game">
      <div className="memory_game_content">
        <h1>Jogo da Memória</h1>
        <Score />
        <div className="cards">
          {cards.map((props) => (
            <Cards key={props.id} {...props} />
          ))}
        </div>
      </div>
      <Manuel />
    </div>
  );
}