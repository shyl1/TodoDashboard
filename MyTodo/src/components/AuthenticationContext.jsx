import { createContext, useState } from "react";

const AuthContext = createContext();

//const useAuth = useContext(AuthContext);


function AuthProvider({ children }){
  // store user data after login / signup
  // const [user , setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  //const [user , setUser] = useState('')
  // track authentication status 
  const [isAuthenticated , setIsAuthenticated] = useState( localStorage.getItem("isAuthenticated") === "true");

  //Add a state to track if the user has attempted to authenticate.
  const [hasAttempted, setHasAttempted] = useState(false);

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
      setHasAttempted(true);
      //setUser(userData);
      localStorage.setItem("isAuthenticated", "true");
      //localStorage.setItem("user", JSON.stringify(userData));
    };
    
    function logout() {
      setIsAuthenticated(false);
      setHasAttempted(false);
      //setUser(null);
      localStorage.removeItem("isAuthenticated");
      //localStorage.removeItem("user");
    };
    
  return (
    <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated, validateEmail,validatePassword , login , logout , hasAttempted,setHasAttempted }}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthProvider , AuthContext}