//declaración array
export const user = []
//Tipos de arreglos

let numeros: number[]=[1,2,3,4,5,6,7]
let nombres: string[]=["kevin", "alexis"]

//tipo array

let numbers: Array<number>=[1,2,3,4,5,6,7]
let names: Array<string>=["alexis","aaaa"]

//array con uniones o multiples datos

const mezcla: (number|string)[]=[1,"Hola", 2]

//arreglos objetos

interface Usuario{
    nombre: string;
    edad: number;
}

let usuarios: Usuario[]=[
    {nombre:"Andrés", edad:17},
    {nombre:"Luis", edad:50}
]


