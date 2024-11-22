import { useState, useEffect } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import logoImage from './img/Naregualogo1.png';
import "./Cadastro.css";

const Cadastro = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([]));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }

    const users = JSON.parse(localStorage.getItem('users'));

    if (users.some((u) => u.login === login)) {
      setError("Login já existe");
    } else {
      const newUser = { nome, login, senha: password };
      localStorage.setItem('users', JSON.stringify([...users, newUser]));
      setError("Cadastro realizado com sucesso!");
      
      setTimeout(() => {
        navigate('/Segundo'); // Redireciona para a página de login após o cadastro
      }, 1500);
    }
  };

  const handleLogoClick = () => {
    navigate('/'); // Redireciona para a página inicial ao clicar no logo
  };

  return (
    <div className="container-cadastro">
      <img
        src={logoImage}
        alt="Logo NaRégua"
        className="logoC"
        onClick={handleLogoClick} // Adicionando o evento de clique no logo
      />
      <form onSubmit={handleSubmit}>
        <div className="name">
          <input 
            type="text"
            placeholder="Vulgo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>

        <div className="email">
          <input 
            type="text"
            placeholder="Email"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>

        <div className="senha">
          <input 
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>

        <div className="confirmaSenha">
          <input 
            type="password"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>

        {error && (
          <p style={{
            color: error.includes("sucesso") ? '#00ff00' : '#ff0000',
            textAlign: 'center',
            marginTop: '10px',
            fontSize: '14px'
          }}>
            {error}
          </p>
        )}

        <button type="submit" className="buttonC">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
