import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { TheBigScreenApp } from './TheBigScreenApp';
import 'animate.css';
import './styles/Global.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <TheBigScreenApp/>
    </BrowserRouter>
)
