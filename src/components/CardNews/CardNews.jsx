/* eslint-disable react/prop-types */
import "./CardNews.css"
const CardNews = ({props,odd}) => {
    return ( 
    <div  className={`card-new ${odd?" reverse":""}`}>
    <div className="image-new-container">
        <img src={props.image}/>
    </div>
    <div className="card-content-new">
        <p>{props.title}</p>
        <p>
            {props.description}
        </p>

    </div>
    </div> );
}
 
export default CardNews;