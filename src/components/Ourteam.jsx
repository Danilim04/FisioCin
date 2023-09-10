import './Ourteam.css'

const Ourteam = () => {
    return (
        <>
            <section className="ourteam">
                <div className="containerOurteam">
                    <h1>Nossa Equipe</h1>
                    <div className="linha"></div>
                </div>
                <section className="faixa">
                    <div className="containertext">
                        <div className="title">
                            <h1>Cinesioterapia</h1>
                            <div className="linha2"></div>
                        </div>
                        <div className="text">
                            <p>
                                Sou Fisioterapeuta, com capacitação em atendimento ortopédico e neurológico.
                                <br />
                                Realizo o acompanhamento de pacientes com disfunções ortopédicas crônicas e traumatológicas. Utilizo técnicas manuais e cinesioterapia aplicada para ganho de funções e reabilitação.
                                Ademais realizo reabilitação neurológicas em adaptação de atividades de vida diária em fase já avançada de tratamento.
                            </p>
                            <button  > Agende seu horário </button>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Ourteam