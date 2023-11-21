import selu from "../assets/hotel-selu.jpg";
import star from "../assets/stars3.png";
import center from "../assets/Cordoba-Center.jpg";
import star4 from "../assets/stars4.png";
export const Hoteles = () => {
  return (
    <>
      <div className="Regis_divForm">
        <h1 className="text-center">Hoteles</h1>
        <hr />
          {/* HOTEL SELU */}
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={selu} className="img-fluid rounded-start" alt="Hotel Selu"/>
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
                <h5><strong>Correo electronico</strong>:  director@hotelselu.com</h5>
              </div>
            </div>
          </div>
          <div className="alert alert-warning m-2" role="alert">

            <h4 className=" alert-heading">Procedimiento para reservar: <strong>SOLO VIA EMAIL</strong></h4>

            <p>
              Indicar en el mail: <br />

              1. - NOMBRE Y APELLIDOS DE LAS PERSONAS QUE SE ALOJAN. <br />

              2. - DÍA DE LLEGADA Y SALIDA DEL HOTEL, ASÍ COMO EL TIPO DE HABITACIÓN (DOBLE O INDIVIDUAL). <br />

              3. - NÚMERO DE TARJETA DE CRÉDITO CON FECHA DE CADUCIDAD COMO GARANTÍA: (se usara solo si el cliente no anulara y no se presentara en el hotel, en este caso se le cargará el importe de la primera noche, así como, si el cliente anula con menos de 24 horas de anterioridad, también se le hará el cargo de la primera noche).<br />

              4. - TELÉFONO DE CONTACTO DURANTE EL VIAJE, POR SI HAY QUE CONTACTAR. <br />

              5.- LAS RESERVAS DEBEN SER DIRIGIDAS VÍA MAIL, CON LA REFERENCIA "ASAMBLEA INTERNACIONAL DE LARINGECTOMIZADOS DE CORDOBA ”, al siguiente mail,  <strong>director@hotelselu.com</strong>, sino se hicieran por esta vía, o faltase algún dato de los anteriores, las reservas no serán válidas.
            </p>
          </div>
        </div>

          {/* HOTEL Córdoba Center */}
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={center} className="img-fluid rounded-start" alt="Hotel Córdoba Center"/>
            </div>
              <div className="col-md-8">
                <div className="card-body pt-0">
                  <h2 className="card-title">Hotel Córdoba Center <img src={star4} alt="4Star" width={100} height={100}/>   <a href="https://www.hotelescenter.es/es/hotel-cordoba-center/" target="_blank" rel="noreferrer" style={{fontSize: 25}}>Página Web</a></h2>
                  <h5 className="mb-4"><strong>Las tarifas no serán fijas, ya que irán sujetas a la evolución de la venta del hotel.</strong></h5>
                  <div className="alert alert-warning m-2" role="alert">
                    <h4 className=" alert-heading">Procedimiento para reservar: <strong>VIA WEB Y TELÉFONO</strong></h4>
                    <p>Con el código <strong>"AIL2404"</strong>  de un 10% de descuento sobre el precio, se podrá reserver via página web, pulsando <a href="https://www.hotelescenter.es/es/hotel-cordoba-center/" target="_blank" rel="noreferrer">aquí</a> <br />
                    - Via teléfono: +34 900 202 000 comentando el código de descuento <strong>"AIL2404"</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
