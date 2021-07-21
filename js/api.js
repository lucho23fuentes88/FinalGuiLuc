const botonBuscar = document.querySelector("#button-addon2");

botonBuscar.addEventListener("click", ()=>{
    var q = document.getElementsByClassName("form-control").value; // PROBLEMAS DE SCOPE?
    //console.log ("hizo click!"); 
    apiRequest();
})

const apiRequest = async()=>{
    const apiId = "6d774005";
    const apiKey = "87c6358c9e48c104eac304844ab8bbb9";
    const response = await fetch(`https://api.edamam.com/search?app_id=${apiId}&app_key=${apiKey}&q=${q}`);
    //console.log(response)
    var data = await response.json();
    console.log(data); //control
    apiData(data);
};

//For para recorrer cada elemento del array y devolver las cards.
function apiData(data){
    for (let i=0; i < 10; i++) { 
        //Card de una receta
        document.querySelector("#receta").innerHTML += `
        <div class="card" style="max-width: 950px;">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${data.hits[i].recipe.image}" alt="Imagen ilustrativa">
                </div>
                <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title">${data.hits[i].recipe.label}</h5>
                        <p class="card-text">Porciones: ${data.hits[i].recipe.yield} </p>
                        <p class="card-text">Ingredientes: <br>${data.hits[i].recipe.ingredientLines}</p>
                        <p class="card-text">calorias: ${data.hits[i].recipe.calories}</p>
                        <p class="card-text">Tiempo de preparacion: ${data.hits[i].recipe.totalTime} min</p>
                        <p class="card-text"><small class="text-muted">Sitio: ${data.hits[i].recipe.source}</small></p>
                        <p class="card-text"><small class="text-muted">Etiquetas: <br> ${data.hits[i].recipe.healthLabels}</small></p>
                        <a href="${data.hits[i].recipe.url}" class="btn btn-primary" target="_blank">Ver Receta</a>
                    </div>
                </div>
            </div>
        </div>
    `};
};

