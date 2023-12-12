import { Hoteles } from "../Components"
import { Comidas } from "../Components/Comidas"

export const InfoPage = () => {
  return (
    <>
    <div className="Regis_divTitle">
        <h1 className="Regis_title">XV ASAMBLEA INTERNACIONAL DE LARINGECTOMIZADOS</h1>
        <h2 className="Regis_subtitle">INFORMACIÓN</h2>
      </div>
      <hr />

      <Hoteles/>

      <Comidas/>
    </>
  )
}
