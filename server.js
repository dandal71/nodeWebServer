const express = require('express');
const hbs = require('express-hbs');
require('./hbs/helpers'); //Con esto inclimos los helpers de hbs

const app = express();

//Definimos la carpeta pública a través de un middleware.   
app.use(express.static(__dirname + "/public"));


/***Configura el engine de plantila hbs****/
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/parciales'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
/**** FIN CONFIGURACION HBS */

//Lee una variable de entorno. A nivel local no va a existir entonces usamos 3000
//en heroku obtendremos el puerto que se asignó a la apliacción
const port = process.env.PORT || 3000;

/**
 * Definiciones de rutas
 */

app.get('/saludo', (req, res) => {
    res.send('Hola Mundo')
})

app.get('/data', (req, res) => {
    let salida = { id: 01, nombre: 'Daniel Dalmagro', estado: 1 };
    res.send(salida)
})

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Daniel Dalmagro',
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})


app.listen(port, () => {
    console.group(`Server corriendo en el puerto ${port}`);
});