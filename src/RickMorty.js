// Importacion del axios 
import axios from "axios";
// Crando clase constructora
class Personajes{
    constructor(nombre, id, genero, especies, estado, imagen) {
        this.nombre = nombre
        this.id = id
        this.genero = genero
        this.especies = especies
        this.estado = estado
        this.imagen = imagen
    }
}
// funcion flecha para crear promesa y **async await
const rickMorty = (()=>{
    return new Promise(async(resolve, reject) => {
        try {
            const baseUrl = await axios.get("https://rickandmortyapi.com/api/character");
            let datos = baseUrl.data.results
            let personajes = []
            datos.forEach(e => {
                personajes.push(new Personajes(e.name, e.id, e.gender, e.species, e.status, e.image))
                
            });
            console.log(personajes);
            resolve(personajes)
        } catch (error) {
            reject(`La embarrada (en la Promesa de rickMorty):${error}`)
        }
    })
})();
export default rickMorty