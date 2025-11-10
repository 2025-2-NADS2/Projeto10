import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
// 💡 IMPORTAÇÃO NECESSÁRIA PARA O SEU HEADER FUNCIONAR
import { BrowserRouter } from 'react-router-dom' 
// import { AuthProvider } from './context/AuthContext.jsx' // Mantido comentado

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 🚀 ENVOLVE A APLICAÇÃO PARA ATIVAR OS COMPONENTES <Link> e <HashLink> */}
    <BrowserRouter>
      {/* <AuthProvider>  */}
        <App />
      {/* </AuthProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
)