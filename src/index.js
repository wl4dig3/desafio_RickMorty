import rickMorty from './RickMorty'
import $ from 'jquery'

rickMorty.then((personajes)=>{
    const person = document.getElementById('personajes')
    personajes.forEach(element => {
        person.innerHTML += ` 
        <div class="media">
        <img id="${element.id}" class="align-self-start mr-3" src="${element.imagen}" alt="Generic placeholder image">
        <div class="media-body ${element.id}">
          <h5 class="mt-1">${element.nombre}</h5>
          <p>${element.genero}</p>
          <p>${element.especies}</p>
          <p>${element.estado}</p>
        </div>
      </div>
        
        `
        
    });
    $('#personajes').click((e)=>{
        $(`.${e.target.id}`).css('display', 'block')
     });
     console.log(personajes)
})