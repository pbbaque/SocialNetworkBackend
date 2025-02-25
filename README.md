# Social Network API

## Descripción
API RESTful creada con Node.js y Express para gestionar usuarios y publicaciones en una red social ficticia.
Incluye funcionalidades básicas para la gestión de usuarios y publicaciones, permitiendo la inclusión de imágenes, comentarios y likes.

## Características
- CRUD de usuarios (Crear, Leer, Actualizar, Eliminar)
- CRUD de publicaciones (Crear, Leer, Actualizar, Eliminar)
- Gestión de imágenes en publicaciones
- Sistema de comentarios en publicaciones
- Sistema de "likes" en publicaciones

## Tecnologías Utilizadas
- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (para la gestión de imágenes)
- JSON Web Token (JWT) para autenticación
- Bcrypt.js para encriptación de contraseñas

## Instalación
1. Clona el repositorio:
   ```sh
   git clone https://github.com/tu_usuario/tu_repositorio.git
   ```
2. Accede al directorio del proyecto:
   ```sh
   cd tu_repositorio
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Inicia el servidor:
   ```sh
   npm start
   ```

## Endpoints Principales

### Usuarios
- `POST /api/users` - Crear usuario
- `GET /api/users` - Obtener todos los usuarios
- `GET /api/users/:id` - Obtener usuario por ID
- `PUT /api/users/:id` - Actualizar usuario
- `DELETE /api/users/:id` - Eliminar usuario

### Publicaciones
- `POST /api/posts` - Crear publicación
- `GET /api/posts` - Obtener todas las publicaciones
- `GET /api/posts/:id` - Obtener publicación por ID
- `PUT /api/posts/:id` - Actualizar publicación
- `DELETE /api/posts/:id` - Eliminar publicación

### Comentarios
- `POST /api/posts/:id/comments` - Agregar comentario a publicación
- `DELETE /api/posts/:id/comments/:commentId` - Eliminar comentario

### Likes
- `POST /api/posts/:id/like` - Dar like a una publicación
- `DELETE /api/posts/:id/like` - Quitar like a una publicación

## Estado del Proyecto
🚧 En desarrollo. Se agregarán mejoras y optimizaciones en futuras versiones.

## Contribuciones
Las contribuciones son bienvenidas. Para colaborar:
1. Realiza un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y confirma los commits (`git commit -m "Añadir nueva funcionalidad"`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.
