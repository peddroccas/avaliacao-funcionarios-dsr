import { auth, firebase } from '../services/firebase'
import { useContext} from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../App'
import logoFarmaciaImg from '../assets/logo-farmacia.png'
import googleIconImg from "../assets/google-icon.svg"
import '../styles/auth.css'


export function Login(){
    const navigate = useNavigate();
    const { user, signInWithGoogle} = useContext(AuthContext)

    async function navigation(){
        await signInWithGoogle()
        navigate('/gerente');
    }

    return (
        <div id='page-auth'>
            <main>
                <h1>Avaliação de funcionários</h1>
                <img src={logoFarmaciaImg} alt="Logo" />
                <button onClick={navigation} className='botaoLogin'>
                    <img className='googleLogo' src={googleIconImg} alt='googleLogo'/>
                    Entre com Google
                </button>
            </main>
        </div>
    )
}