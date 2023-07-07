// import dotenv from 'dotenv';
import './app/helpers/env.load.js';
import { createServer } from 'node:http';
import logger from './app/helpers/logger.js';
// Maintenant que l'on utilise le modules JavaScript (ESM) on doit utiliser une autre syntaxe pour
// récupérer nos modules et les utiliser
// Avec les ESM il faut préciser l'extension du fichier
import app from './app/index.app.js';

// On peut pas avec l'utilisation de ESlint en AirBNB chargé les variable d'environnement
// directement dans le serveur web. Car il réordonne les import en haut du fichier et donc
// l'activation des variable d'envorinnement ce fait après l'import de l'application. Donc
// l'application ne peut pas exploiter ces varibale d'environnement.

// Pour régler le problème on va créer un module de chargement de variable d'environnement

// dotenv.config();

// On injecte l'application dans le serveur web
// En fait en gros notre application est un middleware qui est un moteur de middleware
// Un peu comme le router qui est un middleware qui contient d'autre middleware.
const server = createServer(app);

// - ?? s'appelle le nullish coalescing, c'est comme le || sauf qu'il ne considère pas les les
//   valeurs truthy/falsy comme true/false
const PORT = process.env.PORT ?? 3000;

server.listen(PORT, () => {
  logger.log(`Server launched on http://localhost:${PORT}`);
});
