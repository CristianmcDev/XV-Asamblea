import { Programa } from "../Components/Programa"

export const HomePage = () => {
  return (
    <>

      <div className="Regis_divTitle">
        <h1 className="Regis_title">XV ASAMBLEA INTERNACIONAL DE LARINGECTOMIZADOS</h1>
        <h2 className="Regis_subtitle">"LA ASAMBLEA DE LA ESPERANZA"</h2>
      </div>

      <h3 className="date"> <strong>CÓRDOBA, 
        25 y 26 DE ABRIL DEL 2024</strong></h3>
      <hr />

      <div className="alert alert-info inscribete" role="alert">
        <a href="/inscripcion" className="alert-link">¡¡INSCRIBETE YA!!</a>
      </div>

      <Programa/>
    </>
  )
}
