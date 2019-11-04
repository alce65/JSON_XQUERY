'use strict'

const URL = 'https://jsonplaceholder.typicode.com/users'
const axios = require('axios')


axios.get(URL)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });