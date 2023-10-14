import './style/Title.css'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Title = ({title}) => {
    Aos.init();
    
    return (
        <>
            <section className="title"
                
                data-aos="fade-up"
                data-aos-offset="2000"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <div 
                className="containerTitle">
                    <h1>{title}</h1>
                    <div className="linha"></div>
                </div>
            </section>
        </>
    )
}

export default Title