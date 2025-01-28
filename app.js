//Import Express
import express from "express";
//Instatiantes app
const app = express();

app.use(express.static('public'));

//Define a port number for our server to listen on
const PORT = 3000;
//Define default route for home page
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

//Define thank you route
app.get('/thankyou', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/thankyou.html`)
})
//Tell the server to listen on specified PORT
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

