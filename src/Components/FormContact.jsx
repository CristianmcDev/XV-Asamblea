import { useRef } from "react"
import { useForm } from "../hooks/useForm";
import emailjs  from "@emailjs/browser";

import gmail from '../assets/gmail.png';
import wha from '../assets/whatsApp.png';

export const FormContact = () => {


  const { onInputChange, nombre, correo, asunto, mensaje} = useForm({nombre:"", correo:"", asunto:"", mensaje:""});

  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_41n3gnu', 'template_c9l8xf8', form.current, 'jeuAuNOzO1TudrGpv')
    .then((result) => {
        alert("Correo enviado correctamente, se le responderá lo antes posible");
    }, (error) => {
        alert("Problema con el envio ", error);
    });
  };



  return (
    <>
      <form className=" row needs-validation Regis_divForm text-center" ref={form} onSubmit={(e) =>onSubmit(e)}>

      <div className="col-md-3 mt-4">
        <div className="form-floating was-validated">
          <input type="text" name="nombre" value={nombre} className="form-control" id="floatingInput" onChange={onInputChange} required/>
          <label htmlFor="floatingInput">*Nombre</label>
          <div className="invalid-feedback">Debe rellenar este campo</div>
        </div>
      </div>
      <div className="col-md-4 mt-4">
        <div className="form-floating was-validated">
          <input type="email" name="correo" value={correo} className="form-control" id="floatingInput" onChange={onInputChange} required/>
          <label htmlFor="floatingInput">*Correo electronico</label>
          <div className="invalid-feedback">Debe rellenar este campo</div>
        </div>
      </div>
      <div className="col-md-5 mt-4">
        {/* Contactos correo y wha */}
        <h4>Contactos:</h4>
        <h5><img src={gmail} alt="gmail" height={40}/> <a>xvasamblealaringe@gmail.com</a></h5>
        <h5><img src={wha} alt="Whatsaap" height={40} />   604 46 19 45</h5>
      </div>
      <div className="col-md-7 mt-4">
        <div className="form-floating was-validated">
          <input type="text" name="asunto" value={asunto} className="form-control" id="floatingInput" onChange={onInputChange} required/>
          <label htmlFor="floatingInput">*Asunto</label>
          <div className="invalid-feedback">Debe rellenar este campo</div>
        </div>
      </div>
      <div className="mt-3">
        <label htmlFor="FormControlTextarea" className="form-label">Mensaje</label>
        <textarea className="form-control" id="FormControlTextarea" value={mensaje} name="mensaje" onChange={onInputChange}></textarea>
      </div>
      <div className="col-md-12 mt-3 ">
        <button type="submit" className="btn btn-outline-primary m-2">Enviar mensaje</button>
      </div>

      </form>
    </>
  )
}
