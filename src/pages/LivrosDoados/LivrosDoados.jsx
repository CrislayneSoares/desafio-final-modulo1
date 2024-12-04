import Livro from '../../components/livro/livro'
import ld from './LivrosDoados.module.scss'
import OProtagonista from '../../assets/imagens/Livros/o-protagonista.png'
export default function LivrosDoados() {
    return (
        <section className={ld.section}>
            <h2>Livros Doados</h2>
            <div className={ld.livros}>
                <Livro img={OProtagonista} alt={'O Protagonista'} titulo={'O Protagonista'} autor={'Susanne Andrade'} genero={'Ficção'} ></Livro>
                <Livro img={OProtagonista} alt={'O Protagonista'} titulo={'O Protagonista'} autor={'Susanne Andrade'} genero={'Ficção'} ></Livro>
                <Livro img={OProtagonista} alt={'O Protagonista'} titulo={'O Protagonista'} autor={'Susanne Andrade'} genero={'Ficção'} ></Livro>
            </div>
        </section>
    )
}