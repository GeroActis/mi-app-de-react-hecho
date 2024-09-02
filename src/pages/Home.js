import FichasGrid from "../components/FichasGrid/FichasGrid"
import CategoriasGrid from "../components/CategosiasGrid/CategoriasGrid"
import CardGrid from "../components/CardGrid/CardGrid"
import personajes from "../data/personajes/personajes"
import Contador from "../components/Contador/Contador"

const Home = () => {

    return (
        <>
            <h1>Mi App en react</h1> 
            <main>
                <FichasGrid />
                <CategoriasGrid />
                <CardGrid personajes= {personajes} />
                <Contador/>
            </main>
        </>
    )
}

export default Home;