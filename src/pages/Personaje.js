import personajesData from "../data/personajes/personajes";

const Personaje = ({ match }) => {
    const { id } = match.params;

    const personaje = personajesData.find((personaje) => personaje.id === Number(id));

    if (!personaje) {
        return <p>Personaje no encontrado</p>;
    }

    return (
        <div>
            <h1>{personaje.nombre}</h1>
            <p>{personaje.descripcion}</p>
            <img src={personaje.imagen} alt={personaje.nombre} />
        </div>
    );
};

export default Personaje;
