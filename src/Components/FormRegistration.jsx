

export const FormRegistration = () => {
  return (
    <>
        <div className=" row Regis_divForm">
                                                     {/* Nombre */}
            <div className="col-md-4 mt-4">
                <div className="form-floating">
                    <input type="name" className="form-control" id="floatingInput" placeholder="Nombre" />
                    <label htmlFor="floatingInput">*Nombre</label>
                </div>
            </div>
            <div className="col-md-8 mt-4">
                <div className="form-floating">
                    <input type="name" className="form-control" id="floatingInput" placeholder="Apellidos" />
                    <label htmlFor="floatingInput">*Apellidos</label>
                </div>
            </div>
                                                        {/* Correo */}
            <div className="col-md-6 mt-4">
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="email" />
                    <label htmlFor="floatingInput">*Correo electrónico</label>
                </div>
            </div>
            <div className="col-md-6 mt-4">
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="email" />
                    <label htmlFor="floatingInput">*Repetir correo</label>
                </div>
            </div>
                                                        {/* Telefono + DNI + Ciudad */}
            <div className="col-md-4 mt-4">
                <div className="form-floating">
                    <input type="tel" className="form-control" id="floatingInput" placeholder="tel" />
                    <label htmlFor="floatingInput">*Teléfono de contacto</label>
                </div>
            </div>
            <div className="col-md-4 mt-4">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="dni" />
                    <label htmlFor="floatingInput">*DNI</label>
                </div>
            </div>
            <div className="col-md-4 mt-4">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="ciudad" />
                    <label htmlFor="floatingInput">*Ciudad Perteneciente</label>
                </div>
            </div>
                                                     {/* Organización + Dia asistenia  */}
            <div className="col-md-6 mt-5">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="organizacion" />
                    <label htmlFor="floatingInput">Organización perteneciente</label>
                </div>
            </div>
            <div className="col-md-6 mt-3 Regis_check">
                <p>Días asistenia:</p>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Día 25 Abril
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Día 26 Abril
                    </label>
                </div>
            </div>
         </div>
    </>
  )
}
