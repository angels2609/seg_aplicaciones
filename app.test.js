// app.test.js
const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
    it('responde con mensaje de bienvenida', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('¡Hola! Esta es una aplicación de ejemplo.');
    });
});