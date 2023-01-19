import { Hook } from "./Hook"
import "./Score.css"


export const Score = () => {
    const {nCardsOpen, nScore,} = Hook();

    return (
        <div className="score">
        <Point title="Pontuação" value={nScore} />
        <Point title="Numero de jogadas" value={nCardsOpen} />
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