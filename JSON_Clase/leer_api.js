const axios = require('axios')
const url = 'https://jsonplaceholder.typicode.com/users/'

 
axios.get(url, {proxy: {host:  'webproxy.stl.es', port: '3128'}} ).then(
    (response) => {
        let data = response.data
        console.log(typeof data)
    }
).catch(
    error => console.log(error)
)

