const card = document.getElementById('card')
console.log(card)

let fragment = document.createDocumentFragment()

for(let element of data.events)
{
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
    console.log(element)
    fragment.appendChild(div)
}
card.appendChild(fragment)