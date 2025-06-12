//backend:interface={hereda en clases && se pueden realizar uniones} / frontend:type={uso de diferentes tipos y mas flexible}

/* type Usuario = {
    nombre: string;
    edad: number;
    activo: boolean;
    telefono?: string;
}*/



interface Usuario{
    nombre:string;
    edad:number;
    activo:boolean;
    telefono?:string;
}

export const usuario: Usuario = {
    nombre: "marto",
    edad: 34,
    activo: true
} 

const alexis:Usuario= {
    nombre:"conconoi",
    edad:17,
    activo:true
}

export const user:Usuario[]=[]

user.push(alexis);

console.log(user)