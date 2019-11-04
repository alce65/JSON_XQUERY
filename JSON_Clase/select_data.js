const axios = require('axios')
const url = 'https://jsonplaceholder.typicode.com/users/'

 
axios.get(url, {proxy: {host:  'webproxy.stl.es', port: '3128'}} ).then(
    (response) => {
        let data = response.data.map(
            (item) => {return {
                username: item.username,
                email: item.email
            } }
        )
        console.log(data)
    }
).catch(
    error => console.log(error)
)