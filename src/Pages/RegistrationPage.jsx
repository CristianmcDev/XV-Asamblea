import { FormRegistration } from "../Components"

export const RegistrationPage = () => {
  return (
    <>
      <div className="Regis_divTitle">
        <h1 className="Regis_title">XV ASAMBLEA INTERNACIONAL DE LARINGECTOMIZADOS</h1>
        <h2 className="Regis_subtitle">INSCRIPCIÓN</h2>
      </div>
      <hr />
      <div className="backgroundPages">
        <div className="cardsPrinci">
         <FormRegistration/>
        </div>
      </div>
    </>
  )
}
