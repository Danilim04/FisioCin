import React from 'react'
import './style/Imagens.css'

const Imagens = ({ imagem }) => {

    return (
        <>
            <div data-aos="flip-left"
                 data-aos-offset="0"
                 data-aos-delay="80"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                 data-aos-once="false"
                 data-aos-anchor-placement="top-center"

                style={{
                    backgroundImage: `url(${imagem})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} className="Image"></div>
        </>
    )
}

export default Imagens