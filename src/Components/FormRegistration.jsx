import emailjs from "@emailjs/browser";
import { initialForm } from "../data/initialRegis";
import { useForm } from "../hooks/useForm";
import { useRef } from "react";

import cenaPDF from '../assets/CenaGala.pdf';
import protectPDF from '../assets/Aviso legal.pdf';


export const FormRegistration = () => {

    const { onInputChange, onResetForm, onCheckChange, onCheckChangeValue, onCheckChangeAlergias, onCheckChangeOther, onInputChangeNumber,
        nombre, apellidos, correo,correo2, telefono, ciudad, org, hotel, dia25, dia26, cenaSi, cenaNo, carne, pescado, comentarios, noAlergias, otrasAlergias, leyProtect, grupoWha,}
         = useForm(initialForm);

         const form = useRef();

         const handlechangeDisabled = (e) => {
            e.preventDefault();
        };

        const onSubmit = (e) => {

            if(!dia25 && !dia26){
                alert("Tienes que seleccionar al menos un dia de aistencia")
                e.preventDefault();
            }else
            if(!leyProtect){
                alert("Tienes que aceptar las condiciones de inscripción")
                e.preventDefault();
            }else{
                e.preventDefault();

                emailjs.sendForm('service_41n3gnu', 'template_wam2vsc', form.current, 'jeuAuNOzO1TudrGpv')
                .then((result) => {
                    alert("Inscripción enviada correctamente, se le enviara un correo de confirmación lo antes posible");
                }, (error) => {
                    alert("Problema con el envio ", error);
                });
            }
        };

  return (
    <>
        <form className=" row needs-validation Regis_divForm " ref={form} onSubmit={(e) =>onSubmit(e)}>

            <div className="alert alert-danger m-2 text-center" role="alert">
               <strong>RELLENAR FORMULARIO POR CADA ASISTENTE A LA ASAMBLEA</strong>
            </div>

            <div className="col-md-12 mt-3 ">
                    <button type="button" className="btn btn-outline-danger" onClick={onResetForm}>Limpiar formulario</button>
            </div>
                                                     {/* Nombre */}
            <div className="col-md-4 mt-4">
                <div className="form-floating was-validated">
                    <input type="text" name="nombre" value={nombre} className="form-control" id="floatingInput" onChange={onInputChange} required/>
                    <label htmlFor="floatingInput">*Nombre</label>
                    <div className="invalid-feedback">Debe rellenar este campo</div>

                </div>
            </div>
            <div className="col-md-8 mt-4">
                <div className="form-floating was-validated">
                    <input type="text" className="form-control" id="floatingInput" value={apellidos} name="apellidos" onChange={onInputChange} required/>
                    <label htmlFor="floatingInput">*Apellidos</label>
                    <div className="invalid-feedback">Debe rellenar este campo</div>
                </div>
            </div>
                                                        {/* Correo */}
                <p>Correo para poder confirmar la inscripción, No es obligatorio</p>
            <div className="col-md-6 mt-4">
                <div className="form-floating was-validated">
                    <input type="email" className="form-control " id="floatingInput" value={correo} name="correo" onChange={onInputChange}/>
                    <label htmlFor="floatingInput">*Correo electrónico</label>
                    <div className="invalid-feedback">Debe rellenar este campo</div>
                </div>
            </div>
            <div className="col-md-6 mt-4">
                <div className="form-floating was-validated">
                    <input type="email" className="form-control" id="floatingInput" value={correo2} onPaste={handlechangeDisabled} name="correo2" onChange={onInputChange}/>
                    <label htmlFor="floatingInput">*Repetir correo</label>
                    <div className="invalid-feedback">Debe confirmar el correo</div>
                </div>
            </div>
                                                        {/* Telefono + Ciudad */}
            <div className="col-md-4 mt-4">
                <div className="form-floating was-validated">
                    <input type="text" className="form-control" id="floatingInput" value={telefono} name="telefono" onChange={onInputChangeNumber} required/>
                    <label htmlFor="floatingInput">*Teléfono de contacto</label>
                    <div className="invalid-feedback">Debe rellenar este campo</div>
                </div>
            </div>
            <div className="col-md-4 mt-4">
                <div className="form-floating was-validated">
                    <input type="text" className="form-control" id="floatingInput" value={ciudad} name="ciudad" onChange={onInputChange} required/>
                    <label htmlFor="floatingInput">*Ciudad Perteneciente</label>
                    <div className="invalid-feedback">Debe rellenar este campo</div>
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
                        <p>* Inscripción para la cena de gala día 25 de Abril, con precio 42€/persona, ingresar a cuenta: ES63 0237 0158 5091 5212 0656 con el concepto: "Cena de gala" + su nombre.
                           Beneficiario: ASCOLAR -- Aforo limitado, se respetará estrictamente el orden de inscripción. Fecha límite 25 Marzo.  <a href={cenaPDF} target="_blank" rel="noreferrer">Ver Menú</a>
                        </p>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" checked={cenaSi} onChange={onCheckChangeValue} name="cenaSi" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Si
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" checked={cenaNo} onChange={onCheckChangeValue} name="cenaNo" id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                No
                            </label>
                        </div>
                    </div>
                    {
                        cenaSi === true
                        ? <div className="col-md-12 mt-3">
                            <p>* Para la cena de gala, ¿que prefiere de plato principal?</p>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" checked={carne} onChange={onCheckChangeValue} name="carne" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                 Carne
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" checked={pescado} onChange={onCheckChangeValue} name="pescado" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Pescado
                                </label>
                            </div>
                        </div>
                        :""
                    }
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
                    <input className="form-check-input" type="checkbox" onChange={onCheckChange} checked={leyProtect} name="leyProtect" id="flexCheckDefault" required/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                    <p>* Acepta la ley de privacidad y protección de datos <a href={protectPDF} target="_blank" rel="noreferrer">Ver Documento</a> </p>
                    </label>
                </div>
             </div>
             <div className="col-md-12 mt-3">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" onChange={onCheckChange} name="grupoWha" checked={grupoWha} id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                    <p>Quiere que le informemos de nuevas actualizaciones sobre la asamblea, añadiendo su número de contacto al grupo de WhatsApp</p>
                    </label>
                </div>
             </div>
             <div className="col-md-12 mt-3 ">
                <button type="submit" className="btn btn-outline-primary m-2">Enviar inscripción</button>
                <button type="button" className="btn btn-outline-danger" onClick={onResetForm}>Limpiar formulario</button>
            </div>
         </form>
    </>
  )
}
