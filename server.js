const express = require('express');
const cors = require('cors');
const path = require('path');

// 1. Primero creamos la aplicación
const app = express();
const PORT = 3000;

// 2. Configuramos los middlewares (CORS y carpeta pública)
app.use(cors());
// IMPORTANTE: Esta línea le dice a Node que busque los archivos en la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// 3. Datos de las escenas
const scenesData = [
    {
        id: 1,
        // Eliminado el "." inicial para que la ruta sea correcta desde el navegador
       image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1000&auto=format&fit=crop", 
        text: "¿Sabías algo?",
        duration: 4000,
        color: "#ffffff"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?q=80&w=1200&auto=format&fit=crop",
        text: "Eres lo más bello que tengo en la vida",
        duration: 5000,
        color: "#a3daff"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?q=80&w=1200&auto=format&fit=crop",
        text: "Eres lo mejor que me ha pasado en la vida,<br>no te creas lo que la gente dice.",
        duration: 6000,
        color: "#ffb6c1"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=1200&auto=format&fit=crop",
        text: "Te quiero mucho Elizabeth,<br>siempre quiero estar bien contigo.",
        duration: 8000,
        color: "#ffdfba"
    }
];

// 4. Rutas de la API
app.get('/api/scenes', (req, res) => {
    console.log("Petición de escenas recibida desde el frontend");
    res.json(scenesData);
});

// 5. Encender el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
});