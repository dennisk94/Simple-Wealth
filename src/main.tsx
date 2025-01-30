// import { StrictMode } from 'react'
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
// import { BrowserRouter, Routes, Route } from 'react-router';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { Provider } from "react-redux";
import store from './store/userData.tsx';
import App from './Routes/App.tsx'
import RootLayout from "./Routes/RootLayout.tsx";
import About from "./Pages/About.tsx";


const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      // { path: "*", element: <PageNotFound /> },
      { path: "/", element: <App /> },
      { path: "/about", element: <About /> },
      // { path: "/work/:slug", element: <SingleProject /> },
    ]
  },
]);
const root = document.getElementById("root");


// ReactDOM.createRoot(root).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )
ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>

)



// ReactDOM.createRoot(root).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//   </BrowserRouter>
// );