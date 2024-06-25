# Módulo Web API

## Descripción del Proyecto
Este proyecto tiene como objetivo desarrollar un módulo web para la recuperación de contraseñas de usuarios registrados en una base de datos. Este módulo incluye funcionalidades como:
- Registro de usuarios.
- Inicio de sesión con validación de credenciales y uso de JWT para la autorización de sesiones.
- Recuperación de contraseñas mediante un enlace enviado por correo electrónico.
- Redirección a un formulario para el cambio de contraseña.

## Especificaciones de Requisitos

### Requisitos Funcionales
- **Registro de Usuario**: Permitir el registro de usuarios proporcionando nombre, apellido, nombre de usuario, contraseña y correo electrónico.
- **Inicio de Sesión**: Validar las credenciales del usuario y proporcionar un token JWT para sesiones autenticadas.
- **Recuperación de Contraseña**: Enviar un enlace de recuperación al correo del usuario. Incluir un token JWT que caduca en 7 minutos en el enlace.
- **Restablecimiento de Contraseña**: Permitir al usuario cambiar su contraseña mediante el formulario de recuperación.

### Requisitos No Funcionales
- **Seguridad**: Utilizar JWT para la autenticación de sesiones y bcrypt para almacenar contraseñas de forma segura.
- **Rendimiento**: Responder de manera eficiente a las solicitudes de recuperación y restablecimiento de contraseña.
- **Escalabilidad**: Diseño modular que facilite futuras expansiones del sistema.
- **Usabilidad**: Interfaz clara y sencilla para el registro, inicio de sesión y recuperación de contraseña.

## Diseño del Sistema

### Arquitectura del Sistema
La arquitectura del sistema se basa en una API RESTful que interactúa con una base de datos para gestionar la autenticación, registro y recuperación de contraseñas de los usuarios, utilizando JWT para la autenticación y seguridad de las sesiones de usuario. Se usan las siguientes tecnologías:
- **Node.js**
- **Express.js**
- **MongoDB**
- **jsonwebtoken**
- **Mongoose**
- **dotenv**
- **Nodemailer**

### Componentes del Sistema
- **Cliente**: Realiza solicitudes HTTP a la API utilizando HTML y JavaScript vanilla para el frontend, que incluye:
  - Formulario de Registro
  - Formulario de Inicio de Sesión
  - Formulario de Recuperación de Contraseña
  - Formulario de Restablecimiento de Contraseña
- **API REST**: Servidor que procesa las solicitudes del cliente, gestiona el registro y autenticación de usuarios, y maneja la recuperación de contraseñas. Se encarga de:
  - Autenticación y Registro de Usuarios
  - Recuperación de Contraseña
  - Gestión de Sesiones
  - Gestión de Errores
- **Base de Datos**: Sistema de gestión de bases de datos para almacenar el historial de operaciones de los usuarios. Se usa para:
  - Almacenamiento de Datos
  - Recuperación de Datos

## Screenshots

Modulo Web creado con react y consumiendo esta api. Visitalo aqui: [modulo web](https://modulo-web.vercel.app)
![](https://res.cloudinary.com/dwuv0l98b/image/upload/v1719129345/mortcmbq8vkhfs1czwrh.png)
![](https://res.cloudinary.com/dwuv0l98b/image/upload/v1719129345/wgf6ovksrmysuexdvw1t.png)
![](https://res.cloudinary.com/dwuv0l98b/image/upload/v1719129345/qaspzcooborwh0jinp8p.png)

## Authors

- [@lexcode1227](https://www.github.com/lexcode1227)

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://henryagustindev.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/henry-agustin-/)
