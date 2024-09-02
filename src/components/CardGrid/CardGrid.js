import Card from "../Card/Card"
import "./CardGrid.css"

const CardGrid = ({personajes}) => {
    return(
    <div className="cards_grid_container"> 
        {personajes.map((personaje, i)=>(
            <Card key={i} personaje={personaje}/>
        ))}
    </div>
);
}

export default CardGrid 