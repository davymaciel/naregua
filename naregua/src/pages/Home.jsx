import { useContext } from 'react';
import { CtContext } from '../context/Ct';
import logoImage from './img/NareguaLogo.svg';
import "./Home.css";

const Home = () => {
    const [CtState, dispatch] = useContext(CtContext);

return (
<div className='container'>
  <div className='navbar'>
    <img src={logoImage} alt="" className="logo" />
      <ul>
        <li>Teste1</li>
        <li>Teste2</li>
        <li>Teste3</li>
        <li>Teste4</li>       
      </ul>        
        <div className="buttonsLC">
            <button onClick={() => dispatch({ type: 'LOGIN_STAGE' })}>Login</button>
            <button onClick={() => dispatch({ type: 'CADASTRO_STAGE' })}>Cadastro</button>
        </div>      
  </div>
</div>
  
)
}

export default Home