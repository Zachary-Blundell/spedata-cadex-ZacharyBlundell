import partsDatamapper from '../models/parts.datamapper.js';
import cadexService from '../services/cadex.service.js';

// Les paramètres autorisé
const authorizedProperties = ['name', 'adjective', 'verb', 'complement'];

export default {

  async getCadex(req, res) {
    // Avant toute chose un controller doit encapsuler ses instruction pour récupérer une
    // potentielle erreur
    try {
      // 1ère étape (optionnelle) : Prise en compte de données supplémentaires (en plus de la route)
      // fournis dans la requête (req.body, req.query, req.params)

      const userInput = req.query;

      // 2ème étape (optionnelle) : analyse et la validation des ces informations supplémentaires

      // On vérifie d'abord le nombre de paramètres et si celui-ci est supérieur à 4, alors on
      // renvoi une erreur
      if (userInput.length > authorizedProperties.length) {
        // on oubli pas le return sinon la function continue d'être exécuté et cela générera des
        // problèmes
        return res.status(400).json({ error: 'Vous ne pouvez fournir que 4 paramètres différents' });
      }

      // Le but est de vérifier que l'ensemble des paramètres fourni par l'utilisateur dans l'appel
      // http correpondent aux paramètres autoriseé de l'application, et de cette route en
      // particulier
      // ['michel', 'verb']
      const inputProperties = Object.keys(userInput);

      // On check les paramètres qui ne fonct pas parties des paramètres autorisés
      const unauthorizedProperties = inputProperties.filter(
        (prop) => !authorizedProperties.includes(prop),
      );

      if (unauthorizedProperties.length) {
        return res.status(400).json({ error: `Les paramètres suivant sont invalides : ${unauthorizedProperties.join(', ')}` });
      }

      // 3ème étape (optionnelle) : récupération de données depuis une source de données
      const data = await partsDatamapper.findAll();

      // 4ème étape (optionnelle) : analyse et traitement des ces données récupérées

      // 5ème étape (optionnelle) : utilisation d'un service métier qui peut utiliser ou non les
      // données précédentes.
      // mon cadex serait un objet qui resemble a peut prête à :
      /*
    {
      name: 'un cheval',
      adjective: 'bien cuit',
      verb: 'consulte',
      complement: 'un seau en plastique',
      glue(){
        // récupérer le cadex sous forme de string pour le renvoyer au client
        return (name<string> adjective<string> verb<string> complement<string>)<string>
      }
    }
    */
      // On appelle une méthode qui est chargé de généré et de nous retourner un cadex en se servant
      // des données récupérées précédemment.
      const generatedCadex = cadexService.generate(data);

      // On surcharge les propriétés de cadex généré par celles de l'utilisateur, si celui-ci en a
      // fourni
      const cadex = { ...generatedCadex, ...userInput };

      // Etape de réponse à la requête client
      // Le fait d'appeler l'objet sous forme de string va exécuter la méthode toString()
      return res.json({ cadex: `${cadex}` });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async postCadex(req, res) {
    const userInput = req.body;

    if (userInput.length > authorizedProperties.length) {
      return res.status(400).json({ error: 'Vous ne pouvez fournir que 4 paramètres différents' });
    }

    const inputProperties = Object.keys(userInput);
    const unauthorizedProperties = inputProperties.filter(
      (prop) => !authorizedProperties.includes(prop),
    );

    if (unauthorizedProperties.length) {
      return res.status(400).json({ error: `Les paramètres suivant sont invalides : ${unauthorizedProperties.join(', ')}` });
    }

    const data = await partsDatamapper.findAll();

    const generatedCadex = cadexService.generate(data);

    authorizedProperties.forEach((part) => {
      if (userInput[part]) {
        data[`${part}s`].push(userInput[part]);
      }
    });

    const cadex = { ...generatedCadex, ...userInput };

    return res.json({ cadex: `${cadex}` });
  },

};
