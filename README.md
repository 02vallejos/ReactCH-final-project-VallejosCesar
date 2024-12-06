

### Bootcamp : CoderHouse 
### Curso : React JS
### Comisión : 63375
### Alumno : César David Vallejos

### Proyecto Final

### Proyecto de Tienda en React con Vite

Este proyecto fue creado utilizando el framework React y el entorno de desarrollo Vite. Se trata de un prototipo para una futura tienda, por lo que algunas secciones están vacías y serán completadas próximamente. En esta entrega se aplican los conocimientos adquiridos desde el inicio del curso, comenzando con la creación del primer componente de React hasta la última clase.

#### Estructura de la Tienda

La tienda cuenta con una barra de navegación principal que contiene botones para las secciones de Inicio, Productos, Contacto y un ícono de carrito de compras, el cual utilizamos en la sección de "Productos", donde se desarrolla este proyecto.

#### Funcionamiento de la Tienda

Al seleccionar la sección de Productos, se despliega una segunda barra de navegación con los productos disponibles. En este caso, elegí termos extraídos de la página MercadoLibre.

**Funciones de los botones:**

- **Botón Termos:** Muestra todos los productos almacenados en el servicio Firestore de Google Firebase.
- **Botones Lumilagro, Stanley y Peabody:** Filtran los productos por sus respectivas marcas.

Cada tarjeta de producto incluye un botón de detalle que redirige a una página individual con información detallada del producto, junto con botones para incrementar, decrementar y agregar el producto al carrito, según el stock disponible.

Una vez seleccionada una cantidad, aparece un botón que nos dirige a la página del carrito, donde gestionamos la compra.

En la página del carrito, se listan todos los productos añadidos para proceder con la compra. Cuando estamos listos para finalizar, el botón de checkout nos lleva a una página con un formulario para procesar la orden.

Finalmente, al confirmar la orden, esta se guarda en la base de datos para su despacho.
### Características del Código

En el archivo `App.jsx` se encuentra la navegación de todo el proyecto, además de aplicar el contexto a los componentes que utilizan los custom hooks y variables globales.

#### Organización de Archivos y Carpetas

A continuación se detalla la organización de las carpetas y archivos para mejorar la búsqueda, organización y escalabilidad del proyecto. En la carpeta `SRC` se encuentran las siguientes carpetas y sus respectivas funciones:

#### Carpeta `Component`

En esta carpeta se encuentran todos los componentes utilizados en el código. Los componentes están organizados en subcarpetas, cada una con su archivo `.jsx` y su archivo `.css` personalizado. En el proyecto se emplea la metodología **container-list-item**, que se refiere a la separación de tareas:

- **Container:** Se encarga de la solicitud de datos, ya sea desde una base de datos o un archivo local.
- **List:** Se encarga de organizar y mostrar los elementos de forma ordenada, asignando un valor único a cada producto.
- **Item:** Se encarga de renderizar cada producto de manera personalizada.

#### Carpeta `Context`

En esta carpeta se agrupan los proveedores de contexto y sus funcionalidades específicas para cada función del proyecto.

#### Carpeta `Hooks`

Contiene todos los custom hooks utilizados en el proyecto. En nuestro caso, maneja toda la funcionalidad del carrito y las notificaciones.

#### Carpeta `Pages`

En esta carpeta se encuentran todas las páginas a las que se puede navegar dentro del proyecto.

#### Carpeta `Services`

Contiene los archivos necesarios para la conexión a bases de datos. En este caso, gestiona todas las conexiones a Firebase de Google.

#### Entorno de Proyecto

Además, se implementó el archivo `.env` para ocultar las credenciales de conexión y proteger la seguridad de las claves utilizadas en el proyecto.

