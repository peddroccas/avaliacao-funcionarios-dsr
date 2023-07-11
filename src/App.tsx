import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";
import { Login } from "./pages/Login";
import { Gerentes } from "./pages/Gerentes";
import {AdmCentral} from "./pages/AdmCentral"

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/Gerente" Component={Gerentes} />
          <Route path="/AdmCentral" Component={AdmCentral}/>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
