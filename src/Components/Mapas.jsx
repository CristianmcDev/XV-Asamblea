import accesok from '../assets/AccesoK.jpg';
import HospiFacul from '../assets/Hospital-Facultad.png';

export const Mapas = () => {
  return (
    <>
        <div className="Regis_divForm">
                <div className="card mb-3 mapCard">
                    <div className="row g-0">
                        <iframe className="mapAll" src="https://www.google.com/maps/d/u/1/embed?mid=12s-nFbT1Xad5LtWGfv0gzOT551bc7U0&ehbc=2E312F&noprof=1"></iframe>
                    </div>
                </div>
                <hr />
                    <h1 className="text-center text-decoration-underline">Como llegar a:</h1>

                    <h4><strong>- Córdoba</strong></h4>

                    <div><strong>POR CARRETERA</strong></div> <br />
                    Debido a su excepcional situación geográfica Córdoba se encuentra muy bien comunicada no sólo con Andalucía, sino también con el resto de España, a través del eje radial que supone la A-4. Accesos principales:
            <ul>
                <li><strong>Desde Madrid:</strong> Se llega a la ciudad a través de la Autovía del Sur A-4. Duración aproximada del trayecto: 3 horas 30 minutos.</li>
                <li><strong>Desde Sevilla:</strong> También a través de la Autovía del Sur A-4. Duración aproximada del trayecto: 1 hora.</li>
                <li><strong>Desde Málaga:</strong> Autovía Córdoba-Málaga A-45. Duración aproximada del trayecto: 1 hora y 30 minutos.</li>
                <li><strong>Desde Valencia:</strong> Autovía A-3 y conexión con A-4 a través de la A-43. Duración aproximada del trayecto: 5 horas.</li>
                <li><strong>Desde Murcia y Levante:</strong> Autovía A-7 y conexión con A-45 a través de la A-92N y la A-92.</li>
                <li><strong>Desde Portugal y Extremadura:</strong> Se accede a la provincia por su zona norte a través de la Nacional 432.</li>
                <li><strong>Desde El Algarve portugués y Huelva:</strong> Tomando la Autopista del V Centenario A-49 hasta llegar a Sevilla y enlazar con la Autovía del Sur A-4.</li>
                <li><strong>Desde Gibraltar y Cádiz:</strong> A través de la Autovía del Sur A-4 dirección Madrid.</li>
            </ul>


            Para información de autobuses contacta con la <strong>Estación de Autobuses de Córdoba:</strong> <a href="www.estacionautobusescordoba.es" target="_blank" rel="noreferrer">Página web</a> <strong>- Teléfono:</strong> +34 957 40 40 40. <br />

            <div className="mt-2"><strong>EN TREN</strong></div> <br />
            Algo similar ocurre con el ferrocarril, ya que Córdoba es el punto de bifurcación de la línea que une Madrid con Málaga, Sevilla, Cádiz, Granada y Huelva. <br />

            Además, la comunicación entre Córdoba y Sevilla, Málaga, Granada, Madrid, Valencia, Alicante y Barcelona resulta especialmente cómoda a través del tren de Alta Velocidad. Duraciones de los trayectos: <br />
            <ul>
                <li><strong>Sevilla-Córdoba:</strong> 40 minutos.</li>
                <li><strong>Málaga-Córdoba:</strong> 50 minutos.</li>
                <li><strong>Granada-Córdoba:</strong> 1 hora y 30 minutos.</li>
                <li><strong>Madrid-Córdoba:</strong> 1 hora y 40 minutos.</li>
                <li><strong>Valencia-Córdoba:</strong> 3 horas.</li>
                <li><strong>Alicante-Córdoba:</strong> 4 horas.</li>
                <li><strong>Barcelona-Córdoba:</strong> 4 horas y 35 minutos.</li>
            </ul>

            Más información en: <br />
            <ul>
                <li> <a href="https://www.renfe.com/es/es">Renfe</a> y en el teléfono +34 902 320 320.</li>
                <li> <a href="https://iryo.eu/es/home">Iryo</a> y en el teléfono +34 910 150 000.</li>
            </ul>
            <div><strong>EN AVIÓN</strong></div> <br />
            Los aeropuertos más cercanos son los de Sevilla Y Málaga.

            <h4 className="mt-5"><strong>- Asamblea</strong></h4>
            <div className='row'>
                <div className="col-md-4">
                    <img src={accesok} className="img-fluid rounded m-2" alt="Acceso K"/>
                </div>
                <div className='col-md-8 mt-2'>
                    Las conferencias serán en el salon de actos del Hospital Reina Sofia, donde se accede desde el <strong>Acceso K</strong> <br />
                    Si quieres ver la ubicación desde Google Maps, Pulse <a href="https://maps.app.goo.gl/9D69WUnB92RdRSPw6" target="_blank" rel="noreferrer">Aqui</a>

                    <div className='mt-4'><strong>EN AUTOBUS</strong></div> <br />
                        - Cogiendo el Autobus Linea 5. Pulsa <a href="https://aucorsa.es/linea/5/" target="_blank" rel="noreferrer">aquí</a> para ver el recorrido y horarios. <br />
                        ---- Si estas hospedado en el <strong> Hotel Center Córdoba,  Parada 51 - Avenida América</strong> <br />
                        ---- Si estas hospedado en el <strong> Hotel Selu,  Parada 250 - República Argentina</strong><br />
                        <strong>Llegada en Parada 144 - Hospital Reina Sofía</strong>
                        <hr />
                        - Cogiendo el Autobus Linea 2. Pulsa <a href="https://aucorsa.es/linea/2/" target="_blank" rel="noreferrer">aquí</a> para ver el recorrido y horarios. <br />
                        ---- Si estas hospedado en el <strong> Hotel Center Córdoba,  Parada 68 - Ronda Tejares (Gran Capitán)</strong> <br />
                        ---- Si estas hospedado en el <strong> Hotel Selu,  Parada 250 - República Argentina</strong> <br />
                        <strong>Llegada en Parada 143 - Hospital Reina Sofía</strong>

                </div>
            </div>


            <h4 className="mt-5"><strong>- Almuzerzo Día 25</strong></h4>

            <div className='row'>
                <div className='col-md-4'>
                    <img src={HospiFacul} className="img-fluid rounded m-2" alt="Acceso K"/>
                </div>
                <div className='col-md-8'>
                    <div className='mt-2'>
                        <h4><strong>Cafetería Facultad de Medicina</strong></h4>
                    </div>
                    A 8 minutos andando desde el lugar de conferencias. <br />
                    Se le dara un ticket a la entrada de la Asamblea para entregar en la cafetería.
                </div>
            </div>


        </div>
    </>
  )
}
