import { Children, createContext, useContext, useState } from "react";

const AuthContext = createContext();

const useAuth = useContext(AuthContext);

function AuthProvider({ Children }){
  //state value to know if the usre logged in or not to keep updating the state
  const [logged, setLogged] = useState(false);

  function login(){
    setLogged(true);
    localStorage.setItem('logged' , 'true');
  }

  function logout(){
    setLogged(false);
  }
  return (
    <AuthContext.Provider value={{logged , login , logout}}>
      {Children}
    </AuthContext.Provider>
  );
}

export {AuthProvider , AuthContext , useAuth}