import express from 'express';
import router from './routers/index.router.js';

const app = express();

// Body parser permettant de stocker les donnnées fourni par l'utilsateur au format JSON dans
// req.body
app.use(express.json());

app.use(router);

// Pour export un objet ou autre chose en ESM, on utilise le mot clé export, si jamais la seule et
// unique chose que l'on export est la varibale ou l'objet qui suit export on rajoute default pour
// simplifier son import.
export default app;
