import "./Score.css"


export const Score = () => {

    return (
        <div className="score">
        <Point title="Pontuação" value={0} />
        <Point title="Numero de jogadas" value={0} />
        </div>
    )
}

const Point = ({title, value}) => {
    return (
    <div className="point">
        <strong className="title"> {title}: </strong>
        <span className="value"> {value} </span>
    </div>
    )
}