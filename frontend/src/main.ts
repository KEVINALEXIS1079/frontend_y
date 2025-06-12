import './style.css';

import { name } from './bases/01-types.ts';
import { usuario } from './bases/02-objectsInterfaces.ts';
import { user } from './bases/02-objectsInterfaces.ts';
import { userClass } from './bases/04-clases.ts';
import { Usuario, listar } from './bases/05-apinode';
const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <style>
    .sidebar {
      width: 220px;
      background: #222;
      color: #fff;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      padding: 2rem 1rem 1rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .sidebar h2 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: #00bfff;
    }
    .sidebar button {
      background: none;
      border: none;
      color: #fff;
      padding: 0.7rem 1rem;
      text-align: left;
      width: 100%;
      cursor: pointer;
      border-radius: 5px;
      transition: background 0.2s;
      font-size: 1rem;
    }
    .sidebar button.active, .sidebar button:hover {
      background: #00bfff;
      color: #222;
    }
    .main-content {
      margin-left: 240px;
      padding: 2rem;
    }
    .form-section {
      display: none;
    }
    .form-section.active {
      display: block;
    }
  </style>
  <div class="sidebar">
    <h2>Menú Principal</h2>
    <button id="menu-rick" class="active">Ricky Morty</button>
    <button id="menu-usuario">Endpoints de Usuario</button>
    <button id="menu-rol">Endpoints de Rol</button>
  </div>
  <div class="main-content">
    <div id="usuario-section" class="form-section active">
      <h2>CRUD Usuarios</h2>
      <button id="btn-listar">Listar usuarios</button>
      <div id="crud-s"></div>
      <h2>Buscar usuario por ID</h2>
      <div id="crud-usuario"></div>
      <input type="number" id="id_usuario_buscar" placeholder="Ingrese ID de usuario" />
      <button id="btn-buscar">Buscar usuario por ID</button>
      <h2>Eliminar usuario por ID</h2>
      <input type="number" id="id_usuario_eliminar" placeholder="Ingrese ID de usuario" />
      <button id="btn-eliminar">Eliminar usuario por ID</button>
      <h2>Registrar usuario</h2>
      <input type="number" id="id_usuario_registrar" placeholder="Ingrese ID de usuario" /><br>
      <input type="text" id="nombre_registrar" placeholder="Ingrese nombre" /><br>
      <input type="text" id="apellido_registrar" placeholder="Ingrese apellido" /><br>
      <input type="text" id="telefono_registrar" placeholder="Ingrese telefono" /><br>
      <input type="email" id="email_registrar" placeholder="Ingrese email" /><br>
      <input type="password" id="contraseña_registrar" placeholder="Ingrese contraseña" /><br>
      <input type="text" id="estado_registrar" placeholder="Ingrese estado" /><br>
      <input type="number" id="id_rol_registrar" placeholder="Ingrese ID de rol" /><br>
      <button id="btn-registrar">Registrar usuario</button><br>
      <h2>Actualizar usuario</h2>
      <input type="number" id="id_usuario_actualizar" placeholder="Ingrese ID de usuario" /><br><br>
      <input type="text" id="nombre_actualizar" placeholder="Ingrese nombre" /><br>
      <input type="text" id="apellido_actualizar" placeholder="Ingrese apellido" /><br>
      <input type="text" id="telefono_actualizar" placeholder="Ingrese telefono" /><br>
      <input type="email" id="email_actualizar" placeholder="Ingrese email" /><br>
      <input type="password" id="contraseña_actualizar" placeholder="Ingrese contraseña" /><br>
      <input type="text" id="estado_actualizar" placeholder="Ingrese estado" /><br>
      <input type="number" id="id_rol_actualizar" placeholder="Ingrese ID de rol" /><br>
      <button id="btn-actualizar">Actualizar usuario</button><br>
    </div>
    <div id="rol-section" class="form-section">
  <h2>CRUD Roles</h2>
  <button id="btn-listar-rol">Listar roles</button>
  <div id="crud-rol"></div>
  <h2>Buscar rol por ID</h2>
  <input type="number" id="id_rol_buscar" placeholder="Ingrese ID de rol" />
  <button id="btn-buscar-rol">Buscar rol por ID</button>
  <h2>Eliminar rol por ID</h2>
  <input type="number" id="id_rol_eliminar" placeholder="Ingrese ID de rol" />
  <button id="btn-eliminar-rol">Eliminar rol por ID</button>
  <h2>Registrar rol</h2>
  <input type="number" id="id_rol_registrar_rol" placeholder="Ingrese ID de rol" /><br>
  <input type="text" id="nombre_rol_registrar" placeholder="Ingrese nombre del rol" /><br>
  <button id="btn-registrar-rol">Registrar rol</button><br>
  <h2>Actualizar rol</h2>
  <input type="number" id="id_rol_actualizar_rol" placeholder="Ingrese ID de rol" /><br><br>
  <input type="text" id="nombre_rol_actualizar" placeholder="Ingrese nombre del rol" /><br>
  <button id="btn-actualizar-rol">Actualizar rol</button><br>
  </div>
    <div id="rick-section" class="form-section">
      <div id="rick-section" class="form-section active">
    <h2>Ricky Morty API</h2>
    <h2>${name}</h2>
    <h2>${usuario.nombre}</h2>
    <h2>${user[0].nombre}</h2>
    <h2>Usando la clase Usuario</h2>
    <p>Nombre: ${userClass.nombre}</p>
    <p>Método: ${userClass.saludar()}</p>
    <div id="imagen-personaje">${userClass.mostrarImagen()}</div><br>
  </div>
`;

const menuUsuario = document.getElementById('menu-usuario') as HTMLButtonElement;
const menuRol = document.getElementById('menu-rol') as HTMLButtonElement;
const menuRick = document.getElementById('menu-rick') as HTMLButtonElement;
const usuarioSection = document.getElementById('usuario-section') as HTMLDivElement;
const rolSection = document.getElementById('rol-section') as HTMLDivElement;
const rickSection = document.getElementById('rick-section') as HTMLDivElement;

menuRick.addEventListener('click', () => {
  menuRick.classList.add('active');
  menuUsuario.classList.remove('active');
  menuRol.classList.remove('active');
  usuarioSection.classList.remove('active');
  rolSection.classList.remove('active');
  rickSection.classList.add('active');
});

menuUsuario.addEventListener('click', () => {
  menuUsuario.classList.add('active');
  menuRol.classList.remove('active');
  menuRick.classList.remove('active');
  usuarioSection.classList.add('active');
  rolSection.classList.remove('active');
  rickSection.classList.remove('active');
});

menuRol.addEventListener('click', () => {
  menuRol.classList.add('active');
  menuUsuario.classList.remove('active');
  menuRick.classList.remove('active');
  rolSection.classList.add('active');
  usuarioSection.classList.remove('active');
  rickSection.classList.remove('active');
});



const btnBuscar = document.getElementById('btn-buscar');
btnBuscar?.addEventListener('click', () => {
  const input = document.getElementById('id_usuario_buscar') as HTMLInputElement;
    const idUsuario = Number((document.getElementById('id_usuario_buscar') as HTMLInputElement).value);
    if (!input.value || isNaN(idUsuario)) {
        alert('Por favor, ingrese un ID válido.');
        return;
    }
    listar.listarUsuarioPorId(idUsuario);
});

const btnEliminar = document.getElementById('btn-eliminar');
btnEliminar?.addEventListener('click', () => {
  const input = document.getElementById('id_usuario_eliminar') as HTMLInputElement;
    const idUsuario = Number((document.getElementById('id_usuario_eliminar') as HTMLInputElement).value);
    console.log(idUsuario);
    if (!input.value || isNaN(idUsuario)) {
        alert('Por favor, ingrese un ID válido.');
        return;
    }
    listar.eliminarUsuarioPorId(idUsuario);
});


const btnRegistrar = document.getElementById('btn-registrar');
btnRegistrar?.addEventListener('click', () => {
    const id_usuario = document.getElementById('id_usuario_registrar') as HTMLInputElement;
    const nombre = document.getElementById('nombre_registrar') as HTMLInputElement;
    const apellido = document.getElementById('apellido_registrar') as HTMLInputElement;
    const telefono = document.getElementById('telefono_registrar') as HTMLInputElement;
    const email = document.getElementById('email_registrar') as HTMLInputElement;
    const contraseña = document.getElementById('contraseña_registrar') as HTMLInputElement;
    const estado = document.getElementById('estado_registrar') as HTMLInputElement;
    const id_rol = document.getElementById('id_rol_registrar') as HTMLInputElement;

    const nuevoUsuario = new Usuario(
        Number(id_usuario.value),
        nombre.value,
        apellido.value,
        telefono.value,
        email.value,
        contraseña.value,
        estado.value,
        Number(id_rol.value)
    );
    nuevoUsuario.registrarUsuario();
});

const btnActualizar = document.getElementById('btn-actualizar');
btnActualizar?.addEventListener('click', () => {
  const input = document.getElementById('id_usuario_actualizar') as HTMLInputElement;
  const idUsuario = Number((document.getElementById('id_usuario_actualizar') as HTMLInputElement).value);
  if (!input.value || isNaN(idUsuario)) {
      alert('Por favor, ingrese un ID válido.');
      return;
    }
    const nombre = document.getElementById('nombre_actualizar') as HTMLInputElement;
    const apellido = document.getElementById('apellido_actualizar') as HTMLInputElement;
    const telefono = document.getElementById('telefono_actualizar') as HTMLInputElement;
    const email = document.getElementById('email_actualizar') as HTMLInputElement;
    const contraseña = document.getElementById('contraseña_actualizar') as HTMLInputElement;
    const estado = document.getElementById('estado_actualizar') as HTMLInputElement;
    const id_rol = document.getElementById('id_rol_actualizar') as HTMLInputElement;

    const nuevoUsuario = new Usuario(
        idUsuario,
        nombre.value,
        apellido.value,
        telefono.value,
        email.value,
        contraseña.value,
        estado.value,
        Number(id_rol.value)
    );
    nuevoUsuario.ActualizarUsuario();
});

import { Rol, listarRoles } from './bases/05-apinode';

const btnListarRol = document.getElementById('btn-listar-rol');
btnListarRol?.addEventListener('click', () => {
  listarRoles.listarRoles();
});


const btnBuscarRol = document.getElementById('btn-buscar-rol');
btnBuscarRol?.addEventListener('click', () => {
  const input = document.getElementById('id_rol_buscar') as HTMLInputElement;
  const idRol = Number(input.value);
  if (!input.value || isNaN(idRol)) {
    alert('Por favor, ingrese un ID válido.');
    return;
  }
  listarRoles.listarRolPorId(idRol);
});


const btnEliminarRol = document.getElementById('btn-eliminar-rol');
btnEliminarRol?.addEventListener('click', () => {
  const input = document.getElementById('id_rol_eliminar') as HTMLInputElement;
  const idRol = Number(input.value);
  if (!input.value || isNaN(idRol)) {
    alert('Por favor, ingrese un ID válido.');
    return;
  }
  listarRoles.eliminarRolPorId(idRol);
});

const btnRegistrarRol = document.getElementById('btn-registrar-rol');
btnRegistrarRol?.addEventListener('click', () => {
  const idRol = document.getElementById('id_rol_registrar_rol') as HTMLInputElement;
  const nombreRol = document.getElementById('nombre_rol_registrar') as HTMLInputElement;

  const nuevoRol = new Rol(
    Number(idRol.value),
    nombreRol.value
  );
  nuevoRol.registrarRol();
});

const btnActualizarRol = document.getElementById('btn-actualizar-rol');
btnActualizarRol?.addEventListener('click', () => {
  const idRol = document.getElementById('id_rol_actualizar_rol') as HTMLInputElement;
  const nombreRol = document.getElementById('nombre_rol_actualizar') as HTMLInputElement;

  if (!idRol.value || isNaN(Number(idRol.value))) {
    alert('Por favor, ingrese un ID válido.');
    return;
  }

  const rolActualizado = new Rol(
    Number(idRol.value),
    nombreRol.value
  );
  rolActualizado.actualizarRol();
});

listar.listarUsuarios();