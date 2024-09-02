const PersonajeSingle = ({personaje}) => {
    const {name, img, description} = personaje
    retunr (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <img src={`/img/character/${img}`}/>
        </div>
    )
}

export default PersonajeSingle