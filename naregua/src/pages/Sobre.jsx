const Sobre = () => {

    return (
        <div className= 'container-home'>

    <p>NaRégua BARBEARIA É MAIS QUE UMA BARBEARIA, <br/>BUSCAMOS OFERECER A VOCÊ UMA EXPERIÊNCIA<br/>DE CUIDADO E ATENÇÃO AOS DETALHES. 
    <br/>AGENDE JÁ SEU HORÁRIO E <br/> VENHA FICAR NaRégua!</p>
        <button onClick={() => dispatch({ type: 'AGENDAMENTO_STAGE' })}>Agende seu Horário</button>
  </div>
    )
}
    
export default Sobre