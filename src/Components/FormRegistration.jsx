import { useForm } from "../hooks/useForm";

const initialForm = {
    nombre: "",
    apellidos: "",
    correo: "",
    telefono: "",
    dni: "",
    ciudad: "",
    org: "",
    hotel: "",
    dia25: false,
    dia26: false,
    cena: "no",
    plato: "",
    gluten: false,
    huevo: false,
    lactosa: false,
    marisco: false,
    frutossecos: false,
    otras: false,
    otrasAlergias: "",
    noAlergias: true,
    comentarios: ""
};

export const FormRegistration = () => {

    const { formState, onInputChange, onResetForm, onCheckChange, onCheckChangeValue, onCheckChangeAlergias, onCheckChangeOther,
        nombre, apellidos, correo, telefono, dni, ciudad, org, hotel, dia25, dia26, cena, plato, comentarios, noAlergias, otrasAlergias}
         = useForm(initialForm);



  return (
    <>
        <div className=" row Regis_divForm">
            <div className="col-md-12 mt-3 ">
                    <button type="button" className="btn btn-outline-danger" onClick={onResetForm}>Limpiar formulario</button>
            </div>
                                                     {/* Nombre */}
            <div className="col-md-4 mt-4">
                <div className="form-floating">
                    <input type="text" name="nombre" value={nombre} className="form-control" id="floatingInput" onChange={onInputChange}/>
                    <label htmlFor="floatingInput">*Nombre</label>
                </div>
            </div>
            <div className="col-md-8 mt-4">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" value={apellidos} name="apellidos" onChange={onInputChange} />
                    <label htmlFor="floatingInput">*Apellidos</label>
                </div>
            </div>
                                                        {/* Correo */}
            <div className="col-md-6 mt-4">
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" value={correo} name="correo" onChange={onInputChange} />
                    <label htmlFor="floatingInput">*Correo electrónico</label>
                </div>
            </div>
            <div className="col-md-6 mt-4">
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" name="correo2" onChange={onInputChange} />
                    <label htmlFor="floatingInput">*Repetir correo</label>
                </div>
            </div>
                                                        {/* Telefono + DNI + Ciudad */}
            <div className="col-md-4 mt-4">
                <div className="form-floating">
                    <input type="num" className="form-control" id="floatingInput" value={telefono} name="telefono" onChange={onInputChange} />
                    <label htmlFor="floatingInput">*Teléfono de contacto</label>
                </div>
            </div>
            <div className="col-md-4 mt-4">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" value={dni} name="dni" onChange={onInputChange} />
                    <label htmlFor="floatingInput">*DNI</label>
                </div>
            </div>
            <div className="col-md-4 mt-4">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" value={ciudad} name="ciudad" onChange={onInputChange} />
                    <label htmlFor="floatingInput">*Ciudad Perteneciente</label>
                </div>
            </div>
                                                     {/* Organización + Hotel + Dia asistenia  */}
            <div className="col-md-6 mt-5">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" value={org} name="org" onChange={onInputChange} />
                    <label htmlFor="floatingInput">Organización perteneciente</label>
                </div>
            </div>
            <div className="col-md-4 mt-5">
            <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" value={hotel} name="hotel" onChange={onInputChange} />
                    <label htmlFor="floatingInput"> Hotel, si se hospeda</label>
                </div>
            </div>
            <div className="col-md-2 mt-3">
                <p>*Días asistenia:</p>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={dia25} onChange={onCheckChange} name="dia25" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Día 25 Abril
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={dia26} onChange={onCheckChange} name="dia26" id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Día 26 Abril
                    </label>
                </div>
            </div>
                                                     {/* Cena de gala */}
            <div className="col-md-12 mt-3">
                <p>* Inscripción para la cena de gala dia 25 de Abril, con precio 49€/persona, ingresar a cuenta: 561964968498498498 con el concepto: "Cena de gala" + el nombre.
                    Aforo limitado, se respetara estrictamente el orden de inscripción.  <a href="http://">Ver carta de cena</a>.
                </p>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={cena === 'si'} onChange={(t) => onCheckChangeValue('si',t)} name="cena" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Si
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={cena === 'no'} onChange={(t) => onCheckChangeValue('no',t)} name="cena" id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        No
                    </label>
                </div>
            </div>
                                        {/* Incorporar aqui en lo siguiente que se muestre o no si acepta cena de gala */}
            <div className="col-md-12 mt-3">
                <p>* Para la cena de gala, ¿que prefiere de plato principal?</p>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={plato === 'carne'} onChange={(t) => onCheckChangeValue('carne',t)} name="plato" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Carne
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={plato === 'pescado'} onChange={(t) => onCheckChangeValue('pescado',t)} name="plato" id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Pescado
                    </label>
                </div>
            </div>

                                           {/* Intolerancias */}
            <div className="col-md-12 mt-3">
                <p>¿Alguna intorelancia o alergia alimentaria?</p>
                <div className="form-check">
                                         {/* Aqui, si se seleciona Ninguna, inhabilitar los otros checks */}
                    <input className="form-check-input" type="checkbox" checked={noAlergias} onChange={onCheckChangeAlergias} name="noAlergias" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Ninguna
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" disabled = {noAlergias} onChange={onCheckChange} name="gluten" type="checkbox" id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Gluten
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" disabled = {noAlergias} onChange={onCheckChange} name="huevo" type="checkbox" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Huevo
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" disabled = {noAlergias} onChange={onCheckChange} name="lactosa" type="checkbox" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Lactosa
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" disabled = {noAlergias} onChange={onCheckChange} name="marisco" type="checkbox" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Marisco
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" disabled = {noAlergias} onChange={onCheckChange} name="frutossecos" type="checkbox" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Frutos secos
                    </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" disabled = {noAlergias} onChange={onCheckChangeOther} name="otras" type="checkbox" id="flexCheckDefault"/>
                    <label className="form-check-label col-md-12" htmlFor="flexCheckDefault">
                        Otras
                        <input type="text" style={{visibility: "hidden"}}  className="form-control" disabled = {noAlergias}  value={otrasAlergias} name="otrasAlergias" onChange={onInputChange}/>
                    </label>
                </div>
            </div>
            <div className="mt-3">
                <label htmlFor="FormControlTextarea" className="form-label">Comentarios</label>
                <textarea className="form-control" id="FormControlTextarea" value={comentarios} name="comentarios" onChange={onInputChange}></textarea>
            </div>
                        {/* Proteccion de datos bla bla bla*/}
            <div className="col-md-12 mt-3">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                    <p>Acepta la proteccion de datos bla bla bla aqui habra que poner el tipico texto de la ley sobre la proteccion de datos
                    que solo seran datos privados y para llevar el control de inscripciones </p>
                    </label>
                </div>
             </div>
             <div className="col-md-12 mt-3">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                    <p>Quiere que le informemos de nuevas actualizaciones sobre la asamblea, añadiendo su número de contacto al grupo de whatsapp</p>
                    </label>
                </div>
             </div>
             <div className="col-md-12 mt-3 ">
                <button type="button" className="btn btn-outline-primary m-2">Enviar formulario</button>
                <button type="button" className="btn btn-outline-danger" onClick={onResetForm}>Limpiar formulario</button>
            </div>
         </div>
    </>
  )
}
