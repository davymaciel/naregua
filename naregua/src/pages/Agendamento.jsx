import React, { useState } from 'react';
import './Agendamento.css';

const Agendamento = () => {
    const [formData, setFormData] = useState({
        dia: '',
        horario: '',
        servicos: {
            'Degradê': false,
            'Corte Social': false,
            'Barba': false
        },
        barbeiro: 'Lucas',
    });

    const handleChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            servicos: {
                ...prevState.servicos,
                [name]: checked,
            }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Filtra os serviços selecionados
        const selectedServices = Object.keys(formData.servicos).filter(service => formData.servicos[service]);
        console.log('Agendamento Realizado:', { ...formData, servicos: selectedServices });
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
                onChange={(e) => setFormData({ ...formData, dia: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                required
                className="agendamento-input"
            />
            <br />

            <label>Escolha os serviços:</label><br/>
            <div className="agendamento-checkboxes">
                <label>
                    <input
                        type="checkbox"
                        name="Degradê"
                        checked={formData.servicos['Degradê']}
                        onChange={handleChange}
                    />
                    Degradê - R$30,00
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="Corte Social"
                        checked={formData.servicos['Corte Social']}
                        onChange={handleChange}
                    />
                    Corte Social - R$30,00
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="Barba"
                        checked={formData.servicos['Barba']}
                        onChange={handleChange}
                    />
                    Barba - R$30,00
                </label>
            </div>
            <br />

            <label htmlFor="barbeiro">Escolha o barbeiro de preferência:</label>
            <select
                id="barbeiro"
                name="barbeiro"
                value={formData.barbeiro}
                onChange={(e) => setFormData({ ...formData, barbeiro: e.target.value })}
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
