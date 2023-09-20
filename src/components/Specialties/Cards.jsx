import './Style/cards.css'

const Cards = ({icon,ponto1,ponto2,ponto3,ponto4,title}) => {
  return (
    <>
        <div className="card">
            <img src={icon} alt="" />
            <h1>{title}</h1>
            <ul>
                <li>{ponto1}</li>
                <li>{ponto2}</li>
                <li>{ponto3}</li>
                <li>{ponto4}</li>
            </ul>
        </div>
    
    </>
  )
}

export default Cards