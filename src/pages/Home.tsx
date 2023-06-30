import frenteFarmaciaImg from '../assets/frenteFarmacia.jpeg'
import logoImg from '../assets/Logo.png'
import googleIconImg from "../assets/google-icon.svg"
import '../styles/auth.css'

export function Home(){
    return (
        <body id='page-auth'>
            <main>
                <h1>Avaliação de funcionários</h1>
                <img src={logoImg} alt="Logo" />
                <button className='botaoLogin'>
                    <img className='googleLogo' src={googleIconImg} alt='googleLogo'/>
                    Entre com Google
                </button>
            </main>
        </body>
    )
}