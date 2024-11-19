import React, { useState } from 'react';
import './Agendamento.css';

const Agendamento = () => {
    const [formData, setFormData] = useState({
        dia: '',
        horario: '',
        servico: 'Degradê', // Default: Degradê
        barbeiro: 'Lucas',  // Default: Lucas
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Agendamento Realizado:', formData);
        alert('Agendamento realizado com sucesso!');
    };

    return (
        <form className="agendamento-form" onSubmit={handleSubmit}>
            <h2 className="agendamento-title">Agendamento de Horário</h2>

            <label htmlFor="dia">Escolha o dia:</label>
            <input
                type="date"
                id="dia"
                name="dia"
                value={formData.dia}
                onChange={handleChange}
                required
                className="agendamento-input"
            />
            <br />

            <label htmlFor="horario">Escolha o horário:</label>
            <input
                type="time"
                id="horario"
                name="horario"
                value={formData.horario}
                onChange={handleChange}
                required
                className="agendamento-input"
            />
            <br />

            <label htmlFor="servico">Escolha o serviço:</label>
            <select
                id="servico"
                name="servico"
                value={formData.servico}
                onChange={handleChange}
                className="agendamento-select"
            >
                <option value="Degradê">Degradê - R$30,00</option>
                <option value="Corte Social">Corte Social - R$30,00</option>
                <option value="Barba">Barba - R$30,00</option>
            </select>
            <br />

            <label htmlFor="barbeiro">Escolha o barbeiro:</label>
            <select
                id="barbeiro"
                name="barbeiro"
                value={formData.barbeiro}
                onChange={handleChange}
                className="agendamento-select"
            >
                <option value="Lucas">Lucas</option>
                <option value="Matheus">Matheus</option>
                <option value="Rafael">Rafael</option>
            </select>
            <br />

            <button type="submit" className="agendamento-button">Confirmar Agendamento</button>
        </form>
    );
};

export default Agendamento;
