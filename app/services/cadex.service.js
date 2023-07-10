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
      toString() {
        // On peut retourné la phrase de façon plus dynamique, grâce à la méthode join() sur un
        // tableau que l'on créer à la volée, pour séparer chaque élément de ce tableau au sein du
        // chaîne de caractère en respectant un caractère particulier
        return [
          // afin de prendre en compte la potentiel modification de la valeur de la propriété, on
          // utilise le contexte courant pour pointer sur la valeur de la propriété du cadex. On ne
          // veut pas conserver la valeur défini à la crétaion du cadex, mais que celle-ci puisse
          // évolué au cours de sa vie.
          this.name,
          this.adjective,
          this.verb,
          this.complement,
        ].join(' ');
      },
    };
  },

};
