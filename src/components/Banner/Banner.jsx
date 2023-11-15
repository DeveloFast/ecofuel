import './Banner.css'
import banner from "../../assets/banner.jpeg"

const Banner = () => {
    return ( <>
    <div className="container-banner">
       <img src={banner}/>
    </div>
        
    </> );
}
 
export default Banner;