import juderia from '../assets/Juderia.jpg';

export const Visita = () => {
  return (
    <>
        <div className="Regis_divForm">
         <h1 className="text-center">Visita Guiada</h1>
            <hr />
            <div className="card mb-3">


                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={juderia} className="img-fluid rounded m-2 imgjude" alt="Callleja de las flores"/>
                    </div>
                    <div className="col-md-8">
                         <h2 className="text-center text-decoration-underline">Visita día 26</h2>

                        <div className="card-body pt-0">
                        <h2 className="card-title">Visita guiada por el casco historico de Córdoba</h2>

                        <p>Proximamente se publicará la hora y el lugar de encuentro.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
