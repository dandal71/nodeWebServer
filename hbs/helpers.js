const hbs = require('express-hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    return texto.substring(0, 1).toUpperCase() + texto.substring(1, texto.length).toLowerCase();

});