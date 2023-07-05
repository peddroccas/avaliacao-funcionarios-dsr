import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "./pages/Login";
import { HomeGerentes } from "./pages/HomeGerentes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path='/Gerente' Component={HomeGerentes}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
