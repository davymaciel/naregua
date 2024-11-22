import { useContext, useEffect } from 'react'
import { CtContext } from './context/Ct'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Agendamento from './pages/Agendamento'
import {BrowserRouter,Route, Routes} from 'react-router-dom'

const App = () => {
  const [CtState, dispatch] = useContext(CtContext);

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='Segundo'element={<Login/>}/>
      <Route path='Terceiro'element={<Cadastro/>}/>
      <Route path='Quarto'element={<Agendamento/>}/>
      <Route path= '*' element={<h1>Not Found</h1>}/>
      
       </Routes>
      </BrowserRouter>
  );
};

export default App