import PersonajeSingle from "../components/PersonajeSongle"
import Personaje from "../data/personajes/personajes"

const Personaje = ({match}) => {
    const {id} = match.params

    const personaje = personaje.find((personaje)=> personaje.id === Number(id))

    return <PersonajeSingle personaje={personje} />
}

export default Personaje