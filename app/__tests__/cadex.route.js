import request from 'supertest';
import app from '../index.app.js';

test('GET /cadex must respond with 200 status', () => {
  request(app)
    .get('/cadex')
    .expect(200);
});
test('GET /cadex must respond a JSON', () => {
  request(app)
    .get('/cadex')
    // Verification du contenu de la variable de header Content-Type à l'aide d'une expression
    // régulière pour déterminer sur la valeur contien json ou non
    .expect('Content-Type', /json/);
});
test('GET /cadex must respond a cadex object JSON', async () => {
  const response = await request(app).get('/cadex');
  // ici le expect est celui de Jest et pas de supertest
  expect(response.body).toHaveProperty('cadex');
  expect(typeof response.body.cadex).toBe('string');
  expect(response.body.cadex.length).toBeGreaterThan(0);
});
