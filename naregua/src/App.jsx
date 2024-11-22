import { useContext, useEffect } from 'react'
import { CtContext } from './context/Ct'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Agendamento from './pages/Agendamento'
import Final from './pages/Final'
import {BrowserRouter,Route, Routes} from 'react-router-dom'

const App = () => {
  const [CtState, dispatch] = useContext(CtContext);

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='Login'element={<Login/>}/>
      <Route path='Cadastro'element={<Cadastro/>}/>
      <Route path='Agendamento'element={<Agendamento/>}/>
      <Route path='Final'element={<Final/>}/>
      <Route path= '*' element={<h1>Not Found</h1>}/>
      
       </Routes>
      </BrowserRouter>
  );
};

export default App