import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Agendamento.css';
import logoImage from './img/Naregualogo1.png';

const Agendamento = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        dia: '',
        horario: '',
        servicos: {
            'Degradê': false,
            'Corte Social': false,
            'Barba': false,
            'Sobrancelha': false
        },
        barbeiro: '',
    });

    const [total, setTotal] = useState(0);

    const precos = {
        'Degradê': 30,
        'Corte Social': 20,
        'Barba': 20,
        'Sobrancelha': 10
    };

    const generateHorarios = () => {
        const horarios = [];
        let start = 8 * 60;
        const end = 20 * 60;

        while (start < end) {
            const horas = Math.floor(start / 60).toString().padStart(2, '0');
            const minutos = (start % 60).toString().padStart(2, '0');
            horarios.push(`${horas}:${minutos}`);
            start += 30;
        }
        return horarios;
    };

    // Função para verificar se o horário está reservado
    const isHorarioReservado = (horario) => {
        const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
        return agendamentos.some((agendamento) => agendamento.dia === formData.dia && agendamento.horario === horario);
    };

    const handleChangeServico = (e) => {
        const { name, checked } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            servicos: {
                ...prevState.servicos,
                [name]: checked,
            }
        }));

        setTotal((prevTotal) => checked ? prevTotal + precos[name] : prevTotal - precos[name]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.dia || !formData.horario) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        if (!formData.barbeiro) {
            alert('Por favor, selecione um barbeiro.');
            return;
        }

        const selectedServices = Object.keys(formData.servicos).filter(service => formData.servicos[service]);

        // Verifica se o horário já está reservado
        if (isHorarioReservado(formData.horario)) {
            alert('Este horário já está reservado. Por favor, escolha outro.');
            return;
        }

        // Salvar o agendamento no localStorage
        const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
        agendamentos.push({ ...formData, servicos: selectedServices, total });
        localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

        console.log('Agendamento Realizado:', { ...formData, servicos: selectedServices });

        alert('Agendamento realizado com sucesso!');
        navigate('/');
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
                min={new Date().toISOString().split('T')[0]}
            />
            <br />

            <label htmlFor="horario">Escolha o horário:</label>
            <select
                id="horario"
                name="horario"
                value={formData.horario}
                onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                required
                className="agendamento-select"
            >
                <option value="" disabled>Selecione um horário</option>
                {generateHorarios().map((horario) => (
                    <option key={horario} value={horario} disabled={isHorarioReservado(horario)}>
                        {horario} {isHorarioReservado(horario) && '(Reservado)'}
                    </option>
                ))}
            </select>
            <br />

            <label>Escolha os serviços:</label><br />
            <div className="agendamento-checkboxes">
                {Object.keys(precos).map((servico) => (
                    <label key={servico}>
                        <input
                            type="checkbox"
                            name={servico}
                            checked={formData.servicos[servico]}
                            onChange={handleChangeServico}
                        />
                        {`${servico} - R$${precos[servico]},00`}
                    </label>
                ))}
            </div>
            <br />

            <label htmlFor="barbeiro">Escolha o barbeiro de preferência:</label>
            <select
                id="barbeiro"
                name="barbeiro"
                value={formData.barbeiro}
                onChange={(e) => setFormData({ ...formData, barbeiro: e.target.value })}
                className="agendamento-select"
                required
            >
                <option value="" disabled>Selecione aqui</option>
                <option value="Sem preferência">Sem preferência</option>
                <option value="Lucas">Lucas</option>
                <option value="Matheus">Matheus</option>
                <option value="Rafael">Rafael</option>
                <option value="João">João</option>
            </select>
            <br />

            <p className='pA'><strong>Total:</strong> R${total.toFixed(2).replace('.', ',')}</p>

            <button type="submit" className="agendamento-button">Confirmar Agendamento</button>
        </form>
    );
};

export default Agendamento;
