import './campo-entrada.estilos.css'

export function CampoDeEntrada(props) {
  return <input className='campo-entrada-form' {
    ...props
  } />
}