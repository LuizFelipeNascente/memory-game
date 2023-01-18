import "./Game.css";
import { cardsTo } from "../constants/card";
import { Cards } from "./Cards";
import { Score } from "./Score";


export const Game = () => {
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
      
    </div>
  );
};