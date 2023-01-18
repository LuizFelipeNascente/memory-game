import "./Cards.css";


export const Cards = ({ id, idImage, image }) => {
    return (
      <div id={id} className="card">
        <div className="card_content">
          <div className="card_frente" />
          <div className="card_costas">
            <img alt={idImage} width={300} src={image} />
          </div>
        </div>
      </div>
    );
  };