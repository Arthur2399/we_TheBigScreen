import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { TheBigScreenApp } from './TheBigScreenApp';
import './styles/Global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TheBigScreenApp/>
    </BrowserRouter>
  </React.StrictMode>
)
