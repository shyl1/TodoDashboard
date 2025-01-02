import { createContext, useState } from "react";

const AuthContext = createContext();

//const useAuth = useContext(AuthContext);

function AuthProvider({ children }){
  // store user data after login / signup
  const [user , setUser] = useState(null);
  // track authentication status 
  const [isAuthenticated , setIsAuthenticated] = useState( localStorage.getItem("isAuthenticated") === "true")

    //validating email 
    function validateEmail(email){
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function validatePassword(password){
      //const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      const passwordRegex = /^.{8,}$/; // Only check for minimum length
      return passwordRegex.test(password);
    }

    function login(){
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
    };
    
    function logout() {
      setIsAuthenticated(false);
      localStorage.removeItem("isAuthenticated");
    };
    
  return (
    <AuthContext.Provider value={{user, setUser ,isAuthenticated,setIsAuthenticated, validateEmail,validatePassword , login , logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthProvider , AuthContext}