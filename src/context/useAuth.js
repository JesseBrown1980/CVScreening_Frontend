import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useAuthProvider() {
  const [account, setAccount] = useState({});

  function saveUser(param) {
    setAccount(param);
  }
  function saveAccount(setAccountParam) {
    localStorage.setItem("accessToken", setAccountParam.accessToken);
    localStorage.setItem("email", setAccountParam.email);
  }

  return {
    saveAccount,
    account,
    saveUser,
  };
}
