import "./About.css"
const AboutUs = () => {
    return ( <section className="container-about">
    <div className="about-image">
        <img src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    </div>
    <div className="content-about">
    <div>
    <h2>¿Quienes Somos?</h2>
    <p>En Ecofuel, creemos en un futuro donde la innovación y la sostenibilidad se unen para transformar la forma en que obtenemos nuestra energía. Somos una empresa apasionada y comprometida con la creación de soluciones ecológicas que no solo generan energía, sino que también preservan nuestro precioso entorno para las generaciones futuras.</p>
    <p>Fundada con la visión audaz de combatir la contaminación y reducir la dependencia de los combustibles fósiles, Ecofuel ha emergido como un líder en la industria de la energía sostenible. Nuestro enfoque se centra en la conversión de desechos orgánicos y materiales reciclables en un combustible limpio y renovable, impulsando así un cambio significativo en la forma en que el mundo percibe y utiliza la energía.</p>

    </div>
    </div>
    </section> );
}
 
export default AboutUs;