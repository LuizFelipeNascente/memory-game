import "./Game.css";
import { cardsTo } from "../constants/card";
import { Cards } from "./Cards";
import { Score } from "./Score";
import { Manuel } from "./Manuel";
import { MemoryGameProvider} from "./MemoryGame"


export const Game = () => {
  return (
    <MemoryGameProvider>
      <MemoryGameContent />
    </MemoryGameProvider>
  )
};

export const MemoryGameContent = () => {
  return (
    <div className="memory_game">
      <div className="memory_game_content">
        <h1>Jogo da Memória</h1>
        <Score />
        <div className="cards">
          {cardsTo.map((props) => (
            <Cards key={props.id} {...props} />
          ))}
        </div>
      </div>
      <Manuel />
    </div>
  );
}