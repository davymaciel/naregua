import { useState, useEffect, useRef, useContext } from 'react'
import { CtContext } from '../context/Ct';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import img1 from './img/test.jpg'
import img2 from './img/test2.jpg'
import img3 from './img/test3.jpg'
import img4 from './img/test4.jpg'
import img5 from './img/test5.jpg'
import img6 from './img/test6.jpg'


const images = [img1, img2, img3, img4, img5, img6]

const Serviços = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0)
    const [CtState, dispatch] = useContext(CtContext);

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])


    return (
        <div className='Services'>
            

            <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
            <h1>Nossos Serviços</h1>
                <motion.div
                    className='inner'
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}>

                    {images.map(image => (
                        <motion.div className='item' key={image}>
                            <img src={image} alt="Texto" />
                        </motion.div>
                    ))}

                </motion.div>
                <button onClick={() => dispatch({ type: 'AGENDAMENTO_STAGE' })} className='buttonAG'><Link to={'Agendamento'}>Agende seu Horário</Link></button>
            </motion.div>
            
        </div>
    );
}

export default Serviços