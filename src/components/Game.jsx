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
  const {cards, playGame, loading} = Hook ()

  useEffect(() => {
    playGame();
  }, [])

  return (
    <div className="memory_game">
      <div className="memory_game_content">
        <h1>Teste da memória!</h1>
        <div className="info">
        É só encontrar os doze pares e saberá se está afetado pela magia Obliviate !
        </div>
        <Score />
        
        {loading ? (
          <h1> SPECTRUM PATRONO </h1>
        ) : (
          <div className="cards">

            {cards.map((props) => (
              <Cards key={props.id} {...props} />
            ))}
          </div>
        )}
          
        
      </div>
      <Manuel />
    </div>
  );
}