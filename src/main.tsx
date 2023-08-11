import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Page/PageSignIn/PageSignIn.tsx';
import Dashboard from './Page/PageLotto/dashboard/Dashboard.tsx';
import ArrestForm from './Page/PageLotto/dashboard/ArrestForm.tsx';
import PoliceDailyLog from './Page/PageLotto/dashboard/PoliceDailyLog.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/arrestforom" element={<ArrestForm />} />
            <Route path="/policedailylog" element={<PoliceDailyLog />} />
          </Routes>
        </BrowserRouter>            
  </React.StrictMode>,
)

