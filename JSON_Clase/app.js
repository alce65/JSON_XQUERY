function main() {
    const urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
    let input = document.querySelector('#clave')
    let btn = document.querySelector('#buscar')
    btn.addEventListener('click', onClick)


    let users = ['Pepe', 'Juan']
    localStorage.setItem('usuarios', JSON.stringify(users))

    function onClick() {
        const url = urlBase + input.value
        console.log(url)
        fetch(url, {method: 'GET'}).then(
            response => {response.json()}
        ).then(
            data => {
                console.log(data)
                localStorage.setItem('libros', JSON.stringify(data))
            }
        )
    }
}

document.addEventListener('DOMContentLoaded', main)
