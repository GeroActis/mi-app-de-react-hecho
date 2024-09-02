import Ficha from "../Ficha/Ficha"
import "./FichasGrid.css"

const FichasGrid = () => {
    return(
        <section className="top-data">
           <Ficha name="Products in database" dato={135} icon="fa-clipboard-list"/>
           <Ficha name="Amount in products" dato="$645.634" icon="fa-dollar-sign"/>
           <Ficha name="Users Quantity" dato={90} icon="fa-user fa-2x"/>
        </section>
    )
}

export default FichasGrid;