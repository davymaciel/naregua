import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import b1 from './img/b1.jfif'
import b2 from './img/b2.jfif'
import b3 from './img/b3.jfif'
import b4 from './img/b4.jfif'

// equipens e nomes associados
const equipeData = [
    { img: b1, nome: 'Lucas' },
    { img: b2, nome: 'Matheus' },
    { img: b3, nome: 'Rafael' },
    { img: b4, nome: 'João' },
];

const Equipe = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])


    return (
        <div className='Equipe'>


            <div ref={carousel} className='carousel' >
                <h1>Nossa Equipe</h1>

                <div
                    className='inner'
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}>

                    {equipeData.map((item, index) => (
                        <div className='itemEQ' key={index}>
                            <img src={item.img} alt={item.nome} />
                            <p>{item.nome}</p>
                        </div>
                    ))}

                </div>
                
            </div>

        </div>
    );
}

export default Equipe