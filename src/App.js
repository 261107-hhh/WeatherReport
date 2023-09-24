import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './main.css'
import Home from './Views/Home';
import Weather from './Views/Weather';
import About from './Views/About';
import NotFound from './Views/NotFound'
import Navbar from "./Partial/Navbar";
import Footer from "./Partial/Footer";


function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/weather", element: <Weather /> },
      { path: "/about", element: <About /> },
      { path: "/*", element: <NotFound /> },
      // { path: "/user/update", element: <Update /> },
      // { path: "/donate", element: <PaymentGateway /> },
      // { path: "/employ/edit/:id", element: <Employ /> },
      // { path: "/employ/add", element: <AddEmp /> },
    ],
  },
  // {
  //   path: "/Register",
  //   element: <Register />,
  // },
  // {
  //   path: "/Login",
  //   element: <Login />,
  // },
  // {
  //   path: "/user/dashboard",
  //   element: <Dashboard />,
  // },
]);




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />

        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter> */}
      </header>
    </div>
  );
}

export default App;