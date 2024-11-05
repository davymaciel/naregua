import { useContext } from 'react';
import { CtContext } from '../context/Ct';
import "./Home.css";

const Home = () => {
    const [CtState, dispatch] = useContext(CtContext);

return (
    <div>
        <h1>Home Page</h1>
        <button onClick={() => dispatch({ type: 'LOGIN_STAGE' })}>Login</button>
        <button onClick={() => dispatch({ type: 'CADASTRO_STAGE' })}>Cadastro</button>
    </div>
)
}

export default Home