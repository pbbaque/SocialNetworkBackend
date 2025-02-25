# Social Network API

## Descripción
Esta es una API RESTful construida con Node.js, Express y MongoDB para la gestión de usuarios y publicaciones en una red social ficticia. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) tanto para usuarios como para publicaciones. Las publicaciones pueden incluir imágenes, comentarios y "likes".

## Tecnologías Utilizadas
- Node.js
- Express.js
- MongoDB con Mongoose
- JWT para autenticación
- Multer para la gestión de imágenes

## Instalación
### Requisitos previos
1. **Instalar Node.js y npm**: Descarga e instala Node.js desde [aqui](https://nodejs.org/).
2. **Instalar MongoDB**: Descarga e instala MongoDB desde [aqui](https://www.mongodb.com/try/download/community).
3. **Iniciar el servidor de MongoDB**:
   - Abre una terminal y ejecuta:
     ```sh
     C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe --dbpath "C:\\data\\db"
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
Accede al directorio del proyecto
```sh
 cd tu-repositorio
```
Utiliza los comandos de typescript en modo observador: 
```sh
tsc -w
```
Para compilar y ejecutar la API en modo desarrollo utiliza nodemon:
```sh
cd tu-repositorio
nodemon dist
```
El servidor correrá en `http://localhost:3000`.

### Endpoints
#### Usuarios
- `GET /user` - Obtiene todos los usuarios
- `POST /user/create` - Crea un nuevo usuario
- `GET /user/:id` - Obtiene un usuario por ID
- `PUT /user/update` - Actualiza un usuario
- `DELETE /user/delete` - Elimina un usuario

#### Publicaciones
- `GET /post` - Obtiene todas las publicaciones
- `POST /post/create` - Crea una nueva publicación
- `GET /post/:id` - Obtiene una publicación por ID
- `PUT /post/update/:id` - Actualiza una publicación
- `DELETE /post/delete:/id` - Elimina una publicación

