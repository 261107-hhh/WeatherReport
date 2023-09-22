// import './App.css';
import './main.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Views/Home';
import Weather from './Views/Weather';
import About from './Views/About';
import NotFound from './Views/NotFound'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
       <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/weather" element = {<Weather/>}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "*" element = {<NotFound/>}/>
       </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
// Modules

// const express = require('express');
// const path = require('path');
// const hbs = require('hbs');
// // Method and Variable
// const app = express();
// const serverless = require('serverless-http');
// const route = express.Router();
// // const port = process.env.PORT || 8000;

// // Static path for our public folder
// const staticPath = path.join(__dirname, "../public");
// app.use(express.static(staticPath));
// // For Dynamic content We use hbs view engine. 

// const partialPath = path.join(__dirname, "../template/partial");
// const templatePath = path.join(__dirname, "../template/views");


// app.set('view engine', 'hbs');
// app.set('views', templatePath);
// hbs.registerPartials(partialPath);

// // Routing
// app.get('', (req, res) => {
//     res.render('index');
//     // res.send();
// })
// app.get('/about', (req, res) => {
//     res.render('about');
// })
// app.get('/weather', (req, res) => {
//     res.render("weather");
// })
// app.get('*', (req, res) => {
//     res.render("404Error", {
//         errMsg: "Oops! page not found"
//     });
// })

// // Listning to the server
// // app.listen(port, (req, res) => {
// //     console.log(`listning to the port ${port}`);
// // })

// app.use('/.netlify/function/api', router);
// module.exports.handler = serverless(app);