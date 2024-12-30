import Login from './components/loginComponents/Login.jsx';
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import { AuthProvider } from './components/AuthenticationContext.jsx';
import './App.css';



function App() {

  
  return (
    <>
    {/* {<AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>

      </Routes>
      </BrowserRouter>
    
    </AuthProvider>} */}
    <Login />
    </>
  )
}

export default App
