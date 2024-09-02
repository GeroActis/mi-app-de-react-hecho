import "./Card.css"
import { Link } from "react-router-dom"

const Card = ({personaje}) => {
    const {name, img, description, id} = personaje
    return(
        <div className="character-card">
            <img src={`/img/${img}`} alt=""/>
            <h4>{name}</h4>
            <p>{description}</p>
            <Link to={`/personaje/id/${id}`}>Ver personaje</Link>
        </div>
    )
}

export default Card