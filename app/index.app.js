import express from 'express';

const app = express();

// Pour export un objet ou autre chose en ESM, on utilise le mot clé export, si jamais la seule et
// unique chose que l'on export est la varibale ou l'objet qui suit export on rajoute default pour
// simplifier son import.
export default app;
