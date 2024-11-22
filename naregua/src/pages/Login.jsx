import { useState, useContext, useEffect} from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { CtContext } from '../context/Ct';
import { User, Lock, UserPlus } from 'lucide-react'
import logoImage from './img/Naregualogo1.png';
import "./Login.css";

const Login = ({ onLogin }) => {
  const [CtState, dispatch] = useContext(CtContext);
  const [isLogin, setIsLogin] = useState(true)
  const [username, setUsername] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  useEffect(() => {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([]))
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users'))

     if (isLogin) {
      const user = users.find((u) => u.login === login && u.password === password)
      if (user) {
        onLogin(user)
      } else {
        setError('Login ou senha inválida')
      }
    } else {
      if (users.some((u) => u.login === login)) {
        setError('Login já existe')
      } else {
        const newUser = { username, login, password }
        localStorage.setItem('users', JSON.stringify([...users, newUser]))
        setIsLogin(true)
        setError('Cadastro realizado com sucesso. Por favor, faça login.')
      }
    }
  }


  return (
    <div className="containerL">
              <h2 className="text-2xl font-bold mb-6">
          {isLogin ? 'Login' : 'Cadastro'}
        </h2>
      <form onSubmit={handleSubmit}>
      
      <img src={logoImage} alt="Logo NaRégua" className="logoL"></img>
      {!isLogin && (
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
      )}

      <div className="relative">
        <input
        type="text"
        id="login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        required
        />
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