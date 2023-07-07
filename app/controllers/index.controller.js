import partsDatamapper from '../models/parts.datamapper.js';
import cadexService from '../services/cadex.service.js';

export default {

  async getCadex(_, res) {
    // 1ère étape (optionnelle) : Prise en compte de données supplémentaires (en plus de la route)
    // fournir dans la requête (req.body, req.query, req.params)

    // 2ème étape (optionnelle) : analyse et la validation des ces informations supplémentaires

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
    const cadex = cadexService.generate(data);

    // Etape de réponse à la requête client
    res.json({ cadex });
  },

};
