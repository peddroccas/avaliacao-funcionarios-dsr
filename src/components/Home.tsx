import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import logoFarmaciaImg from "../assets/logo-farmacia.png";
import logOutIcon from "../assets/log-out-icon.svg";

import "../styles/home.css";

export function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();

//   function LogOut() {
//     navigate("/");
//   }

  return (
    <div>
      <header>
        <img
          src={logoFarmaciaImg}
          alt="logo-farmacia"
          className="logo-farmacia"
        />
        <p className="usuario">
          <strong className="cargo">Gerente</strong>
          {user?.name}
          <img src={user?.avatar} alt="foto-google" className="foto-google" />
        </p>
        {/* <button onClick={LogOut} className="botao-log-out">
          <img src={logOutIcon} alt="" />
          Log out
        </button> */}
      </header>
      <main className="funcao">
        <aside className="barra-lateral">
          <h2>Opções</h2>
          <a className="barra-lateral-link" href="">Avaliações pendentes</a>
          <a className="barra-lateral-link" href="">Administrativo</a>
          <a className="barra-lateral-link" href="">Balconistas</a>
          <a className="barra-lateral-link" href="">Gerentes</a>
          <a className="barra-lateral-link" href="">Motoqueiros</a>
          <a className="barra-lateral-link" href="">Perfumistas</a>
        </aside>
        <div className="avaliacoes-pendentes">
          <h1 className="titulo">Avaliações pendentes</h1>
          <div className="avaliacoes-pendentes-links">
            <a className="avaliacoes-pendentes-links-link" href="">Avaliação motoqueiros</a>
            <a className="avaliacoes-pendentes-links-link" href="">Avaliação perfumistas</a>
          </div>
        </div>
      </main>
    </div>
  );
}
