const queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get ("id")
const card = data.events.find(evento => evento._id == id)

function mostrarCartas (){
    const div = document.querySelector(".details")
div.innerHTML = `<div class="card" style="width:20rem;">
<img src=${card.image} class="card-img-top " alt="...">
<div class="card-body text_center">
    <h5 class="card-title title_card">${card.name}</h5>
    <p class="card-text">Date: ${card.date}</p>
   <p class="card-text">Description: ${card.description}</p>
   <p class="card-text">Category: ${card.category}</p>
   <p class="card-text">Place: ${card.place}</p>
   <p class="card-text">Capacity: ${card.capacity}</p>
   <p class="card-text">Assistance: ${card.assistance}</p>
   <h4 class="card-text">Price: ${card.price}</h4>
  
    <a class="btn btn-primary" onclick="history.go(-1);"> Go back</a>
   </div>
`}
mostrarCartas()