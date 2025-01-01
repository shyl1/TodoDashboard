import { children, createContext, useState } from "react";

const AuthContext = createContext();

//const useAuth = useContext(AuthContext);

function AuthProvider({ children }){
  // store user data after login / signup
  const [user , setUser] = useState(null);
  // track authentication status 
  const [isAuthenticated ,setIsAuthenticated] = useState(false);

    //validating email 
    function validateEmail(email){
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function validatePassword(password){
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
    }


  return (
    <AuthContext.Provider value={{user, setUser ,isAuthenticated, validateEmail,validatePassword , setIsAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthProvider , AuthContext}