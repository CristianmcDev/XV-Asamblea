import { Ascolar } from "../Components/Ascolar"
import puente from "../assets/PuenteTituloG.png";
import { NavLink } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
        <img src={puente} alt="Puente Romano" className='img-fluid animate__animated animate__fadeIn animate__slow' width={10000}/>

      <hr />
      <div className="backgroundPages">
        <div className="cardsPrinci">
       <div className="alert alert-info inscribete" role="alert">
       <NavLink
                        className="nav-item nav-link inscribete"
                        to="/inscripcion"
                    > INSCRIBETE YA¡¡</NavLink>
      </div>
      <Ascolar/>

      </div>
      </div>

    </>
  )
}
