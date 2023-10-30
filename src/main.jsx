import React from 'react'
import ReactDOM from 'react-dom/client'



import './styles.css'
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './Components';
import { AppRouter } from './router/AppRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>,
)
