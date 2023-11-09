/* eslint-disable react/prop-types */
import "./CardNews.css"
const CardNews = ({props}) => {
    return ( 
    <div className="card-new">
    <div className="image-new-container">
        <img src={props.image}/>
    </div>
    <div className="card-content-new">
        <h2>{props.title}</h2>
        <p>
            {props.description}
        </p>

    </div>
    </div> );
}
 
export default CardNews;