import "./Manuel.css";
import classNames from "classnames";
import { Hook } from "./Hook";

export const Manuel = () => {

  const { idPairOk, cards } = Hook();

  const zerou = cards.length === idPairOk.length * 2;

  const cn = classNames("result", {
    "result--open": zerou
  
  })

    return (
        <div className={cn}>
      <div className="result_pop">
        <p>Sua memória é</p>
        <h1>Boa dimaiszi</h1>
        <img
          src="/ate75.png"
          height={150}
          alt="level"
        />
        <p>
          <strong>Sua média de acertos foi de </strong>
          <span>60%</span>
        </p>
        <button className="button">
          New Game
        </button>
        
      </div>
    </div>
    )
}