import Card from '../../components/card/card'
import home from './Home.module.scss'
import community from '../../assets/imagens/community.png'
import balance from '../../assets/imagens/balance.png'
import transform from '../../assets/imagens/transform.png'
import reading from '../../assets/imagens/reading.png'
export default function Home() {
    return (
        <section className={home.section}>
            <div className={home.banner}>
                <p>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</p>
            </div>
            <h2>Por que devo doar?</h2>
            <div className={home.cards}>
                <Card img={community} alt={'community'} descricao={'Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.'}></Card>
                <Card img={reading} alt={'reading'} descricao={'Estimula o hábito da leitura e o aprendizado contínuo.'}></Card>
                <Card img={transform} alt={'transform'} descricao={'Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.'}></Card>
                <Card img={balance} alt={'balance'} descricao={'Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.'}></Card>
            </div>
        </section>
    )
}