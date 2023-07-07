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
        <p className="saudacao">
          {user?.name} - <strong className="cargo">GERENTE</strong>
        </p>
        <img src={logoFarmaciaImg} alt="" />
        <button onClick={LogOut} className="botaoLogOut">
          <img src={logOutIcon} alt="" />
          Log out
        </button>
      </header>
      <main className="gerente-main">
        <aside className="barra-lateral">
          <h2></h2>
        </aside>
        <h2>Avaliações pendentes</h2>
        {/* aqui entra os links para abrir as avaliações */}
      </main>
    </div>
  );
}
