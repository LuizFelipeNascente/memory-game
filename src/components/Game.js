import { Score } from "./Score";
import { Cards } from "./Cards";
import { CardsTo } from "../config/Card";
import "./Game.css";



export const Game = () => {

    return (
        <div className="game"> 
            <div className="game_content">
                <h1> Jogo da Memória </h1>
                    <Score />
                        <div className="cards">

                            {CardsTo.map((carta) => (
                                <Cards key={carta.id} {...carta} />
                            ))}

                        </div>
            </div>

        </div>
    )

}