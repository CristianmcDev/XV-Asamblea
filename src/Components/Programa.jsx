import horario from '../assets/Borrador_Horario.jpg'

export const Programa = () => {
  return (
    <>

        <div className="Regis_divForm">
            <h1 className="text-center">PROGRAMA</h1>
            <hr />
            <img src={horario} alt="Borrador horario" className='horario img-fluid' />

            {/* A la derecha del documento, poner info de las visitas guiadas */}
        </div>
    </>
  )
}
