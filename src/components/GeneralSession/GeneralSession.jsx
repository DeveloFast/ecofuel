import { Element } from "react-scroll";
import AboutUs from "../AboutUs/AboutUs";
import News from "../News/News";
import Products from "../Products/Products";
import "./GeneralSession.css"



const GeneralSession = () => {
    return ( <div className="container-general">
        
       <Element name="Products">
        <Products/>
       </Element>
       <Element name="News">
        <News/>
        </Element>
        <Element name="About">
        <AboutUs/>
        </Element>
    </div> );
}
 
export default GeneralSession;