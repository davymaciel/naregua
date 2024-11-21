import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import logoImage from './img/Naregualogo1.png';
import "./Cadastro.css";

const Cadastro = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.password !== inputs.confirmPassword) {
      alert("Erro: As senhas não coincidem!");
    } else {
      alert("Cadastro realizado com sucesso!");
      console.log(inputs);
    }
  };

  return (
    <div className="container-cadastro">
        <img src={logoImage} alt="Logo NaRégua" className="logoC"></img>
      
      <form onSubmit={handleSubmit}>
      <div className="name" >
        <input type="text" 
        placeholder="Vulgo" 
        onChange={handleChange} 
        required  
        />
        <FaUser className="icon" />
      </div>
  
      <div className="email" >
        <input type="email" 
        placeholder="E-mail" 
        onChange={handleChange} 
        required />
        <FaUser className="icon" />
      </div>

      <div className="senha">
        <input type="password"  
        placeholder="Senha" 
        onChange={handleChange} 
        required />
        <FaLock className="icon" />
      </div>

      <div className="confirmaSenha">
        <input type="password" 
         placeholder="Confirme sua senha" 
         onChange={handleChange} 
         required />
        <FaLock className="icon" />
      </div>

        <button type="submit" className="buttonC">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;