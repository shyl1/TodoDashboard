import Login from './components/loginComponents/Login.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import { AuthProvider } from './components/AuthenticationContext.jsx';
import './App.css';
import DashBoard from './components/Dashboardcomponents/DashBoard.jsx';



function App() {

  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path='/dashboard' element={<DashBoard />}/>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
