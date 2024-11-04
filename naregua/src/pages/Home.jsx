import { useContext } from 'react';
import { CtContext } from '../context/Ct';

const Home = () => {
    const [CtState, dispatch] = useContext(CtContext);

return (
    <div>
        <h1>Home Page</h1>
        <button onClick={() => dispatch({ type: 'LOGIN_STAGE' })}>Login</button>
    </div>
)
}

export default Home