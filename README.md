# Social Network API

## Descripción
Esta es una API RESTful construida con Node.js, Express y MongoDB para la gestión de usuarios y publicaciones en una red social ficticia. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) tanto para usuarios como para publicaciones. Las publicaciones pueden incluir imágenes, comentarios y "likes".

## Tecnologías Utilizadas
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT para autenticación
- Multer para la gestión de imágenes

## Instalación
### Requisitos previos
1. **Instalar Node.js y npm**: Descarga e instala Node.js desde [aqui](https://nodejs.org/).
2. **Instalar MongoDB**: Descarga e instala MongoDB desde [aqui](https://www.mongodb.com/try/download/community).
3. **Iniciar el servidor de MongoDB**:
   - Abre una terminal y ejecuta:
     ```sh
     mongod.exe --dbpath "C:\\data\\db"
     ```
   - Asegúrate de que la ruta `C:\\data\\db` existe o cambia la ruta a una personalizada.

### Instalación del proyecto
1. Clona este repositorio:
   ```sh
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```
2. Accede al directorio del proyecto:
   ```sh
   cd tu-repositorio
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
   
## Uso
### Iniciar el servidor
```sh
npm start
```
El servidor correrá en `http://localhost:3000`.

### Endpoints
#### Usuarios
- `GET /users` - Obtiene todos los usuarios
- `POST /users` - Crea un nuevo usuario
- `GET /users/:id` - Obtiene un usuario por ID
- `PUT /users/:id` - Actualiza un usuario
- `DELETE /users/:id` - Elimina un usuario

#### Publicaciones
- `GET /posts` - Obtiene todas las publicaciones
- `POST /posts` - Crea una nueva publicación
- `GET /posts/:id` - Obtiene una publicación por ID
- `PUT /posts/:id` - Actualiza una publicación
- `DELETE /posts/:id` - Elimina una publicación
- `POST /posts/:id/like` - Da "like" a una publicación
- `POST /posts/:id/comment` - Agrega un comentario a una publicación

## Licencia
Este proyecto está bajo la licencia MIT.

