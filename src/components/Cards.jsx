import "./Cards.css";
import { Hook } from "./Hook";


export const Cards = ({ id, idImage, image }) => {

  const { openCard } = Hook()

  const control = () => {
    openCard()
  }

    return (
      <div id={id} className="card" onClick={control}>
        <div className="card_content">
          <div className="card_frente" />
          <div className="card_costas">
            <img alt={idImage} width={300} src={image} />
          </div>
        </div>
      </div>
    );
  };

  