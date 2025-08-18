import "./CampoTexto.css"

const CampoTexto = (props) => {

    const placeholderModified = `${props.placeholder}...`

    let valor =''

    const aoDigitado = (evento) => {
        valor=evento.target.value
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModified} />
        </div>
    )
}
// Pesquisar sobre arrow function e escopo lexico 
export default CampoTexto