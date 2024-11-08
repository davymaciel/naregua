const Sobre = () => {

    return (
        
        <div className= 'container-home'>

    <p>NaRégua Barbearia é mais que uma barbearia,buscamos <br/>oferecer a você uma experiência de cuidado e atenção aos detalhes. 
        <br/>Nossa equipe é formada por profissionais dedicados a <br/>te deixar no estilo. Agende já seu horário e venha ficar NaRégua!</p>
        <button onClick={() => dispatch({ type: 'AGENDAMENTO_STAGE' })}>Agende seu Horário</button>
  </div>
  
    )
}

export default Sobre