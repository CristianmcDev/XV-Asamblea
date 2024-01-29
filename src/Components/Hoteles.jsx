import selu from "../assets/hotel-selu.jpg";
import star from "../assets/stars3.png";
import center from "../assets/Cordoba-Center.jpg";
import star4 from "../assets/stars4.png";

export const Hoteles = () => {
  return (
    <>
      <div className="Regis_divForm">
        <h1 className="text-center">Hoteles Concertados</h1>
        <hr />
          {/* HOTEL SELU */}
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4 imgContainer">
              <img src={selu} className="img-fluid m-2 rounded " alt="Hotel Selu"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">Hotel Selu <img src={star} alt="3Star" width={50}/>   <a href="https://www.hotelselu.com/" target="_blank" rel="noreferrer" style={{fontSize: 25}}>Página Web</a></h2>
                <h5><strong>Precios por noche:</strong></h5>
                <table className="table mb-0">
                  <tbody>
                    <tr>
                      <td>- Habitación doble</td>
                      <td className="text-end">90€</td>
                    </tr>
                    <tr>
                      <td>- Habitación doble + desayuno</td>
                      <td className="text-end">110€</td>
                    </tr>
                    <tr>
                      <td>- Habitación individual</td>
                      <td className="text-end">70€</td>
                    </tr>
                    <tr>
                      <td>- Habitación individual + desayuno</td>
                      <td className="text-end">80€</td>
                    </tr>
                  </tbody>
                </table>
                <h5><strong>Correo electrónico</strong>:  director@hotelselu.com</h5>
              </div>
              <iframe className=" maps " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2101.6955748829964!2d-4.784597943772909!3d37.88402623577674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6cdf6232d7f4e1%3A0xaed9373ddbb0ceb7!2sHotel%20Selu!5e0!3m2!1ses-419!2ses!4v1702374673859!5m2!1ses-419!2ses" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="alert alert-warning m-2 alertCss" role="alert">

            <h4 className=" alert-heading">Procedimiento para reservar: <strong>SOLO VIA EMAIL</strong> --  Fecha límite: <strong>15-03-2024</strong></h4>

            <p>
              Indicar en el mail: <br />

             <strong>1. - NOMBRE Y APELLIDOS DE LAS PERSONAS QUE SE ALOJAN.</strong> <br />

             <strong>2. - DÍA DE LLEGADA Y SALIDA DEL HOTEL, ASÍ COMO EL TIPO DE HABITACIÓN (DOBLE O INDIVIDUAL).</strong>  <br />

             <strong>3. - NÚMERO DE TARJETA DE CRÉDITO CON FECHA DE CADUCIDAD COMO GARANTÍA:</strong> (se usara solo si el cliente no anulara y no se presentara en el hotel, en este caso se le cargará el importe de la primera noche, así como, si el cliente anula con menos de 24 horas de anterioridad, también se le hará el cargo de la primera noche).<br />

             <strong>4. - TELÉFONO DE CONTACTO DURANTE EL VIAJE, POR SI HAY QUE CONTACTAR.</strong> <br />

             <strong>5.- LAS RESERVAS DEBEN SER DIRIGIDAS VÍA MAIL</strong>, CON EL ASUNTO "ASAMBLEA INTERNACIONAL DE LARINGECTOMIZADOS DE CORDOBA ”, al siguiente mail,  <strong>director@hotelselu.com</strong>, sino se hicieran por esta vía, o faltase algún dato de los anteriores, las reservas no serán válidas.
            </p>
          </div>
        </div>

          {/* HOTEL Córdoba Center */}
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4 imgContainer">
              <img src={center} className="img-fluid m-2 rounded" alt="Hotel Córdoba Center"/>
            </div>
              <div className="col-md-8">
                <div className="card-body pt-0">
                  <h2 className="card-title">Hotel Córdoba Center <img src={star4} alt="4Star" width={100} height={100}/>   <a href="https://www.hotelescenter.es/es/hotel-cordoba-center/" target="_blank" rel="noreferrer" style={{fontSize: 25}}>Página Web</a></h2>
                  <h5 className="mb-4"><strong>Las tarifas no son fijas, ya que van sujetas a la evolución de la venta del hotel.</strong></h5>
                  <iframe className=" maps " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5450.490013400694!2d-4.783173834750099!3d37.8925935638737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6cdf65fa517245%3A0x999a213f6d4aeaee!2sHotel%20C%C3%B3rdoba%20Center!5e0!3m2!1ses-419!2ses!4v1702376705863!5m2!1ses-419!2ses" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
            <div className="alert alert-warning m-2" role="alert">
              <h4 className=" alert-heading">Procedimiento para reservar: <strong>VIA WEB Y TELÉFONO</strong></h4>
              <p>- Via Web: con el código <strong>"AIL2404"</strong>  de un 10% de descuento sobre el precio, se podrá reservar a traves de la página web, pulsando <a href="https://www.hotelescenter.es/es/hotel-cordoba-center/" target="_blank" rel="noreferrer">aquí</a>. <br />
              - Via teléfono: +34 900 202 000 comentando el código de descuento <strong>"AIL2404"</strong>. <br />
              Fecha límite de reserva hasta dos semanas antes de la fecha de entrada, antes del <strong>01/Marzo/2024</strong> siempre que la disponibilidad del hotel así lo permita. <br />
              * La política de cancelación de las reservas se detallará por mail según cada caso en concreto, ya que dependerá del tipo de reserva y promoción elegida.
              </p>
            </div>
          </div>
        </div>
    </>
  )
}
