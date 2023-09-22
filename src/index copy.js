// // Modules
// const express = require('express');
// const path = require('path');
// const hbs = require('hbs');
// // Method and Variable
// const app = express();
// const port = process.env.PORT || 8000;

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
// app.listen(port, (req, res) => {
//     console.log(`listning to the port ${port}`);
// })