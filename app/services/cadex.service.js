import utils from '../helpers/utils.js';

export default {

  // parts est une valeur qui contien un objet avec 4 propréiétés, chacune des ses propriétés
  // contient un tableau de string
  /*
  {
    names: [],
    adjectives: [],
    verbs: [],
    complements: [],
  }
  */
  generate(parts) {
    // 1ère étape on doit récupérer un "name" aléatoire, un "adjective" aléatoire, …

    // Donc de façon plus générqiue je dois récupérer un item aléatoire (élément) d'une collection
    // (array)
    const name = utils.getRandomItem(parts.names);
    const adjective = utils.getRandomItem(parts.adjectives);
    const verb = utils.getRandomItem(parts.verbs);
    const complement = utils.getRandomItem(parts.complements);

    return {
      name,
      adjective,
      verb,
      complement,
      glue() {
        // On peut retourné la phrase de façon plus dynamique, grâce à la méthode join() sur un
        // tableau que l'on créer à la volée, pour séparer chaque élément de ce tableau au sein du
        // chaîne de caractère en respectant un caractère particulier
        return [
          name,
          adjective,
          verb,
          complement,
        ].join(' ');
      },
    };
  },

};
