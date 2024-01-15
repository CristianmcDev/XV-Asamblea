import center from "../assets/Cordoba-Center.jpg";
import uni from '../assets/facultad.jpg';
import cena from '../assets/MenuCena.png';


export const Comidas = () => {
  return (
    <>
    <div className="Regis_divForm">
      <h1 className="text-center">Comidas</h1>
      <hr />
        {/* HOTEL ALMUERZO*/}
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 imgContainer">
            <img src={uni} className="img-fluid m-2 rounded" alt="Hotel Selu"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="text-center text-decoration-underline">Almuerzo día 25</h2>
              <h2 className="card-title">Cafetería Facultad de Medicina</h2>
              <h5><strong>Menú</strong> (Se publicara una semana antes)</h5>
              <p>Se le entregará un ticket para entregar en barra y pedirlo gratuitamente.</p>
            </div>
            <iframe className=" maps mb-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1081.9004669835879!2d-4.796502043056768!3d37.866296285807564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d20b954f37ce1%3A0x64cc9a1054232faa!2sFacultad%20de%20Medicina%20y%20Enfermer%C3%ADa%20(Universidad%20de%20C%C3%B3rdoba)!5e0!3m2!1ses-419!2ses!4v1702378049223!5m2!1ses-419!2ses" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>


        {/* CENA DE GALA */}
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 imgContainer">
            <img src={center} className="img-fluid m-2 rounded" alt="Hotel Córdoba Center"/>
            <iframe className=" maps mb-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5450.490013400694!2d-4.783173834750099!3d37.8925935638737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6cdf65fa517245%3A0x999a213f6d4aeaee!2sHotel%20C%C3%B3rdoba%20Center!5e0!3m2!1ses-419!2ses!4v1702376705863!5m2!1ses-419!2ses" height="350" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>
            <div className="col-md-8">
              <div className="card-body pt-0">
                <h2 className="text-center text-decoration-underline">Cena de Gala día 25</h2>
                <h2 className="card-title">Hotel Córdoba Center</h2>
                <h5 className="mb-4"><strong>Menú</strong></h5>
              </div>
              <div className="menuCena">
                <img src={cena} alt="Menu Cena Gala" className="img-fluid menuCenaImg" />
                <h4 className="text-center">Precio: 42€/persona</h4>
              </div>

            </div>
          </div>
        </div>
      </div>
  </>
  )
}
