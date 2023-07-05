import { Navigate, useNavigate } from 'react-router-dom'
import logoFarmaciaImg from '../assets/logo-farmacia.png'
import googleIconImg from "../assets/google-icon.svg"
import '../styles/auth.css'

export function Login(){
    const navigate = useNavigate();

    function navigateToGerentes(){
        navigate('/gerente');
    }
    
    return (
        <div id='page-auth'>
            <main>
                <h1>Avaliação de funcionários</h1>
                <img src={logoFarmaciaImg} alt="Logo" />
                <button onClick={navigateToGerentes} className='botaoLogin'>
                    <img className='googleLogo' src={googleIconImg} alt='googleLogo'/>
                    Entre com Google
                </button>
            </main>
        </div>
    )
}