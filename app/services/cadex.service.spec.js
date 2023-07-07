import cadexService from './cadex.service.js';

test('is cadexService an object', () => {
  expect(typeof cadexService).toBe('object');
});

test('service must have a generate method', () => {
  expect(cadexService).toHaveProperty('generate');
});

describe('generate return value', () => {
  // On peut centraliser l'execution dun méthode affin de tester le retour celle-ci dans différents
  // test unitaires, qui sont le plus précis possible.
  const cadexObject = cadexService.generate({});

  test('generate must return an object', () => {
    expect(typeof cadexObject).toBe('object');
  });

  test('generate must return an object with name property', () => {
    expect(cadexObject).toHaveProperty('name');
  });

  test('generate must return an object with adjective property', () => {
    expect(cadexObject).toHaveProperty('adjective');
  });

  test('generate must return an object with verb property', () => {
    expect(cadexObject).toHaveProperty('verb');
  });

  test('generate must return an object with complement property', () => {
    expect(cadexObject).toHaveProperty('complement');
  });

  test('generate must return an object with glue property', () => {
    expect(cadexObject).toHaveProperty('glue');
  });
});
