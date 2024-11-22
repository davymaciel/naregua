import React from 'react'
import { FaCalendarCheck, FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Final.css';

export const Final = () => {
  return (
    <div className='containerF'>
        <FaCalendarCheck className='calendario'/>
        <h2 className='hF'>Agendamento concluído <FaCheck className='check'/></h2> 
        <button className='buttonF'><Link to={'/'}>Início</Link></button>
    </div>
  )
}

export default Final
