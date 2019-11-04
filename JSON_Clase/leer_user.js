const axios = require('axios')
const url = 'https://jsonplaceholder.typicode.com/users/'
const readline = require('readline')
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Selecciona un usuario [1-10]', (user) => {
    let urlUser = url + user
    axios.get(urlUser, {proxy: {host:  'webproxy.stl.es', port: '3128'}})
    .then( resp => {
        let file = `./user${user}.json`
        fs.writeFileSync(file, JOSN.stringify(resp.data))
        console.log(resp.data)
    })
    .catch ( error => console.log(error))
    rl.close()
})
