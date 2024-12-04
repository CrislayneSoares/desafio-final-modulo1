import home from './Home.module.scss'
export default function Home() {
    return (
        <section className={home.section}>
            <div className={home.banner}>
                <p>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</p>
            </div>
            <h2>Por que devo doar?</h2>
            <div className={home.cards}>

            </div>
        </section>
    )
}