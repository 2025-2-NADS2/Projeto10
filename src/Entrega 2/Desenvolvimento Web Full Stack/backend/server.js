require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path'); 

require('./config/db.js'); 


const ouvidoriaRoutes = require('./routes/ouvidoriaRoutes');
const authRoutes = require('./routes/authRoutes');
const eventoRoutes = require('./routes/eventoRoutes');
const atividadeRoutes = require('./routes/atividadeRoutes');
const documentoRoutes = require('./routes/documentoRoutes'); 
const metaRoutes = require('./routes/metaRoutes'); 
const inscricaoRoutes = require('./routes/inscricaoRoutes'); 
const paymentRoutes = require('./routes/paymentRoutes'); 


const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
})); 


app.use(express.json({

    limit: '50mb', 

    verify: (req, res, buf) => {
 
        if (req.originalUrl === '/api/webhook-stripe') { 
            req.rawBody = buf.toString();
        }
    }
}));


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.get('/', (req, res) => {
  res.send('API do Instituto Alma está no ar!');
});


app.use('/api/ouvidoria', ouvidoriaRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/eventos', eventoRoutes);
app.use('/api/atividades', atividadeRoutes);
app.use('/api/documentos', documentoRoutes); 
app.use('/api/metas', metaRoutes); 
app.use('/api/inscricoes', inscricaoRoutes); 

app.use('/api', paymentRoutes); // Note que o seu paymentRoutes já contém o /create-payment-intent


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log('Acesse http://localhost:4000');
});
