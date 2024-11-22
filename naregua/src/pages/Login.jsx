import { useState, useContext, useEffect } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { CtContext } from '../context/Ct';
import { useNavigate } from 'react-router-dom';
import logoImage from './img/Naregualogo1.png';
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [CtState, dispatch] = useContext(CtContext);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([]));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users'));

    const user = users.find((u) => u.login === login && u.senha === password);
    if (user) {
      console.log("Login bem-sucedido:", user);
      setError("");
      navigate('/'); // Redireciona para a página de agendamento após login
    } else {
      setError("Login ou senha inválida");
    }
  };

  return (
    <div className="containerL">
      <form onSubmit={handleSubmit}>
        <img src={logoImage} alt="Logo NaRégua" className="logoL" />
        <div className="input-field">
          <input
            type="text"
            placeholder="Email"
            required
            value={login}
            onChange={(e) => setLogin(e.target.value)}
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
        {error && <p style={{ color: '#ff0000', textAlign: 'center', marginTop: '10px' }}>{error}</p>}
        <button type="submit" className="buttonL">Login</button>
        <div className="signup-link">
          <p className="pL">
            Não tem uma conta? <a onClick={() => navigate('/Terceiro')} href="#">Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;