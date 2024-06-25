require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const authRoutes = require('./routes/auth');
const cors = require('cors')

const app = express();

const corsOptions = {
  origin: ['http://localhost:5173', 'https://modulo-web.vercel.app'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'views')));

const PORT = process.env.PORT || 3000;
const MONGO_URI_PROD = process.env.MONGO_URI_PROD;

mongoose.connect(MONGO_URI_PROD)
.then(() => {
  console.log('Conectado a MongoDB Atlas');
}).catch((err) => {
  console.error('Error conectando a MongoDB', err);
});

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  const htmlResponse = `
    <html>
      <head>
        <title>NodeJs y Express</title>
        <style>
          body { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Open Sans', 'Helvetica Neue', sans-serif; display: flex; justify-content: center; padding: 20px }
          main { max-width: 1200px; width: 100%;  }
          h1 { font-size: 36px; font-weight: 700; line-height: 40px; }
          p { font-size: 20px; font-weight: 600; line-height: 24px; }
          a { text-decoration: none; color: #3B82F6;  }
        </style>
      </head>
      <body>
        <main>
          <h1>Soy un proyecto backend contruido con Node, Express y JWT.</h1>
          <p>Dentro de mis funciones están: Permitir registro de usuarios, inicio de sesión con validación de credenciales y uso de JWT para la autorización de sesiones. Tambien, recuperación de contraseñas mediante un enlace enviado al correo electrónico del usuario y redirección a un formulario para el cambio de contraseña con un token con expiración.</p>
          <p>Visita este sitio para ver la api funcionando: <a href="https://modulo-web.vercel.app/">Modulo Web</a></p>
        </main>
      </body>
    </html>
  `
  res.send(htmlResponse);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}, visita: http://localhost:${PORT}`);
});
