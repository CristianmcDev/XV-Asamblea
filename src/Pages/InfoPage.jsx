import { Hoteles, Comidas, Programa, Visita } from "../Components"


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
          <Programa/>

          <Hoteles/>

          <Comidas/>

          <Visita/>
        </div>
      </div>
    </>
  )
}
