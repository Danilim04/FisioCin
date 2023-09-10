import React from 'react'
import './Home.css'
import { FaWhatsapp } from 'react-icons/fa'

const Home = () => {
  return (
    <>
      <section className='hero' >
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