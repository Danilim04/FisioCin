import React from 'react'
import Title from '../Titles/Title'
import OurspaceImage from '../../assets/image/ourSpaceImages/ourspaceImage.png'
import OurspaceImage1 from '../../assets/image/ourSpaceImages/ourspaceImage1.png'
import OurspaceImage2 from '../../assets/image/ourSpaceImages/ourspaceImage2.png'
import Imagens from './Imagens'
import './style/Ourspace.css'

const Ourspace = () => {
  return (
    <>
      <Title
        title="Nosso espaço"
      />
      <section className='ourspace' >
        <div className="containerImagens">
          <div className="containerImagemCima">
            <Imagens imagem={OurspaceImage2} />
            <Imagens imagem={OurspaceImage1} />
          </div>
          <div className="containerImagemBaixo">
            <Imagens imagem={OurspaceImage} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Ourspace