import { FormContact } from "../Components";

export const ContactPage = () => {
  return (
    <>
      <div className="Regis_divTitle">
        <h1 className="Regis_title">XV ASAMBLEA INTERNACIONAL DE LARINGECTOMIZADOS</h1>
        <h2 className="Regis_subtitle">Contacto</h2>
      </div>
      <hr />
      <div className="backgroundPages">
        <div className="cardsPrinci">
          <FormContact/>
        </div>
      </div>
    </>
  )
}
