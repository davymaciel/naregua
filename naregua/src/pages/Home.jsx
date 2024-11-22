// Home.js
import { useContext } from 'react';
import { CtContext } from '../context/Ct';
import { Link } from 'react-router-dom';
import logoImage from './img/Naregualogo1.png';
import Sobre from './Sobre';
import Serviços from './Serviços';
import Equipe from './Equipe';
import Contato from './Contato';
import Footer from './Footer';
import "./Home.css";

const Home = () => {
  const [CtState, dispatch] = useContext(CtContext);

  return (
  <div>
    <div className='container'>
      <div className='navbar'>
        <img src={logoImage} alt="Logo NaRégua" className="logo" />
        <ul>
          <li><a className='aN1' href="#sobre">Sobre</a></li>
          <li><a className='aN2' href="#servicos">Serviços</a></li>
          <li><a className='aN3' href="#equipe">Equipe</a></li>
          <li><a className='aN4' href="#contato">Informações</a></li>
        </ul>
        <div className="buttonsLC">
          <button onClick={() => dispatch({ type: 'LOGIN_STAGE' })}><Link to={'Login'}>Login</Link></button>
          <button onClick={() => dispatch({ type: 'CADASTRO_STAGE' })}><Link to={'Cadastro'}>Cadastro</Link></button>
        </div>
      </div>

      <div className='content'>
        <section id="sobre">
          <Sobre />
        </section>
        <section id="servicos">
          <Serviços />
        </section>
        <section id="equipe">
          <Equipe />
        </section>
        <section id="contato">
          <Contato />
        </section>
          <Footer />
      </div>
    </div>
  </div> 
  );
}

export default Home;