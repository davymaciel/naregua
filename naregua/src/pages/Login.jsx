import { useState, useContext} from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { CtContext } from '../context/Ct';
import logoImage from './img/Naregualogo1.png';
import "./Login.css";

const Login = () => {
  const [CtState, dispatch] = useContext(CtContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados de Login:", { username, password });
    window.location.href = "./Home.jsx";
};

  return (
    <div className="containerL">
      <form onSubmit={handleSubmit}>
      <img src={logoImage} alt="Logo NaRégua" className="logoL"></img>
        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <button type="submit" className="buttonL">Login</button>
        <div className="signup-link">
          <p className="pL">
            Não tem uma conta? <a onClick={() => dispatch({ type: 'CADASTRO_STAGE' })} href='#'>Registar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;