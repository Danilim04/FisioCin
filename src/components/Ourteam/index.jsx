import './style/Ourteam.css'
import { FaAngleRight } from 'react-icons/fa'
import { FaAngleLeft } from 'react-icons/fa'
import dani from '../../assets/image/Dani.png'
import carlos from '../../assets/image/Carlos.png'
import { useState } from 'react'

const Ourteam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const conteudo = [
    {
      titulo: 'Cinesioterapia',
      texto:
        'Sou Fisioterapeuta, com capacitação em atendimento ortopédico e neurológico. Realizo o acompanhamento de pacientes com disfunções ortopédicas crônicas e traumatológicas. Utilizo técnicas manuais e cinesioterapia aplicada para ganho de funções e reabilitação. Ademais realizo reabilitação neurológicas em adaptação de atividades de vida diária em fase já avançada de tratamento.',
      imagem: dani,
    },
    {
      titulo: 'Ortopedia',
      texto: 'Sou o Carlos, um ortopedista experiente. Minha especialização está no tratamento de problemas ortopédicos, sejam eles crônicos ou traumáticos. Utilizo técnicas avançadas para reabilitação e melhoria da qualidade de vida dos meus pacientes. Minha missão é proporcionar cuidados ortopédicos de excelência.          ',
      imagem: carlos,
    },
  ];
  const avancar = () => {
    if (currentIndex < conteudo.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const retroceder = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <>
      <section className="ourteam">
        <div className="containerOurteam">
          <h1>Nossa Equipe</h1>
          <div className="linha"></div>
        </div>
      </section>
      <section className="faixa">
        <div className="containerFaixa">
          <div onClick={avancar} className="setaDireta"><FaAngleRight /></div>
          <div onClick={retroceder} className="setaEsquerda"><FaAngleLeft /></div>
          <div className="containerText">
            <div className="title">
              <h1>{conteudo[currentIndex].titulo}</h1>
              <div className="linha2"></div>
            </div>
            <div className="text">
              <p>
                {conteudo[currentIndex].texto}
              </p>
            </div>
            <a href="https://wa.me/5531975455753?text=Ol%C3%A1%21+Quero+saber+os+hor%C3%A1rios+dispon%C3%ADveis+para+agendar+uma+consulta+com+a+Daniela+na+especialidade+de+Fisioterapia+com+foco+em+Cinesioterapia%3F+%F0%9F%98%8A"> <button > Agende seu horário </button> </a>
          </div>
          <div className="containerimg">
            <img src={conteudo[currentIndex].imagem} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Ourteam