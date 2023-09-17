import React from 'react'
import './style/Home.css'
import { FaWhatsapp } from 'react-icons/fa'
import imageHome from '../../assets/image/home.png'
const Home = () => {
  return (
    <>
      <section className='hero' >
        <div className="container">
          <h2>Seu Movimento <br /> <strong>Nossa Prioridade</strong></h2>
          <p>Descubra o poder da <br />
            fisioterapia em um ambiente <br />
            acolhedor e autêntico </p>
          <a href="https://wa.me/5531975455753?text=Ol%C3%A1%21+Quero+saber+os+hor%C3%A1rios+dispon%C3%ADveis+para+agendar+uma+consulta%3F+%F0%9F%98%8A"> <button> <FaWhatsapp />  Marque sua Consulta  </button> </a>
        </div>
      </section>
    </>
  )
}

export default Home