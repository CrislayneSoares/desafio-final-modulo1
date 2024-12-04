import footer from './footer.module.scss'
import facebook from '../../assets/imagens/facebook.png'
import instagram from '../../assets/imagens/instagram.png'
import linkedin from '../../assets/imagens/linkedin.png'
import youtube from '../../assets/imagens/youtube.png'
import twitter from '../../assets/imagens/twitter.png'
export default function Footer() {
    return (
        <footer className={footer.footer}>
            <div className={footer.contato}>
                <span>4002-8922</span>
                <nav>
                    <ul>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" /></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" /></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="" /></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" /></a></li>
                    </ul>
                </nav>
            </div>
            <div className={footer.copy}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </div>
        </footer>
    )
}