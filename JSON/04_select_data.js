'use strict'

const URL = 'https://jsonplaceholder.typicode.com/users'
const axios = require('axios')


axios.get(URL)
  .then(response => {
   processData(response)
  })
  .catch((error) => {
    console.log(error);
  });

  // Limitamos la salida a la lista de usuarios y correos

  const processData = response => {
  /*   [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: [Object],
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: [Object]
      }... ] */

      const result = response.data.map(
        item => {return {
                          username: item.username,
                          email: item.email
                        }
                }   
      )
       console.log(result);
  }