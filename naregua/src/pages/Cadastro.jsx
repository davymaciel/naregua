import { useState } from "react";
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
      <h2>Formulário de Cadastro</h2>
      
      <form onSubmit={handleSubmit}>
        <label>Nome completo:</label>

        <input type="text" name="fullname" onChange={handleChange} required />
        <label>Data de nascimento:</label>

        <input type="date" name="birthdate" onChange={handleChange} required />
        <label>Email:</label>

        <input type="email" name="email" onChange={handleChange} required />
        <label>Senha:</label>

        <input type="password" name="password" onChange={handleChange} required />
        <label>Confirme sua senha:</label>

        <input type="password" name="confirmPassword" onChange={handleChange} required />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;