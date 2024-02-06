
import mezquita from '../assets/mezquita.jpg';
import alcazar from '../assets/alcazar.jpg';
import juderia from '../assets/Juderia.jpg';
import viana from '../assets/viana.jpeg';
import medina from '../assets/medina.jpeg';
import patio from '../assets/patio.jpg';

export const Cordoba = () => {
  return (
    <>
    <div className="Regis_divForm">
      <h1 className="text-center">Córdoba</h1>
      <hr />
      <h3>PDF Con todos los horarios y Punto de interes de Córdoba <a href="https://www.turismodecordoba.org/repositorio/2020/202010160837150000001602830235.2683.pdf?cache=1602830235.4002">Aquí</a></h3>
      <div className="alert alert-danger m-2 alertCss" role="alert">
        <h4>Estamos intentando conseguir alguna visita a algunos de estos monumentos.
        </h4>
      </div>
        {/* Mezquita */}

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4 imgContainer">
              <img src={mezquita} className="img-fluid m-2 rounded " alt="Hotel Selu"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">Mezquita - Catedral de Córdoba <a href="https://mezquita-catedraldecordoba.es/" target="_blank" rel="noreferrer" style={{fontSize: 25}}>Página Web</a></h2>

                <p className=' textCordoba'>La <strong>Mezquita-Catedral de Córdoba</strong> (Patrimonio de la Humanidad desde 1984) es el monumento más importante de todo el Occidente islámico y uno de los más asombrosos del mundo. En su historia se resume la evolución completa del estilo omeya en España, además de los estilos gótico, renacentista y barroco de la construcción cristiana.</p>
                <h5><strong>Precios entrada:</strong></h5>
                <table className="table mb-0">
                  <tbody>
                    <tr>
                      <td>- General</td>
                      <td className="text-end">13€</td>
                    </tr>
                    <tr>
                      <td>- Adulto Familia Numerosa</td>
                      <td className="text-end">7€</td>
                    </tr>
                    <tr>
                      <td>- Discapacitados (-65%)</td>
                      <td className="text-end">7€</td>
                    </tr>
                    <tr>
                      <td>- Discapacitados (+65%)</td>
                      <td className="text-end">GRATUITO</td>
                    </tr>
                    <tr>
                      <td>- +65 años</td>
                      <td className="text-end">10€</td>
                    </tr>
                    <tr>
                      <td>- Nacidos y/o residentes en la diocesis de Córdoba</td>
                      <td className="text-end">GRATUITO</td>
                    </tr>
                  </tbody>
                </table>
                <a href="https://tickets.mezquita-catedraldecordoba.es/es" target="_blank" rel="noreferrer" style={{fontSize: 25}}>Comprar entrada aquí</a>
              </div>
              <iframe className=" maps mb-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.2040795562216!2d-4.781961823639878!3d37.87890980615371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d2082ce1a16cf%3A0xefebc353f81bf636!2sMezquita-Catedral%20de%20C%C3%B3rdoba!5e0!3m2!1ses-419!2ses!4v1707217643014!5m2!1ses-419!2ses" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

                                        {/* Alcazar */}
      <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4 imgContainer">
              <img src={alcazar} className="img-fluid m-2 rounded " alt="Alcazar"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">Alcázar de los Reyes Cristianos <a href="https://www.turismodecordoba.org/alcazar-de-los-reyes-cristianos" target="_blank" rel="noreferrer" style={{fontSize: 25}}>Página Web</a></h2>

                <p className=' textCordoba'>El <strong>Alcázar de los Reyes Cristianos</strong>, fortaleza y palacio de sólidos muros, encierra en su interior gran parte de la evolución arquitectónica de <strong>Córdoba</strong>. Restos <strong>romanos y visigodos </strong> conviven con los de origen árabe en este majestuoso solar, ya que fue lugar predilecto de los distintos gobernantes de la ciudad.
                <br />
                Cuando en 1236 Córdoba es conquistada por Fernando III el Santo, el edificio, que formaba parte del antiguo Palacio Califal, estaba totalmente asolado. 
                Alfonso X el Sabio comienza su restauración, completada durante el reinado de Alfonso XI.
                 A lo largo de la Historia se le ha dado múltiples usos, como Sede del Santo Oficio (Inquisición), o cárcel (en la primera mitad del siglo XIX).</p>
                <h5><strong>Precios entrada:</strong></h5>
                <table className="table mb-0">
                  <tbody>
                    <tr>
                      <td>- General</td>
                      <td className="text-end">4.91€</td>
                    </tr>
                    <tr>
                      <td>- Familia Numerosa</td>
                      <td className="text-end">2.66€</td>
                    </tr>
                    <tr>
                      <td>- Discapacitados (+=33%)</td>
                      <td className="text-end">GRATUITA</td>
                    </tr>
                    <tr>
                      <td>- +65 años</td>
                      <td className="text-end">GRATUITA</td>
                    </tr>
                    <tr>
                      <td>- Residentes en el término municipal de Córdoba</td>
                      <td className="text-end">GRATUITA</td>
                    </tr>
                  </tbody>
                </table>
                <a href="https://alcazardelosreyescristianos.sacatuentrada.es/es/entradas/alcazar-de-los-reyes-cristianos" target="_blank" rel="noreferrer" style={{fontSize: 25}}>Comprar entrada aquí</a>
              </div>
              <iframe className=" maps mb-3 " src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d405.1994451106819!2d-4.781304876899558!3d37.87635617364755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d209c64b08419%3A0xcb4ad460f15712f5!2sAlc%C3%A1zar%20de%20los%20Reyes%20Cristianos!5e0!3m2!1ses!2sus!4v1707218980416!5m2!1ses!2sus" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
                                                {/* Medinat al-Zahra */}
      <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4 imgContainer">
              <img src={medina} className="img-fluid m-2 rounded " alt="Medinat al-Zahra"/>
            <p>De Wwal - Trabajo propio, CC BY-SA 3.0, <a href="https://commons.wikimedia.org/w/index.php?curid=1387213">link</a></p>

            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">Medinat al-Zahra <a href="https://www.turismodecordoba.org/medina-azahara" target="_blank" rel="noreferrer" style={{fontSize: 25}}>Página Web</a></h2>

                <p className=' textCordoba'> <strong>Medinat al-Zahra</strong>, la fastuosa y misteriosa ciudad que <strong>Abd-al Rahman III</strong> mandó construir a los pies de Sierra Morena, a ocho kilómetros de Córdoba capital, encierra, incluso en su nombre, historias legendarias. 
                <br />
                La tradición popular afirma que, autoproclamado Abd al-Rahman III califa en el <strong>929 d.C.</strong> , y tras ocho años de reinado, decidió edificar una ciudad palatina en honor a su favorita, Azahara. Sin embargo, recientes estudios aportan fuertes evidencias de la causa que impulsó al califa a fundar Medina Azahara. Una renovada imagen del recién creado Califato Independiente de Occidente, fuerte y poderoso, uno de los mayores reinos medievales de Europa, se acepta como el origen más probable de la nueva Medina.</p>
                <h5><strong>Precios entrada:</strong></h5>
                <div className="alert alert-warning m-2 alertCss" role="alert">
                <h4>Entrada gratuita a todos recidentes en Europa, solo se paga el bus lanzadera (obligatorio para ver la ciudad) y si es desde Córdoba el bus. <br /> <a href="http://www.reservasturismodecordoba.org/Publicacion/DetallePublicacion/771?muestraFormulario=True">Más Información</a></h4>
                </div>
                <table className="table mb-0">
                  <tbody>
                    <tr>
                      <td>- Autobus hacia Centro de visitantes desde Córdoba + bus lanzadera Medina Azahara</td>
                      <td className="text-end">10€</td>
                    </tr>
                    <tr>
                      <td>- Buz lanzadera desde Centro de Visitantes a Medina Azahara( cada 20 minutos )</td>
                      <td className="text-end">3€</td>
                    </tr>
                  </tbody>
                </table>
                Comprar entrada <a href="http://www.reservasturismodecordoba.org/" target="_blank" rel="noreferrer" style={{fontSize: 20}}> aquí </a>del autobus. Presentando la entrada del autobus en el bus de lanzadera. <br /> Si se va en coche, el ticket de la lanzadera se compra en el Centro de visitantes de Medina Azahara.
              </div>
              <iframe className=" maps mb-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5775.335843649555!2d-4.856953420962946!3d37.8831152676928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6cd87fb085a8e7%3A0x22e27ea1698d6a2f!2sCentro%20de%20visitantes%20de%20Medinat%20al-Zahra!5e0!3m2!1ses!2sus!4v1707219386454!5m2!1ses!2sus" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

                                                  {/* Judería */}
      <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4 imgContainer">
              <img src={juderia} className="img-fluid m-2 rounded imgjude" alt="La Judería"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">La Judería -- Visita guiada incluida para el día 26</h2>

                <p className=' textCordoba'>
                La ciudad de <strong>Córdoba conserva un barrio judío</strong>, emplazado en el casco histórico, que forma parte de la zona designada <strong>Patrimonio de la Humanidad por la UNESCO el año 1994</strong>. El barrio de La Judería presenta desde el punto de vista urbanístico el típico trazado islámico con dos calles transversales centrales y un laberinto de pequeñas calzadas que acaban, a veces, en típicos callejones sin salida o adarves. Los límites de la judería actual van desde la Puerta de Almodóvar hasta la Mezquita-Catedral y la actual sede episcopal (antiguo alcázar andalusí), al sur. La calle Rey Heredia marcaba la frontera del barrio por el este, lindando con la muralla por el oeste.
                </p>
              </div>
              <iframe className=" maps mb-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.2096613183658!2d-4.7820057236399!3d37.87877925616141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d20832b69c283%3A0x5ece044e8146dac1!2zTGEgSnVkZXLDrWEsIENlbnRybywgQ8OzcmRvYmEsIEVzcGHDsWE!5e0!3m2!1ses!2sus!4v1707234210229!5m2!1ses!2sus" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

                                                     {/* Palacio de Viana */}
      <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4 imgContainer">
              <img src={viana} className="img-fluid m-2 rounded" alt="La Judería"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">Palacio de Viana <a href="https://www.palaciodeviana.com/" target="_blank" rel="noreferrer" style={{fontSize: 25}}>Página Web</a></h2>

                <p className=' textCordoba'>
                El <strong>Palacio de Viana de Córdoba</strong> es una casa histórica y vivida que refleja la personalidad y los gustos de las familias que la habitaron entre 1425 y 1980. De los siglos XV al XX tuvo 18 propietarios que fueron ampliando y transformando un grupo de casas de la Baja Edad Media en el magnífico conjunto histórico y paisajístico que podemos visitar ahora, en el que se entremezclan lo artístico y lo popular con una armonía y personalidad únicas.
                </p>
                <table className="table mb-0">
                  <tbody>
                    <tr>
                      <td>- Adulto (Interior + Patios)</td>
                      <td className="text-end">12€</td>
                    </tr>
                    <tr>
                      <td>- Adulto con discapacidad &gt;30% (interior + Patios)</td>
                      <td className="text-end">7€</td>
                    </tr>
                    <tr>
                      <td>- Adulto (Interior)</td>
                      <td className="text-end">8€</td>
                    </tr>
                    <tr>
                      <td>- Adulto con discapacidad &gt;30% (interior)</td>
                      <td className="text-end">7€</td>
                    </tr>
                  </tbody>
                </table>
                <a href="https://entradas.palaciodeviana.com/janto/main.php" target="_blank" rel="noreferrer" style={{fontSize: 25}}>Comprar entrada aquí</a>
              </div>
              <iframe className=" maps mb-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.7876780457123!2d-4.776626123639559!3d37.88864780559162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6cdf79604fdf91%3A0xa5e7fa34716c3858!2sPalacio%20de%20Viana!5e0!3m2!1ses-419!2ses!4v1707235815990!5m2!1ses-419!2ses" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <p>De Andrew Wilkinson - Flickr: Fountain in Palacio de Viana, CC BY-SA 2.0, <a href="https://commons.wikimedia.org/w/index.php?curid=29223134">link</a></p>
            </div>
          </div>
        </div>

         {/* Patios */}
      <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4 imgContainer">
              <img src={patio} className="img-fluid m-2 rounded" alt="Patios"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">Patios de Córdoba</h2>

                <p className=' textCordoba'>
               <strong>Los Patios de Córdoba</strong> viven su máximo esplendor en la primera quincena de mayo cada año con el Festival de los Patios Cordobeses <strong>(Patrimonio de la Humanidad)</strong>, los propietarios de todos los patios participantes en el concurso abren sus patios y el público puede visitarlos. Lo que muchos no saben es que es posible visitar patios de Córdoba durante todo el año y casi diríamos que fuera de las fechas del Festival es cuando mejor se pueden conocer, porque no se encuentran tan saturados de público.
                <br /> <br /> <hr />
                <h3>En el archivo del principio de esta página, se encuentran los horarios y patios abiertos.</h3>
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
