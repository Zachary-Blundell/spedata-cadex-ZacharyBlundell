import cadexService from './cadex.service.js';

test('is cadexService an object', () => {
  expect(typeof cadexService).toBe('object');
});

test('service must have a generate method', () => {
  expect(cadexService).toHaveProperty('generate');
});

/// Un mock dans un fichier de test permet de simulé soit des données, soit des functions
const mockData = {
  names: ['Corentin', 'Kevin', 'Thomas'],
  adjectives: ['en forme', 'fébrile', 'motivé'],
  verbs: ['sourit', 'court', "s'allonge"],
  complements: ['dans un seau', 'sur un table', "à l'envers"],
};

describe('generate return value', () => {
  // On peut centraliser l'execution dun méthode affin de tester le retour celle-ci dans différents
  // test unitaires, qui sont le plus précis possible.
  const cadexObject = cadexService.generate(mockData);

  test('generate must return an object', () => {
    expect(typeof cadexObject).toBe('object');
  });

  describe('name property', () => {
    test('generate must return an object with name property', () => {
      expect(cadexObject).toHaveProperty('name');
    });
    test('name property must contain a string', () => {
      expect(typeof cadexObject.name).toBe('string');
    });
    test('name must have at least 2 character', () => {
      expect(cadexObject.name.length).toBeGreaterThanOrEqual(2);
    });
    // On test la cohérence des données de sortie avec les données du mock fourni en entrée
    test('name must be in mock data', () => {
      expect(mockData.names).toContain(cadexObject.name);
    });
  });

  describe('adjective property', () => {
    test('generate must return an object with adjective property', () => {
      expect(cadexObject).toHaveProperty('adjective');
    });
    test('adjective property must contain a string', () => {
      expect(typeof cadexObject.adjective).toBe('string');
    });
    test('adjective must have at least 2 character', () => {
      expect(cadexObject.adjective.length).toBeGreaterThanOrEqual(2);
    });
    test('adjective must be in mock data', () => {
      expect(mockData.adjectives).toContain(cadexObject.adjective);
    });
  });

  describe('verb property', () => {
    test('generate must return an object with verb property', () => {
      expect(cadexObject).toHaveProperty('verb');
    });
    test('verb property must contain a string', () => {
      expect(typeof cadexObject.verb).toBe('string');
    });
    test('verb must have at least 1 character', () => {
      expect(cadexObject.verb.length).toBeGreaterThanOrEqual(1);
    });
    test('verb must be in mock data', () => {
      expect(mockData.verbs).toContain(cadexObject.verb);
    });
  });

  describe('complement property', () => {
    test('generate must return an object with complement property', () => {
      expect(cadexObject).toHaveProperty('complement');
    });
    test('complement property must contain a string', () => {
      expect(typeof cadexObject.complement).toBe('string');
    });
    test('complement must have at least 2 character', () => {
      expect(cadexObject.complement.length).toBeGreaterThanOrEqual(2);
    });
    test('complement must be in mock data', () => {
      expect(mockData.complements).toContain(cadexObject.complement);
    });
  });

  describe('glue property', () => {
    test('generate must return an object with glue property', () => {
      expect(cadexObject).toHaveProperty('glue');
    });
    test('glue property must contain a string', () => {
      expect(typeof cadexObject.glue).toBe('function');
    });

    // Comme potentiellement la méthode glue n'existe pas, elle peut ne pas être exécuté. Il faut
    // donc conditionné sont exécution avec l'optional chaining
    const cadex = cadexObject?.glue();

    test('glue must return a string', () => {
      expect(typeof cadex).toBe('string');
    });
    test('glue must return a string with at least 10 character', () => {
      expect(cadex.length).toBeGreaterThanOrEqual(10);
    });
    test('glue must return a string with at least 3 spaces', () => {
      // Ici words est un tableau de mots
      const words = cadex.split(' ');
      expect(words.length).toBeGreaterThanOrEqual(4);
    });

    // Par contre on ne va pas comparé la valeur de retour de glue dans le fichier de test, car pour
    // se faire il faudrait reproduire la complexité du service dans le fichier de test, ce qui est
    // trop limitant dans l'évolution possible du service, et ajoute trop d'algorithmie pour un
    // fichier de test
  });
});
