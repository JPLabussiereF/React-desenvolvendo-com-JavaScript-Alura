import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModified = `${props.placeholder}...`

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input placeholder={placeholderModified} />
        </div>
    )
}
// Pesquisar sobre arrow function e escopo lexico 
export default CampoTexto