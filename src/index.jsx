import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from "./routes";
import { Header } from './components/header';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <Header />
    <Routes />
  </React.StrictMode>
);