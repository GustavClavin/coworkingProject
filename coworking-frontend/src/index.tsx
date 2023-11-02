import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { UserProvider } from "./utils/contexts/UserContext";
import { ModalProvider } from "./utils/contexts/ModalContext";
import { CoworkProvider } from "./utils/contexts/CoworkContext";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserProvider>
    <ModalProvider>
    <CoworkProvider>
      <App />
    </CoworkProvider>
    </ModalProvider>  
    </UserProvider>
  </React.StrictMode>
);


