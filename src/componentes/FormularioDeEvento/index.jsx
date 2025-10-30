import { Botao } from "../Botao"
import { CampoDeEntrada } from "../CampoDeEntrada"
import { CampoDeFormulario } from "../CampoDeFormulario"
import { Label } from "../Label"
import { TituloFormulario } from "../TituloFormulario"
import './formulario-de-eventos.estilos.css'

export function FormularioDeEvento() {

  return (
    <form className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nome">
            Qual o nome do evento?
          </Label>
          <CampoDeEntrada
            type="text"
            id="nome"
            placeholder="Summer dev hits"
            name="nomeEvento"
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do Evento
          </Label>
          <CampoDeEntrada
            type="text"
            id="dataEvento"
            name="dataEvento"
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="temaEvento">
            Tema do evento
          </Label>
          <ListaSuspensa />
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>
          Criar Evento
        </Botao>
      </div>

    </form>
  )
}