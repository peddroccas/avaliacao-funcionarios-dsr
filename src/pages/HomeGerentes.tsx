import { useNavigate } from 'react-router-dom'
import logOutIcon from '../assets/log-out-icon.svg'
import '../styles/homeGerentes.css'
import logoFarmaciaImg from '../assets/logo-farmacia.png'


export function HomeGerentes(){
    const navigate = useNavigate();

    function LogOut(){
        navigate('/')
    }

    return (
        <div id='gerente'>
            <header>
                <p className='saudacao'>Pedro Bernardes - <strong className='cargo'>GERENTE</strong></p>
                <img src={logoFarmaciaImg} alt="" />
                <button onClick={LogOut} className='botaoLogOut'>
                    <img src={logOutIcon} alt="" />
                    Log out
                    </button>
            </header>
            <main>
                <h2>Avaliações pendentes</h2>
            </main>
        </div>
    )
}