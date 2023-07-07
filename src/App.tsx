import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";
import { Login } from "./pages/Login";
import { HomeGerentes } from "./pages/HomeGerentes";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/Gerente" Component={HomeGerentes} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
