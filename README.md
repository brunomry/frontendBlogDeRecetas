# Rincón de Placeres Gastronómicos: Blog de Recetas de Cocina

Este proyecto es una aplicación web sobre un blog de recetas de cocina.

##  Aplicación Web con React y Vite

Esta aplicación previamente realizada en forma grupal corresponde al ejercicio N°14 del Trabajo Práctico de React del curso Desarrollador Full Stack dictado por RollingCodeSchool. Se procedió a clonar el repositorio [blogDeRecetas_react](https://github.com/brunomry/BlogDeRecetas_react.git) para agregar nuevos requerimientos solicitados en ejercicio N°6 de Trabajo Práctico de Backend.

## Enunciado - Nuevos Requerimientos

Blog de recetas - Dificultad: 🟢🟡🔴
Crear una aplicación web, que permita mostrar un blog de recetas de cocina en una
página, desde otra página debo poder agregar, modificar o quitar las recetas. Como nuevo requerimiento
se deben agregar las opciones de login y registro.

## Integración con proyecto de Backend

Este proyecto de Frontend se integró a su proyecto Backend correspondiente donde se utilizó la base de datos no relacional de MongoDB para almacenar los datos de las recetas.

#### Repositorio Backend: [backendBlogDeRecetas](https://github.com/brunomry/backendBlogDeRecetas.git)

## Logotipo 

<img src="./src/assets/logoverde.png">

## Link de Mockups realizados

[Google Drive](https://drive.google.com/drive/folders/13ZabV0a_Ao0p4eXtWI-nWSeYsAYEb3Mg?usp=drive_link)

## Link del Proyecto deployado

La aplicación está desplegada en Netlify. Puedes acceder haciendo clic en el siguiente enlace:

[Ejercicio 6 - Trabajo Práctico de Backend](https://rincondeplaceresgastronomicos-rpg.netlify.app)

## Funcionalidades Principales 

1. Consulta de Recetas: Los usuarios pueden ver una lista de recetas disponibles en la página principal del blog culinario.

2. Visualización Detallada de Receta: Los usuarios pueden hacer clic en una receta para ver más detalles, como su nombre, fecha de publicación, autor, descripción breve, y tienen la opción de seguir leyendo para obtener más información.

3. Administración de Recetas:

    * Leer Receta (Read): Los administradores pueden ver una lista completa de todas las recetas disponibles en el blog.
    * Crear Receta (Create): Los administradores pueden agregar nuevas recetas al blog mediante un formulario de creación.
    * Editar Receta (Update): Los administradores pueden modificar los detalles de las recetas existentes, como el título, la descripción, los ingredientes y los pasos de preparación.
    * Eliminar Receta (Delete): Los administradores pueden eliminar recetas que ya no deseen mantener en el blog.

4. Autenticación de Usuarios:
    
    * Iniciar Sesión (Login): Los usuarios pueden iniciar sesión en la aplicación utilizando sus credenciales.
    * Registrarse: Los usuarios pueden crear una cuenta nueva en la aplicación.
    
    Nota: Las opciones de administrador estarán ocultas para los usuarios que no tengan privilegios de administrador.

## Requisitos previos

- Node.js instalado en tu sistema. Puedes descargarlo [aquí](https://nodejs.org/).

## Pasos para clonar el repositorio

1. Clona este repositorio en tu máquina local a través de una terminal:

  git clone <[url-del-repositorio](https://github.com/brunomry/frontendBlogDeRecetas.git)>

2. Navega al directorio del proyecto:

  cd frontendBlogDeRecetas

3. Instala las dependencias del proyecto:

  npm install

## Tecnologías utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [HTML5](https://developer.mozilla.org/es/docs/Glossary/HTML5)
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [React-Router-Dom](https://reactrouter.com/en/main/start/tutorial)
- [React-Form-Hook](https://react-hook-form.com/get-started)
- [Bootstrap5](https://getbootstrap.com/)
- [Webpack](https://webpack.js.org/)
- [CSS3](https://developer.mozilla.org/es/docs/Web/CSS)
- [SweetAlert2](https://sweetalert2.github.io/#download)

## Crear un proyecto con React usando Vite

Guía de pasos necesarios para crear un nuevo proyecto con React utilizando Vite.

### Pasos

### 1. Crear el proyecto

En tu terminal, navega hasta la carpeta donde deseas crear el proyecto o trabajo práctico.

npm create vite@latest

### 2. Configuración inicial

Después de ejecutar el comando anterior, se te pedirá que ingreses el nombre de tu proyecto. Escribe el nombre deseado y presiona Enter.

Se te pedirá confirmar el nombre del paquete. Selecciona la opción predeterminada (el mismo nombre del proyecto) y presiona Enter.

### 3. Seleccionar opciones

Se te presentará una lista de opciones para elegir el framework. Selecciona la opción de React.

Luego, se te pedirá que elijas el tipo de script a usar. Elige la opción de JavaScript, que utiliza webpack para configurar todo el proyecto de React.

Presiona Enter para confirmar tu selección.

### 4. Configuración final

Una vez confirmadas las opciones, se mostrarán los comandos que debes ejecutar en orden:

- `cd nombreProyecto`: Cambia al directorio del proyecto recién creado.
- `npm install`: Instala las dependencias del proyecto. Este comando solo necesita ejecutarse una vez.
- `npm run dev`: Inicia un servidor de desarrollo interno, similar a live server. Después de ejecutar este comando, se te proporcionará un enlace para acceder al template creado.

### 5. Desarrollo

Una vez que hayas ejecutado el tercer comando y tengas el servidor en funcionamiento, puedes continuar trabajando en tu proyecto desde la terminal de tu editor de código preferido. Para salir del servidor interno en la terminal, simplemente presiona `ctrl + c`.

## Autor

Bruno Madozzo Romay

