import { Route, Routes } from "react-router-dom";

import { ContactPage, HomePage, InfoPage, MapPage, RegistrationPage, CordobaPage, FotoPage } from "../Pages";



export const AppRouter = () => {
  return (
    <div className="back">
        <Routes>
            <Route path="inscripcion" element={<RegistrationPage/>}/>
            <Route path="informacion" element={<InfoPage/>}/>
            <Route path="mapa" element={<MapPage/>}/>
            <Route path="contacto" element={<ContactPage/>}/>
            <Route path="cordoba" element={<CordobaPage/>}/>
            <Route path="fotos" element={<FotoPage/>}/>

            <Route path="/" element={<HomePage/>}/>
            <Route path="/*" element={ <HomePage/>}/>
        </Routes>
    </div>
  )
}
