import Login from './components/Login/loginComponents/Login.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AuthProvider } from './components/AuthenticationContext.jsx';
import './App.css';
import DashBoard from './components/Dashboardcomponents/DashBoard.jsx';
//import SignUp from './components/SignUp/SignUpComonents/SignUp.jsx';
import { ProtectedRoutes } from './utils/ProtectedRoutes.jsx';


function App() {

  
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        {/* <Route path='/signup' element={<SignUp />}/> */}
        <Route element={<ProtectedRoutes/>}>
          <Route path='/dashboard' element={<DashBoard/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </AuthProvider>
      
    </>
  )
}

export default App
