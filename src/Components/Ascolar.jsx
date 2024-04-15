import cartel from '../assets/cartel.png';
import logoHURS from '../assets/LogoHURS.jpg';
import logoAGS from '../assets/LogoAGS.jpg';
import logoJunta from '../assets/LogoJunta.jpg';
import logoFepa from '../assets/LogoFepa.jpg';
import logoAtos from '../assets/LogoAtos.jpg';
import logoUC from '../assets/LogoUC.jpg';
import logoAyCo from '../assets/LogoAyCo.jpg';
import logoAyCa from '../assets/LogoAyCa.jpg';
import logoDipu from '../assets/logoDipu.png';
import logoTV from '../assets/logoTv.png';
import logoCortes from '../assets/logoCortes.png';


export const Ascolar = () => {
  return (
    <div className="Regis_divForm row">
        <h1 className="text-center">ASCOLAR</h1>
        <hr />
        <div className='col-md-5'>
          <img src={cartel} alt="Borrador Cartel" className='horario img-fluid animate__animated animate__fadeInLeft animate__slower' />
        </div>
        <div className='col-md-7 text-center'>
          <h3> <strong>CÓRDOBA ACOGERÁ LA XV ASAMBLEA INTERNACIONAL DE PERSONAS LARINGECTOMIZADAS: "VOCES RENACIDAS, LA ASAMBLEA DE LA ESPERANZA"</strong></h3>
          <p className='textInicio'>
            La provincia andaluza de Córdoba se convertirá en el epicentro de un evento trascendental que busca mejorar la calidad de vida de las personas laringectomizadas. Los días 25 y 26 de abril de 2024, el Salón de Actos del Hospital Universitario Reina Sofía será el escenario de la XV Asamblea Internacional de Personas Laringectomizadas, un encuentro dedicado a abordar aspectos cruciales para el cuidado y bienestar de estos pacientes.
          <br /> <br />
          Bajo el lema <strong> "Voces Renacidas, la Asamblea de la Esperanza"</strong>, esta reunión anual se presenta como una oportunidad única para pacientes, asociaciones, familiares y profesionales de la salud, en especial otorrinolaringólogos y oncólogos, de intercambiar conocimientos y experiencias en el ámbito de la laringectomía.
          <br /> <br />
          La <strong>XV Asamblea Internacional de Personas Laringectomizadas</strong> contará con una agenda repleta de ponencias y mesas de discusión que abordarán temas cruciales para quienes han pasado por esta intervención. El foco principal será el cuidado de los pacientes y la presentación de los últimos avances médicos destinados a mejorar significativamente su calidad de vida.
          <br /> <br />
          Durante las dos jornadas del evento, se ofrecerá una plataforma para que pacientes laringectomizados compartan sus experiencias y relaten cómo enfrentan su día a día tras la intervención, así como la perspectiva de sus familias. Este enfoque práctico y humano pretende arrojar luz sobre las distintas realidades que enfrentan estas personas, destacando su valentía y resiliencia.
          <br /> <br />
          La Asamblea Internacional de Personas Laringectomizadas se propone ser un espacio de aprendizaje, apoyo mutuo y concienciación sobre la importancia de la atención integral a los pacientes que han pasado por esta cirugía. Además, busca consolidar a la provincia de Córdoba como un punto de encuentro internacional en el ámbito de la laringectomía, promoviendo la colaboración entre profesionales y la difusión de conocimientos que redunden en el bienestar de los pacientes.
          <br /> <br />
          Este evento anual, que ha ganado reconocimiento a nivel internacional, refuerza el compromiso de la comunidad médica y de los pacientes con la mejora continua y la búsqueda de soluciones que permitan a quienes han pasado por una laringectomía encontrar nuevas voces y renovar la esperanza en sus vidas.
          </p>
         </div>

        <h1 className="text-center">COLABORADORES</h1>
        <hr />

        <div className=" text-center">
          <div className="row">
            <div className="col-md-3">
              <img src={logoHURS} alt="Logo HURS" className='imgLogo' />
              </div>
            <div className="col-md-1">
              <img src={logoAGS} alt="Logo AGS" className='imgLogo' />
            </div>
            <div className="col-md-3">
              <img src={logoJunta} alt="Logo Junta de Andalucia" className='imgLogo' />
            </div>
            <div className="col-md-2">
              <img src={logoFepa} alt="Logo Fepamic" className='imgLogo' />
            </div>
            <div className="col-md-2">
              <img src={logoAtos} alt="Logo Atos" className='imgLogo' />
            </div>
          </div>
          <div className="row">
          <div className="col-md-2">
              <img src={logoDipu} alt="Logo Diputación de Córdoba" className='imgLogo' />
              </div>
            <div className="col-md-2">
              <img src={logoUC} alt="Logo Universidad de Córdoba" className='imgLogo' />
              </div>
            <div className="col-md-3">
              <img src={logoAyCo} alt="Logo Ayuntamiento Córdoba" className='imgLogo' />
            </div>
            <div className="col-md-4">
              <img src={logoAyCa} alt="Logo Ayuntamiento Cabra" className='imgLogo' />
            </div>
          </div>

          <div className="row">
          <div className="col-md-4"> </div>
          <div className="col-md-1">
              <img src={logoTV} alt="Logo TV Aguilar" className='imgLogo' />
              </div>
            <div className="col-md-2">
              <img src={logoCortes} alt="Logo Libreria Cortes" className='imgLogo' />
              </div>
          </div>
        </div>


    </div>

  )
}
