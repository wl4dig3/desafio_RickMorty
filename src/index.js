import rickMorty from './RickMorty'
import $ from 'jquery'

rickMorty.then((personajes)=>{
    const person = document.getElementById('personajes')
    personajes.forEach(element => {
        person.innerHTML += ` 
        <div class="media">
        <img id="${element.id}" width="100" class="align-self-start mr-3 img-fluid rounded-circle" src="${element.imagen}" alt="Generic placeholder image">
        <div class="media-body ${element.id}">
          <h5 class="mt-1 h5 text-light"><small>${element.nombre}</small></h5>
          <p class="h6 text-light"><small>${element.genero}</small></p>
          <p class="h6 text-light"><small>${element.especies}</small></p>
          <p class="h6 text-light"><small>${element.estado}</small></p>
        </div>
      </div>
        
        `
        
    });
    // funcion con query para mostrar info de los personajes
    $('#personajes').click((e)=>{
        $(`.${e.target.id}`).css('display', 'block')
     });
     
     console.log(personajes)
})