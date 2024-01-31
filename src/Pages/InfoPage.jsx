import { Hoteles } from "../Components"
import { Comidas } from "../Components/Comidas"
import { Programa } from "../Components/Programa"
import { Visita } from "../Components/VIsita"

export const InfoPage = () => {
  return (
    <>
    <div className="Regis_divTitle">
        <h1 className="Regis_title">XV ASAMBLEA INTERNACIONAL DE LARINGECTOMIZADOS</h1>
        <h2 className="Regis_subtitle">INFORMACIÓN</h2>
      </div>
      <hr />
      <div className="backgroundPages">
        <div className="cardsPrinci">
          {/* <Programa/> */}
          <Programa/>

          <Hoteles/>

          <Comidas/>

          <Visita/>
        </div>
      </div>
    </>
  )
}
