const API_URL = 'http://localhost:3000/users';

const userList = document.getElementById('userList');
const form = document.getElementById('userForm');

//  Obtener usuarios
async function getUsers() {
  const res = await fetch(API_URL);
  const users = await res.json();

  userList.innerHTML = '';

  users.forEach(user => {
    const div = document.createElement('div');
    div.classList.add('col-md-4');

    div.innerHTML = `
      <div class="card mb-3 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${user.nombre}</h5>
          <p class="card-text">
             ${user.email}<br>
             Edad: ${user.edad}
          </p>

          <button class="btn btn-warning btn-sm"
            onclick="editUser(${user.id}, \`${user.nombre}\`, \`${user.email}\`, ${user.edad})">
            Editar
          </button>

          <button class="btn btn-danger btn-sm"
            onclick="deleteUser(${user.id})">
            Eliminar
          </button>
        </div>
      </div>
    `;

    userList.appendChild(div);
  });
}

//  Crear o actualizar usuario
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const id = document.getElementById('userId').value;

  const user = {
    nombre: document.getElementById('nombre').value,
    email: document.getElementById('email').value,
    edad: document.getElementById('edad').value,
    activo: true
  };

  if (id) {
    //  UPDATE
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
  } else {
    //  CREATE
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
  }

  form.reset();
  document.getElementById('userId').value = '';

  getUsers();
});

//  Cargar datos en el formulario
function editUser(id, nombre, email, edad) {
  document.getElementById('userId').value = id;
  document.getElementById('nombre').value = nombre;
  document.getElementById('email').value = email;
  document.getElementById('edad').value = edad;
}

//  Eliminar usuario
async function deleteUser(id) {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });

  getUsers();
}

//  cargar al inicio
getUsers();