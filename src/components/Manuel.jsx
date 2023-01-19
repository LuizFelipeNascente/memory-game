import "./Manuel.css";
import classNames from "classnames";

export const Manuel = () => {

  const cn = classNames("result", {
    "result--open": false
  })

    return (
        <div className={cn}>
      <div className="result_pop">
        <p>Seu nível de memória é:</p>
        <h1>Bom</h1>
        <img
          src="/ate75.png"
          height={150}
          alt="level"
        />
        <p>
          <strong>Taxa de acertos:</strong>
          <span>60%</span>
        </p>
        <button className="button">
          New Game
        </button>
        
      </div>
    </div>
    )
}