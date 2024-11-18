import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import b1 from './img/b1.jfif'
import b2 from './img/b2.jfif'
import b3 from './img/b3.jfif'
import b4 from './img/b4.jfif'

const images = [b1, b2, b3, b4]

const Equipe = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])


    return (
        <div className='Equipe'>
            

            <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
            <h1>Nossa Equipe</h1>
                <motion.div
                    className='inner'
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}>

                    {images.map(image => (
                        <motion.div className='itemEQ' key={image}>
                            <img src={image} alt="Texto" />
                        </motion.div>
                    ))}

                </motion.div>
            </motion.div>
            
        </div>
    );
}

export default Equipe