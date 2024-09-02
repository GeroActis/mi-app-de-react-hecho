import FichasGrid from "../components/FichasGrid/FichasGrid"
import CategoriasGrid from "../components/CategosiasGrid/CategoriasGrid"
import CardGrid from "../components/CardGrid/CardGrid"
import personajes from "../data/personajes/personajes"

const Home = () => {

    return (
        <>
            <h1>Mi App en react</h1> 
            <main>
                <FichasGrid />
                <CategoriasGrid />
                <CardGrid personajes= {personajes} />
            </main>
        </>
    )
}

export default Home;