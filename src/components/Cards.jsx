import "./Cards.css";
import classNames from "classnames";
import { Hook } from "./Hook";


export const Cards = ({ id, idImage, image }) => {

  const { openCard, cardsOpen } = Hook();

  const control = () => {
    openCard({id, idImage});
  };

    const cardOpen = cardsOpen.includes(id);
    const nClick = true;

    const cn = classNames("card", {
      "card-open": cardOpen,
    })

    return (
      <div id={id} className={cn} onClick={control}>
        <div className="card_content">
          <div className="card_frente" />
          <div className="card_costas">
            <img alt={idImage} width={300} src={image} />
          </div>
        </div>
      </div>
    );
  };

  