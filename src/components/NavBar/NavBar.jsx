import { Link } from "react-scroll";
import '../NavBar/NavBar.css'

const NavBar = () => {
    return (<>

        <div className="menu-verde">
            <nav className="navbar">
                <Link   activeClass="active" 
                className="nav-landing-text"
                        to="Products" 
                        spy={true} 
                        smooth={true} 
                        offset={-120} 
                        duration={500} >Productos
                </Link>
                <Link   activeClass="active"
                className="nav-landing-text" 
                        to="News" 
                        spy={true} 
                        smooth={true} 
                        offset={-130} 
                        duration={500} >Noticias
                </Link>
                <Link   activeClass="active" 
                className="nav-landing-text"
                        to="About" 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500} >Nosotros
                </Link>
            </nav>
        </div>
    </>);
}
 
export default NavBar;