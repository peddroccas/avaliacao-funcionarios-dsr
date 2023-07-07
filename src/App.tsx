import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";

import { auth, firebase } from "./services/firebase";
import { Login } from "./pages/Login";
import { HomeGerentes } from "./pages/HomeGerentes";

type User = {
  id: string;
  name: string;
  avatar: string;
};

// 252292527134-jdgelkljf5eb3l98r7hni05guvapn5fi.apps.googleusercontent.com

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

function App() {
  const [user, setUser] = useState<User>();

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google Account");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/Gerente" Component={HomeGerentes} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
