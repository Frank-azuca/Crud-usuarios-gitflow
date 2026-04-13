const express = require('express');
const userRoutes = require('./rutas/rutas_de_usuario.js');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API funcionando');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});