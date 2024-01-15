import { Mapas } from "../Components/Mapas"

export const MapPage = () => {
  return (
    <>

      <div className="Regis_divTitle">
        <h1 className="Regis_title">XV ASAMBLEA INTERNACIONAL DE LARINGECTOMIZADOS</h1>
        <h2 className="Regis_subtitle">MAPA</h2>
      </div>
      <hr />
      <div className="backgroundPages">
        <div className="cardsPrinci">
          <Mapas/>
        </div>
      </div>
    </>
  )
}
