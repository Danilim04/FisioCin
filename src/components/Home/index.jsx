import React from 'react'
import './style/Home.css'
import { FaWhatsapp } from 'react-icons/fa'
import imageHome from '../../assets/image/home.png'
const Home = () => {
  return (
    <>
      
      <section style={{backgroundImage:`url(${imageHome}) `}}  className='hero' >
        <div className="container">
          <h2>Seu Movimento <br /> <strong>Nossa Prioridade</strong></h2>
          <p>Descubra o poder da <br />
            fisioterapia em um ambiente <br />
            acolhedor e autêntico </p>
          <button> <FaWhatsapp/>  Marque sua Consulta  </button>
        </div>
      </section>
    </>
  )
}

export default Home