console.log("activo")

var contenido = document.getElementById("contenido")
function traer() {
    fetch ('https://randomuser.me/api/')
    .then(data=> data.json())
    .then(data => {
        
        contenido.innerHTML = `
            <img src="${data.results['0'].picture.large}" alt="" class="img-fluid rounded-circle">
            <p class="font-weight-bold">First Name : ${data.results['0'].name.first}</p>
            <p class="font-weight-bold">Last Name : ${data.results['0'].name.last}</p>
            

        `
    })
}
