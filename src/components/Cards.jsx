import "./Cards.css";
import classNames from "classnames";
import { Hook } from "./Hook";


export const Cards = ({ id, idImage, image }) => {

  const { openCard, cardsOpen, idPairOk } = Hook();

  const control = () => {
    openCard({id, idImage});
  };

    const cardFind = idPairOk.includes(idImage);
    const cardOpen = cardFind || cardsOpen.includes(id);
    const nClick = cardOpen;

    const cn = classNames("card", {
      "card-open": cardOpen,
    })

    return (
      <button id={id} className={cn} onClick={control} disabled={nClick}>
        <div className="card_content">
          <div className="card_front" />
          <div className="card_verse">
            <img alt={idImage} width={300} src={image} />
          </div>
        </div>
      </button>
    );
  };

  