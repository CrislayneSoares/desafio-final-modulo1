import qd from './QueroDoar.module.scss'
export default function QueroDoar() {
    return (
        <section className={qd.section}>
            <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
            <div className={qd.boxForm}>
                <figure>
                    <img src="" alt="" />
                    <figcaption>Informações do Livro</figcaption>
                </figure>
                <form action="">
                    <input type="text" placeholder='Título' />
                    <input type="text" placeholder='Categoria' />
                    <input type="text" placeholder='Autor' />
                    <input type="text" placeholder='Link da Imagem' />
                    <input type="submit" value="Doar" />
                </form>
            </div>
        </section>
    )
}