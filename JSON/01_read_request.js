'use strict';
const fs = require('fs');

const rawdata = fs.readFileSync('./request.json');
const pedido = JSON.parse(rawdata);

// para ficheros .json, node puede hacer rirectamente
// un require que parsea el objeto json
// const pedido = require('./request.json');

// acceso a un objeto
console.log(pedido);
// acceso a los items de un array
console.log(pedido.LineItems[0].Part)
console.log(pedido.LineItems[1].Part)