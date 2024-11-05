import { useContext } from 'react';
import { CtContext } from '../context/Ct';
import "./Home.css";

const Home = () => {
    const [CtState, dispatch] = useContext(CtContext);

return (
   
   <div className="home">
       
       <header className="header">
    
       <img src= "./src/img/logonaregua.png"   className="header-image" />
       
  
  <div className="auth-buttons">
                <button onClick={() => dispatch({ type: 'LOGIN_STAGE' })}>Login</button>
                <button onClick={() => dispatch({ type: 'CADASTRO_STAGE' })}>Cadastro</button>
            </div>   
       </header>
      
       
    </div>
)
}

export default Home