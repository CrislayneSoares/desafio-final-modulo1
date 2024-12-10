import { Link } from 'react-router-dom'
import header from './header.module.scss'
import logo from '../../assets/imagens/logo.svg'
export default function Header() {
    return (
        <header className={header.header}>
            <div className={header.logo}>
                <figure>
                    <img src={logo} alt="" />
                </figure>
                <h1>Livros Vai Na Web</h1>
            </div>
            <nav className={header.nav}>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/LivrosDoados'}>Livros Doados</Link>
                    </li>
                    <li>
                        <Link to={'/QueroDoar'}>Quero doar</Link>
                    </li>
                </ul>
            </nav>
            <div className={header.pesquisa}>
                <input type="text" placeholder='O que você procura?' />
            </div>
        </header>
    )
}