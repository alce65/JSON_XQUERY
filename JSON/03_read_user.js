'use strict';

const URL = 'https://jsonplaceholder.typicode.com/users/'
const axios = require('axios')
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Numero de usuario  (1-10) ', (user) => {
    if (+user > 0 && +user  <= 10) {
        getUser (user)
    } else {
        console.log(`No existe un usuario ${answer}`);
    }
  rl.close();
});

const getUser = user => {
  axios.get(URL+user)
    .then(response => {
      console.log(response.data);
      writeData(user, response.data)
    })
    .catch(error => {
      console.log(error);
    });
}

const writeData = (user, oData) => {
  const data = JSON.stringify(oData)
  const file =`user-${user}.json` 
  fs.writeFileSync(file, data);
}