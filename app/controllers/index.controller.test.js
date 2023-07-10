import { jest } from '@jest/globals';
import controller from './index.controller.js';

// A cause du stockage par référence des objet en JS, on est obligé d'utiliser une fonction, qui,
// quand elle est exécité va fournir à chaque un objet tout neuf, sans prendre en compte les
// possible modification d'un autre objet res précédemment utilisé.
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

// La callback de la méthode describe ne peut pas être asynchrone, on doit donc répéter les appels
// async dans chaque méthode de test.
describe('getCadex', () => {
  // On veut tester que le controller renvoi bien un json contenant une propriété "cadex" qui
  // contient une chaîne de caractère

  // Pour tester un controller on doit pouvoir l'exécuter et donc pouvoir lui fourni ce dont il a
  // besoin pour fonnctionner: potentiellement les objets request, response, et la function next

  test('res.json called on getCadex', async () => {
    const res = mockResponse();
    await controller.getCadex({}, res);
    // On vérifie après l'appel au controller que la methode json de res a été appelé au moins 1
    // fois
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  test('res.json called with object with cadex property', async () => {
    const res = mockResponse();
    await controller.getCadex({}, res);

    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ cadex: expect.any(String) }));
  });
});
