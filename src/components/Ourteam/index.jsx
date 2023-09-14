import './style/Ourteam.css'
import dani from '../../assets/image/Dani.png'
import faixa from '../../assets/image/Rectangle.png'
const Ourteam = () => {
    return (
        <>
            <section className="ourteam">
                <div className="containerOurteam">
                    <h1>Nossa Equipe</h1>
                    <div className="linha"></div>
                </div>
            </section>
            <section style={{ backgroundImage: `url(${faixa}) ` }} className="faixa">
                <div className="containerFaixa">
                    <div className="containerText">
                        <div className="title">
                            <h1>Cinesioterapia</h1>
                            <div className="linha2"></div>
                        </div>
                        <div className="text">
                            <p>
                                Sou Fisioterapeuta, com capacitação em atendimento ortopédico e neurológico.
                                <br /><br />
                                Realizo o acompanhamento de pacientes com disfunções ortopédicas crônicas e traumatológicas. Utilizo técnicas manuais e cinesioterapia aplicada para ganho de funções e reabilitação.
                                Ademais realizo reabilitação neurológicas em adaptação de atividades de vida diária em fase já avançada de tratamento.
                            </p>
                        </div>
                        <button  > Agende seu horário </button>
                    </div>
                    <div className="containerimg">
                    <img src={dani} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ourteam