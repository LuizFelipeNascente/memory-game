import "./Cards.css";


export const Cards = (id, idExclusive, img) => {

    return (
        <div id={id}className="cardsCards"> 

            <div className="frente"> </div>
            <div className="verso"> 
                <img src={img} alt={`Carta ${idExclusive}`} width={300} />
            </div>

        </div>
    )
}