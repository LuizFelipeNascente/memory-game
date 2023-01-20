import "./Manuel.css";
import { rating } from "./Result"
import classNames from "classnames";
import { Hook } from "./Hook";
import { useMemo } from "react";

export const Manuel = () => {

  const { idPairOk, cards, nCardsOpen, reset } = Hook();

  const zerou = cards.length === idPairOk.length * 2;

  const cn = classNames("result", {
    "result--open": zerou
  
  })

  const hitRate = cards.length / nCardsOpen * 100;
  const rates = useMemo (() => {
    return rating.find(({ hit }) => hit < hitRate);
  }, [hitRate]);

    return (
        <div className={cn}>
      <div className="result_pop">
        <p>Sua memória é</p>
        <h1>{rates?.title}</h1>
        <img
          src={rates?.image}
          height={200}
          alt="level"
        />
        <p>
          <strong>Sua média de acertos foi de </strong>
          <span>{hitRate.toFixed(0)}%</span>
        </p>
        <button className="button" onClick={reset}>
          New Game
        </button>
        
      </div>
    </div>
    )
}