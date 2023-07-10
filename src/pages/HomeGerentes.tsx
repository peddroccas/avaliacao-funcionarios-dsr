import { useNavigate } from "react-router-dom";
import logOutIcon from "../assets/log-out-icon.svg";

import "../styles/homeGerentes.css";
import logoFarmaciaImg from "../assets/logo-farmacia.png";
import { useAuth } from "../hooks/useAuth";

export function HomeGerentes() {
  const navigate = useNavigate();
  const { user } = useAuth();

  function LogOut() {
    navigate("/");
  }

  return (
    <div id="gerente">
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
      <main className="gerente">
        <aside className="barra-lateral">
          <h2>Opções</h2>
        </aside>
        <div className="avaliacoes-pendentes">
          <h1 className="titulo">Avaliações pendentes</h1>
          <div className="avaliacoes-pendentes-link">
            <a href="">Avaliação motoqueiros</a>
            <a href="">Avaliação perfumistas</a>
          </div>
        </div>
      </main>
    </div>
  );
}
