import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const dirname = fileURLToPath(new URL('.', import.meta.url));
const txtContent = readFileSync(`${dirname}../../data/parts.json`, 'utf-8');
// JSON.parse transforme du texte sous forme de JSON en objet JS, exploitable par node.
const data = JSON.parse(txtContent);
// Un datamapper ou une n'importe quel DP (Design Pattern) d'accès à la données, doit contenir,
// entre autre, des méthodes récupération de données.
export default {
  // Async ne permet QUE d'utiliser await dans la function. Elle fait ensorte que la valeur retourné
  // soit fourni à travers une promesse.
  async findAll() {
    // Permet de récupérer l'ensemble des données de l'entité représenté par le datamapper

    return data;
  },
};
