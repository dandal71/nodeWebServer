const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = { id: 01, nombre: 'Daniel Dalmagro', estado: 1 };

    res.write(JSON.stringify(salida));

    // res.write('Hola Mundo'); devuelve una pagina html
    res.end();
}).listen(9090);

console.log("Escuchando en puerto 9090");