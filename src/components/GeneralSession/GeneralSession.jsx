import { Element } from "react-scroll";
import AboutUs from "../AboutUs/AboutUs";
import News from "../News/News";
import Products from "../Products/Products";
import NavBar from "../NavBar/NavBar";



const GeneralSession = () => {
    return ( <>
        <NavBar/>
       <Element name="Products">
        <Products/>
       </Element>
       <Element name="News">
        <News/>
        </Element>
        <Element name="About">
        <AboutUs/>
        </Element>
    </> );
}
 
export default GeneralSession;