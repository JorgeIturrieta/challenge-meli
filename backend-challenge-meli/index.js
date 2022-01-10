const app = require('./app');
const {PORT} = require('./utils/envConfig');

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto:${PORT}`);
});
