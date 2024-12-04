import card from './card.module.scss'
export default function Card(props) {
    return (
        <div className={card.card}>
            <figure>
                <img src={props.img} alt={props.alt} />
            </figure>
            <p>{props.descricao}</p>
        </div>
    )
}