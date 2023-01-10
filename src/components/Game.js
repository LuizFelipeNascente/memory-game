import { Score } from "./Score";
import { Cards } from "./Cards";

export const Game = () => {

    return (
        <div className="game"> 
            <div className="game_content">
                <h1> Jogo da Memória </h1>
                    <Score />
                        <div className="cards">

                            < Cards />

                        </div>
            </div>

        </div>
    )

}