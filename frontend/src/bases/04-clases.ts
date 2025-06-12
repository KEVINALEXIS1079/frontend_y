import axios from 'axios'

export class Usuario {
    //PROPIEDADES
    //METODOS
    constructor(
        public id: number,
        public nombre: string,
        public edad: number
    ) { }
    
    saludar(): string {
        let msg = (`Hola, ${this.nombre}`)
        return msg;
    }
    async obtenerNombreCapitulo(): Promise<void> {
        const { data } = await axios.get('https://rickandmortyapi.com/api/character/2');
        console.log(`Nombre del capítulo: ${data.name}`);
    }
    async obtenerurlCapitulo(): Promise<void> {
        const { data } = await axios.get('https://rickandmortyapi.com/api/character/2');
        console.log(`URL del capítulo: ${data.url}`);
    }
    async mostrarImagen(): Promise<void> {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character/2');
    const contenedor = document.getElementById('imagen-personaje');

    if (contenedor) {
      contenedor.innerHTML = `
        <p>Nombre del capitulo: ${data.name}</p>
        <p>URL del capitulo: ${data.url}</p>
        <img src="${data.image}" alt="Personaje de Rick and Morty" class="img-personaje">
      `;
    }
  }
}

export const userClass = new Usuario(1, 'Diego', 34);

