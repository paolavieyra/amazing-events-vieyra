let apiUrl = "https://mindhub-xj03.onrender.com/api/amazing"

let inputText = ''
const card = document.getElementById('card_upcomming')
//console.log(card)

//funcion async
async function traerDatos() {
    try {
        const response = await fetch(apiUrl);
        const datos = await response.json();
        let eventos = datos.events;
        categorias(eventos)
        const pastEvents = eventos.filter(elemento => new Date(elemento.date) > new Date(datos.currentDate))
        traerCartas(pastEvents, card)
        //agregar escuchador de eventos categorias
        let checkboxs = document.querySelectorAll('input[type= checkbox]')
        console.log(checkboxs);
        checkboxs.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                inputsChequeados = Array.from(checkboxs).filter(checkbox => checkbox.checked).map(input => input.value)
                //console.log(inputsChequeados);
                filtrosCruzados(eventos)
            }
            )

        })
        const search_input = document.getElementById("search_input")
        console.log(search_input)
        search_input.addEventListener('keyup', () => {
            inputText = search_input.value
            //console.log(texto(inputText))
            filtrosCruzados(eventos)
        })
    }
    catch (error) {
        console.log(error);

    }
}
traerDatos()

function traerCartas(arrayCards, container) {

    let fragment = document.createDocumentFragment()
    container.innerHTML = ``
    if (inputText != "" && arraySearch.length == 0) {
        let div = document.createElement('div')
        div.classList.add("card")
        div.style.width = "18rem"
        div.innerHTML = `<h3>Sorry ${inputText} it is not in our catalog of events</h3>`

        container.appendChild(div)
    }
    for (let element of arrayCards) {
        let div = document.createElement('div')
        div.classList.add("card")
        div.style.width = "18rem"
        div.innerHTML = `<img src=${element.image} class="card-img-top " alt="...">
             <div class="card-body text_center">
                 <h5 class="card-title title_card">${element.name}</h5>
                <p class="card-text">${element.description}</p>
                <h4>Price</h4>
                <h4>$${element.price}</h4>
            <a href="./details.html?id=${element._id}" class="btn btn-primary">Go Details</a>           
             </div>`

        fragment.appendChild(div)

    } container.appendChild(fragment)
}
//traerCartas(eventos, card)

//hacer categorys dinamicas
function categorias(array) {
    const arreglo = []
    for (let element of array) {
        let categoria = element.category
        if (!arreglo.includes(categoria)) {
            arreglo.push(categoria)
        }
    } console.log(arreglo);

    const formCat = document.getElementById('formCat')
    let checkbox = document.createDocumentFragment()
    for (let element of arreglo) {
        let div = document.createElement('div')
        div.classList.add("formCat")

        div.innerHTML = `<input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="${element}" value="${element}">
    <label class="form-check-label" for="${element}">${element}</label>`

        checkbox.appendChild(div)

    } formCat.appendChild(checkbox)

}

function verificarSeleccion(arrayString, arrayDeObjetos) {
    if (arrayString.length == 0) return arrayDeObjetos

    let eventosFiltrados = arrayDeObjetos.filter(evento => arrayString.includes(evento.category))
    return eventosFiltrados
    //console.log(eventosFiltrados);
}

//agregar escuchar eventos de search

let inputsChequeados = []
let arraySearch = []




function texto(valor, arrayDeObjetos) {
    if (valor == "") return arrayDeObjetos
    return arrayDeObjetos.filter(elemento => elemento.name.toLowerCase().includes(valor.toLowerCase().trim()))

}
//filtros cruzados

function filtrosCruzados(array) {
    let nuevaSeleccion = verificarSeleccion(inputsChequeados, array)
    console.log(nuevaSeleccion);

    arraySearch = texto(inputText, nuevaSeleccion)
    console.log(arraySearch);
    traerCartas(arraySearch, card)
}




/* let inputText = ''
const card_upcomming = document.getElementById('card_upcomming')
function traerCartas (arrayCards, container) {
let fragment = document.createDocumentFragment()
container.innerHTML = ``

if (inputText != "" && arraySearch.length == 0 ){
    let div = document.createElement('div')
        div.classList.add("card")
        div.style.width = "18rem"
        div.innerHTML = `<h3>Sorry ${inputText} it is not in our catalog of events</h3>`
        container.appendChild(div)
}
const actualDate = Date.parse(data.currentDate)
for (let element of arrayCards) {
    let futureDate = Date.parse(element.date)
    if (futureDate > actualDate) {
        let div = document.createElement('div')
        div.classList.add("card")
        div.style.width = "18rem"
        div.innerHTML = `<img src=${element.image} class="card-img-top " alt="...">
             <div class="card-body text_center">
                 <h5 class="card-title title_card">${element.name}</h5>
                <p class="card-text">${element.description}</p>
                <h4>Price</h4>
                <h4>$${element.price}</h4>
                <a href="./details.html?id=${element._id}" class="btn btn-primary">Go Details</a>               
             </div>}`
        fragment.appendChild(div)
    }
}
card_upcomming.appendChild(fragment)
}traerCartas(data.events, card_upcomming)

//hacer categorys dinamicas
const arreglo = []
for (let element of data.events) {
    let categoria = element.category
    if (!arreglo.includes(categoria)) {
        arreglo.push(categoria)
    }
} console.log(arreglo);

const formCat = document.getElementById('formCat')
let checkbox = document.createDocumentFragment()
for (let element of arreglo) {
    let div = document.createElement('div')
    div.classList.add("formCat")

    div.innerHTML = `<input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="${element}" value="${element}">
    <label class="form-check-label" for="${element}">${element}</label>`

    checkbox.appendChild(div)

} formCat.appendChild(checkbox)


//agregar escuchador de eventos categorias
let checkboxs = document.querySelectorAll('input[type= checkbox]')
console.log(checkboxs);
checkboxs.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        inputsChequeados = Array.from(checkboxs).filter(checkbox => checkbox.checked).map(input => input.value)
        //console.log(inputsChequeados);
        filtrosCruzados(data.events)
    }
    )
})
function verificarSeleccion(arrayString, arrayDeObjetos) {
    if (arrayString.length == 0) return arrayDeObjetos

    let eventosFiltrados = arrayDeObjetos.filter(evento => arrayString.includes(evento.category))
    return eventosFiltrados
    //console.log(eventosFiltrados);
}

//agregar escuchar eventos de search

let inputsChequeados = []
let arraySearch = []

const search_input = document.getElementById("search_input")
console.log(search_input)

search_input.addEventListener('keyup', () => {
    inputText = search_input.value
    //console.log(texto(inputText))
    filtrosCruzados(data.events)
})
function texto(valor, arrayDeObjetos) {
    if (valor == "") return arrayDeObjetos
    return arrayDeObjetos.filter(elemento => elemento.name.toLowerCase().includes(valor.toLowerCase().trim()))

}
//filtros cruzados

function filtrosCruzados(array) {
    let nuevaSeleccion = verificarSeleccion(inputsChequeados, array)
    console.log(nuevaSeleccion);
    arraySearch = texto(inputText, nuevaSeleccion)
    console.log(arraySearch);
    traerCartas(arraySearch, card_upcomming)
} */
