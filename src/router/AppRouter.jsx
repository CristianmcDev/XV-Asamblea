import { Route, Routes } from "react-router-dom";


import { ContactPage, HomePage, InfoPage, MapPage, NewsPage, RegistrationPage } from "../Pages";



export const AppRouter = () => {
  return (
    <div className="back">
        <Routes>
            <Route path="inscripcion" element={<RegistrationPage/>}/>
            <Route path="informacion" element={<InfoPage/>}/>
            <Route path="mapa" element={<MapPage/>}/>
            <Route path="noticias" element={<NewsPage/>}/>
            <Route path="contacto" element={<ContactPage/>}/>

            <Route path="/" element={<HomePage/>}/>
            <Route path="/*" element={ <HomePage/>}/>
        </Routes>
    </div>
  )
}
