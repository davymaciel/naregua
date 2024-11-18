// Home.js
import { useContext } from 'react';
import { CtContext } from '../context/Ct';
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
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#equipe">Equipe</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
        <div className="buttonsLC">
          <button onClick={() => dispatch({ type: 'LOGIN_STAGE' })}>Login</button>
          <button onClick={() => dispatch({ type: 'CADASTRO_STAGE' })}>Cadastro</button>
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