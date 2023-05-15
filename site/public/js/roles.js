// Obtener referencia al div perfil-sinsesion
var perfilSinSesion = document.querySelector(".perfil-sinsesion");
// Obtener referencia al div perfil-admin
var perfilAdmin = document.querySelector(".perfil-admin");
// Obtener referencia al div perfil-user
var perfilUser = document.querySelector(".perfil-user");

// Función para mostrar el div correspondiente según el rol de usuario
function mostrarDivSegunRol(rol) {
  if (rol === "user") {
    perfilUser.style.display = "block";
  } else if (rol === "admin") {
    perfilAdmin.style.display = "block";
  } else {
    perfilSinSesion.style.display = "block";
  }
}
