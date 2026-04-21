const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// AJUSTE 1: Render usa puertos aleatorios, esto permite que la app se adapte
const PORT = process.env.PORT || 3000;

app.use(cors());

// AJUSTE 2: Servir archivos estáticos (esto ya lo tenías, está bien)
app.use(express.static(path.join(__dirname, 'public')));

const scenesData = [
    {
        id: 1,
        // He dejado tu imagen de prueba para asegurar que cargue algo al inicio
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

// AJUSTE 3: Esta ruta es la que quita el error "Cannot GET /"
// Obliga al servidor a entregar el index.html al entrar a la URL principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/scenes', (req, res) => {
    console.log("Petición de escenas recibida desde el frontend");
    res.json(scenesData);
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor listo y corriendo en el puerto ${PORT}`);
});