import livro from './livro.module.scss'
export default function Livro(props) {
    return (
        <div>
            <div className={livro.card}>
                <figure>
                    <img src={props.img} alt={props.alt} />
                </figure>
                <span>{props.titulo}</span>
                <span>{props.autor}</span>
                <span>{props.genero}</span>
            </div>
        </div>
    )
}