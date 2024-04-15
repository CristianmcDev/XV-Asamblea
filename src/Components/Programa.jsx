import horarioPDF from '../assets/Programa.pdf';
import horario1 from '../assets/Programa1.png';
import horario2 from '../assets/Programa2.png';


export const Programa = () => {
  return (
    <>

        <div className="Regis_divForm">
            <h1 className="text-center">PROGRAMA</h1>
            <hr />

            <h3 className='text-center'>
              <a href={horarioPDF}>Ver aquí en PDF</a>
            </h3>
            <div className="programa row g-0">
              <div className='col-md-6'>
                <img src={horario1} alt="Programa preliminar" className="img-fluid programaImg" />
              </div>
              <div className='col-md-6'>
                <img src={horario2} alt="Programa preliminar" className="img-fluid programaImg" />
              </div>
            </div>
            <h3>Si tienes alguna pregunta para hacerla en la Asamblea, haznola saber por nuestro Whatsapp o a nuestro correo electronico, en la pestaña de contacto.</h3>
        </div>
    </>
  )
}
