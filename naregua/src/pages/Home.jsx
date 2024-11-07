import { useContext } from 'react';
import { CtContext } from '../context/Ct';
import logoImage from './img/NareguaLogo.svg';
import Sobre from './Sobre';
import Serviços from './Serviços';
import Equipe from './Equipe';
import Contato from './Contato';
import "./Home.css";

const Home = () => {
    const [CtState, dispatch] = useContext(CtContext);

return (
<div className='container'>
  <div className='navbar'>
    <img src={logoImage} alt="" className="logo" />
      <ul>
        <li>Sobre</li>
        <li>Serviços</li>
        <li>Equipe</li>
        <li>Contato</li>       
      </ul>        
        <div className="buttonsLC">
            <button onClick={() => dispatch({ type: 'LOGIN_STAGE' })}>Login</button>
            <button onClick={() => dispatch({ type: 'CADASTRO_STAGE' })}>Cadastro</button>
        </div>      
  </div>

            <button onClick={() => dispatch({ type: 'AGENDAMENTO_STAGE' })}>Agende seu Horário</button> 
  <div>
  <Sobre />
  <Serviços />
  <Equipe />
  <Contato />
  </div>
</div>
  
)
}

export default Home