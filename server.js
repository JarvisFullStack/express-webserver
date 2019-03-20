var express = require('express')
const hbs = require('hbs');
require('./hbs/helpers/helpers');
const port = process.env.PORT || 3000;
var app = express()
 
app.use(express.static(__dirname+'/public'));
//EXPRESS hbs ENGINE
hbs.registerPartials(__dirname+'/views/parciales');
app.set('view engine', 'hbs');


//helpers

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'lUis felIpe'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/api/datos',  (req, res) =>  {
    let personas = [{
        nombre: 'Luis Felipe',
        apellido: 'Muñoz Flores',
        edad: '20'
    }, {
        nombre: 'Jose Manuel',
        apellido: 'Lopez Nuñez',
        edad: '21'
    }
    ];
    
    res.send(personas);
  });


 
app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto '+port);
});