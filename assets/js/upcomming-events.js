const card_upcomming = document.getElementById('card_upcomming')
let fragment = document.createDocumentFragment()
const actualDate = Date.parse(data.currentDate)
for (let element of data.events) {
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
                <a href="./details.html" class="btn btn-primary">Go Details</a>               
             </div>}`
        fragment.appendChild(div)
    }
}
card_upcomming.appendChild(fragment)
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

    div.innerHTML = `<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
    <label class="form-check-label" for="inlineRadio1">${element}</label>`

    checkbox.appendChild(div)

} formCat.appendChild(checkbox)
