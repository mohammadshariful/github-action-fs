const request = require('supertest');
const app = require('../app'); // Adjust the path to your app.js file
const assert = require('node:assert/strict');

describe('GET /', function () {
    it('responds with text Hello, World!', async function () {
        const response = await request(app)
            .get('/')
            .expect(200);

        assert.equal(response.text, 'Hello, World!');
    });
});