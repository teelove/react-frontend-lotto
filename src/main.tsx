import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Page/PageSignIn/PageSignIn.tsx';
import PageLotto from './Page/PageLotto/PageLotto.tsx';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/pagelotto" element={<PageLotto />} />
          </Routes>
        </BrowserRouter>
    
  </React.StrictMode>,
)
