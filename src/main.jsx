import { createRoot } from "react-dom/client";
import './index.css';
import { BrowserRouter } from "react-router-dom";

// App
import App from './App';

let root = document.getElementById('root');

createRoot(root).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);