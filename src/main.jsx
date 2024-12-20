
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import Mainpage from './assets/Mainpage/Mainpage.jsx'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Mainpage />
//   </StrictMode>,
// )
import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import App from "./App";
// import { store } from "./store/store";
import "./index.css";

// Provide the Redux store to the React app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={store}>
      <App />
    </Provider> */}
    <App/>
  </StrictMode>
);

