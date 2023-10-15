import React from 'react'
import './Style/specialties.css'
import yoga from '../../assets/image/icons/Yoga.png'
import ortopedia from '../../assets/image/icons/Ortopedia.png'
import fonologia from '../../assets/image/icons/Fonologia.png'
import esportiva from '../../assets/image/icons/Esportiva.png'
import Cards from './Cards'
import Title from '../Titles/Title'
const Specialties = () => {
  return (
    <>
      <Title 
      title="Especialidades"
      />
      <section className="cards" >
        <div data-aos="fade-up" className="containerCards">
          <Cards
            title="Cinesioterapia"
            ponto1="Avaliação detalhada: O tratamento de cinesioterapia começa com uma análise completa da condição física e das necessidades do paciente, permitindo ao fisioterapeuta desenvolver um plano personalizado."
            ponto2="Exercícios terapêuticos: O paciente realiza uma série de exercícios adaptados às suas limitações e objetivos, visando melhorar a força, flexibilidade e mobilidade."
            ponto3="Acompanhamento constante: O fisioterapeuta monitora o progresso do paciente, fazendo ajustes no tratamento conforme necessário para garantir resultados eficazes."
            ponto4="Educação e autocuidado: Além dos exercícios, o paciente é orientado sobre práticas de autocuidado e prevenção para promover uma reabilitação bem-sucedida e evitar futuras complicações."
            icon={yoga}
          />
          <Cards
            title="Fonologia"
            ponto1="Avaliação detalhada: O tratamento de cinesioterapia começa com uma análise completa da condição física e das necessidades do paciente, permitindo ao fisioterapeuta desenvolver um plano personalizado."
            ponto2="Exercícios terapêuticos: O paciente realiza uma série de exercícios adaptados às suas limitações e objetivos, visando melhorar a força, flexibilidade e mobilidade."
            ponto3="Acompanhamento constante: O fisioterapeuta monitora o progresso do paciente, fazendo ajustes no tratamento conforme necessário para garantir resultados eficazes."
            ponto4="Educação e autocuidado: Além dos exercícios, o paciente é orientado sobre práticas de autocuidado e prevenção para promover uma reabilitação bem-sucedida e evitar futuras complicações."
            icon={fonologia}
          />
          <Cards
            title="Esportiva"
            ponto1="Avaliação detalhada: O tratamento de cinesioterapia começa com uma análise completa da condição física e das necessidades do paciente, permitindo ao fisioterapeuta desenvolver um plano personalizado."
            ponto2="Exercícios terapêuticos: O paciente realiza uma série de exercícios adaptados às suas limitações e objetivos, visando melhorar a força, flexibilidade e mobilidade."
            ponto3="Acompanhamento constante: O fisioterapeuta monitora o progresso do paciente, fazendo ajustes no tratamento conforme necessário para garantir resultados eficazes."
            ponto4="Educação e autocuidado: Além dos exercícios, o paciente é orientado sobre práticas de autocuidado e prevenção para promover uma reabilitação bem-sucedida e evitar futuras complicações."
            icon={esportiva}
          />
          <Cards
            title="Ortopedia"
            ponto1="Avaliação detalhada: O tratamento de cinesioterapia começa com uma análise completa da condição física e das necessidades do paciente, permitindo ao fisioterapeuta desenvolver um plano personalizado."
            ponto2="Exercícios terapêuticos: O paciente realiza uma série de exercícios adaptados às suas limitações e objetivos, visando melhorar a força, flexibilidade e mobilidade."
            ponto3="Acompanhamento constante: O fisioterapeuta monitora o progresso do paciente, fazendo ajustes no tratamento conforme necessário para garantir resultados eficazes."
            ponto4="Educação e autocuidado: Além dos exercícios, o paciente é orientado sobre práticas de autocuidado e prevenção para promover uma reabilitação bem-sucedida e evitar futuras complicações."
            icon={ortopedia}
          />
          

        </div>
      </section>
    </>
  )
}

export default Specialties