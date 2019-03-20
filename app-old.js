
const http = require('http');

http.createServer((req, res) => {
    let persona = {
        nombre: 'Luis Felipe',
        apellido: 'Muñoz Flores',
        edad: '20'
    };
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(persona));
    res.end();
})
.listen(8080);

console.log("Escuchando el puerto 8080");