import React from 'react'
import './Style/specialties.css'
import yoga from '../../assets/image/Yoga.png'
const Specialties = () => {
  return (
    <>
      <section className='specialtiesTitle'>
        <div className="containerTitle">
          <h1>Especialidades</h1>
          <div className="linha"></div>
        </div>
      </section>
      <section className="cards" > 
          <div className="containerCards">
            <div className="containerCard1">
              <div className="containerImgYoga">
                <img src={yoga} alt="" />
              </div>
            </div>
            <div className="containerCard2"></div>
            <div className="containerCard3"></div>
            <div className="containerCard4"></div>
          </div>
      </section>
    </>
  )
}

export default Specialties