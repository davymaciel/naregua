import { useContext, useEffect } from 'react'
import { CtContext } from './context/Ct'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Agendamento from './pages/Agendamento'

const App = () => {
  const [CtState, dispatch] = useContext(CtContext);

  return (
    <div>
      {CtState.Stage === 'First' && <Home/>}
      {CtState.Stage === 'Second' && <Login/>}
      {CtState.Stage === 'Third' && <Cadastro/>}
      {CtState.Stage === 'Fourth' && <Agendamento/>}
    </div>
  );
};

export default App;
