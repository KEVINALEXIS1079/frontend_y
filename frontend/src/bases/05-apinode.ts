import axios from 'axios'

export class Usuario {
    //PROPIEDADES
    //METODOS
    constructor(

        public dni_usuario?: number,
        public nombre?: string,
        public apellido?: string,
        public telefono?: string,
        public email?: string,
        public contraseña?: string,
        public estado?: string,
        public id_rol?: number

    ) { }

async registrarUsuario(): Promise<void> {
    try {
        const { data } = await axios.post('http://localhost:3000/usuario/registrar', {
            dni_usuario_pk: this.dni_usuario,
            nombre_usuario: this.nombre,
            apellido_usuario: this.apellido,
            telefono_usuario: this.telefono,
            correo_usuario: this.email,
            contrasena_usuario: this.contraseña,
            estado_usuario: this.estado,
            id_rol_fk: this.id_rol
        });
        console.log(`Registrar usuario ${JSON.stringify(data)}`);
    } catch (error) {
        console.error('Error al registrar usuario:', error);
    }
}

async ActualizarUsuario(): Promise<void> {
    try {
        const { data } = await axios.put(`http://localhost:3000/usuario/actualizar/${this.dni_usuario}`, {
            dni_usuario_pk: this.dni_usuario,
            nombre_usuario: this.nombre,
            apellido_usuario: this.apellido,
            telefono_usuario: this.telefono,
            correo_usuario: this.email,
            contrasena_usuario: this.contraseña,
            estado_usuario: this.estado,
            id_rol_fk: this.id_rol
        });
        console.log(`Actualizar usuario ${JSON.stringify(data)}`);
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
    }
}

async listarUsuarios(): Promise<void> {
    const btnListar = document.getElementById('btn-listar');
    const contenedor = document.getElementById('crud-s');

    btnListar?.addEventListener('click', async () => {
        const { data } = await axios.get('http://localhost:3000/usuario/listar');
        if (contenedor) {
            contenedor.innerHTML = `<div class="tabla-contenedor">
  <table class="tabla-usuarios">
    <thead>
      <tr>
        <th>DNI</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      ${data.map((usuario: any) => `
        <tr>
          <td>${usuario.dni_usuario_pk}</td>
          <td>${usuario.nombre_usuario}</td>
          <td>${usuario.apellido_usuario}</td>
          <td>${usuario.correo_usuario || ''}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>
</div>

            `;
        }
    });
}

listarUsuarioPorId(dni_usuario_pk: number): void {
    axios.get(`http://localhost:3000/usuario/buscar/${dni_usuario_pk}`).then(response => {
        const usuarios = response.data;
        const contenedor = document.getElementById('crud-usuario');
        if (contenedor && Array.isArray(usuarios) && usuarios.length > 0) {
            const usuario = usuarios[0];
            contenedor.innerHTML = `
                <div>
                    <strong>DNI:</strong> ${usuario.dni_usuario_pk}<br>
                    <strong>Nombre:</strong> ${usuario.nombre_usuario}<br>
                    <strong>Apellido:</strong> ${usuario.apellido_usuario}<br>
                    <strong>Email:</strong> ${usuario.correo_usuario || ''}
                </div>
            `;
        } else {
            contenedor!.innerHTML = `<p>No se encontró el usuario.</p>`;
        }
    });
}

eliminarUsuarioPorId(dni_usuario_pk: number): void {
    axios.delete(`http://localhost:3000/usuario/eliminar/${dni_usuario_pk}`).then(response => {
        console.log('Usuario eliminado:', response.data);
        const contenedor = document.getElementById('crud-usuario');
        if (contenedor) {
            contenedor.innerHTML = `<p>Usuario eliminado con éxito.</p>`;
        }
    }).catch(error => {
        console.error('Error al eliminar el usuario:', error);
    });
}

}


export class Rol {
    constructor(
        public id_rol_pk?: number,
        public nombre_rol?: string
    ) { }

    async registrarRol(): Promise<void> {
        try {
            const { data } = await axios.post('http://localhost:3000/rol/registrar', {
                id_rol_pk: this.id_rol_pk,
                nombre_rol: this.nombre_rol
            });
            console.log(`Rol registrado: ${JSON.stringify(data)}`);
        } catch (error) {
            console.error('Error al registrar rol:', error);
        }
    }

    async actualizarRol(): Promise<void> {
        try {
            const { data } = await axios.put(`http://localhost:3000/rol/actualizar/${this.id_rol_pk}`, {
                id_rol_pk: this.id_rol_pk,
                nombre_rol: this.nombre_rol
            });
            console.log(`Rol actualizado: ${JSON.stringify(data)}`);
        } catch (error) {
            console.error('Error al actualizar rol:', error);
        }
    }

    async listarRoles(): Promise<void> {
        const contenedor = document.getElementById('crud-rol');
        try {
            const { data } = await axios.get('http://localhost:3000/rol/listar');
            if (contenedor) {
                contenedor.innerHTML = `
                    <div class="lista-contenedor">
  <ul class="lista-roles">
    ${data.map((rol: any) => `
      <li>
        <span><strong>ID:</strong> ${rol.id_rol_pk}</span>
        <span><strong>Nombre:</strong> ${rol.nombre_rol}</span>
      </li>
    `).join('')}
  </ul>
</div>

                `;
            }
        } catch (error) {
            console.error('Error al listar roles:', error);
        }
    }

    listarRolPorId(id_rol_pk: number): void {
        axios.get(`http://localhost:3000/rol/buscar/${id_rol_pk}`).then(response => {
            const roles = response.data;
            const contenedor = document.getElementById('crud-rol');
            if (contenedor && Array.isArray(roles) && roles.length > 0) {
                const rol = roles[0];
                contenedor.innerHTML = `
                    <div>
                        <strong>ID:</strong> ${rol.id_rol_pk}<br>
                        <strong>Nombre:</strong> ${rol.nombre_rol}
                    </div>
                `;
            } else {
                contenedor!.innerHTML = `<p>No se encontró el rol.</p>`;
            }
        }).catch(error => {
            console.error('Error al buscar rol:', error);
        });
    }

    eliminarRolPorId(id_rol_pk: number): void {
        axios.delete(`http://localhost:3000/rol/eliminar/${id_rol_pk}`).then(response => {
            console.log('Rol eliminado:', response.data);
            const contenedor = document.getElementById('crud-rol');
            if (contenedor) {
                contenedor.innerHTML = `<p>Rol eliminado con éxito.</p>`;
            }
        }).catch(error => {
            console.error('Error al eliminar el rol:', error);
        });
    }
}
const listar = new Usuario(0, '', '', '', '', '', '', 0);
const listarRoles = new Rol(0, '');
export { listar, listarRoles };
export default Usuario;