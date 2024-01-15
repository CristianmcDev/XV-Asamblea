import { Ascolar } from "../Components/Ascolar"
import puente from "../assets/PuenteTituloG.png";

export const HomePage = () => {
  return (
    <>
        <img src={puente} alt="Puente Romano" className='img-fluid' width={10000}/>

      <hr />
      <div className="backgroundPages">
        <div className="cardsPrinci">
      {/* <div className="alert alert-info inscribete" role="alert">
        <a href="/inscripcion" className="alert-link">¡¡INSCRIBETE YA!!</a>
      </div> */}
      <Ascolar/>

      </div>
      </div>

    </>
  )
}
