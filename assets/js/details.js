let apiUrl = "https://mindhub-xj03.onrender.com/api/amazing"

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const events = data.events
        console.log(events);
        const queryString = location.search
        const params = new URLSearchParams(queryString)
        const id = params.get("id")
        const card = data.events.find(evento => evento._id == id)
        console.log(card);
        mostrarCartas(card)

    })
    .catch(error => console.log(error))
function mostrarCartas(objeto) {
    const div = document.querySelector(".details")
    div.innerHTML = `<div class="card" style="width:20rem;">
    <img src=${objeto.image} class="card-img-top " alt="...">
    <div class="card-body text_center">
        <h5 class="card-title title_card">${objeto.name}</h5>
        <p class="card-text">Date: ${objeto.date}</p>
       <p class="card-text">Description: ${objeto.description}</p>
       <p class="card-text">Category: ${objeto.category}</p>
       <p class="card-text">Place: ${objeto.place}</p>
       <p class="card-text">Capacity: ${objeto.capacity}</p>
       <p class="card-text">Assistance: ${objeto.assistance}</p>
       <h4 class="card-text">Price: $ ${objeto.price}</h4>
      
        <a class="btn btn-primary" onclick="history.go(-1);"> Go back</a>
       </div>
    `}


