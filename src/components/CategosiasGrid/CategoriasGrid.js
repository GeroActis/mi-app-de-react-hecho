import Categoria from "../Categoria/Categoria"
import "./CategoriasGrid.css"

const CategoriasGrid = () => {
    return (
        <>
        <h2>Categories in database</h2>
        <section className="general-data">
            <Categoria />
            <Categoria />
            <Categoria />
            <Categoria />
            <Categoria />
            <Categoria />
        </section>
        </>
    )
}
export default CategoriasGrid