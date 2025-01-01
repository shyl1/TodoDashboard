import Login from './components/loginComponents/Login.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AuthProvider } from './components/AuthenticationContext.jsx';
import './App.css';
import DashBoard from './components/Dashboardcomponents/DashBoard.jsx';
import SignUp from './components/SignUp/SignUpComonents/SignUp.jsx';


function App() {

  
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/dashboard' element={<DashBoard />}/>
      </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
