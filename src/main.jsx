import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Header />
          <App />
          <Footer />
      </BrowserRouter>
  </React.StrictMode>,
)
