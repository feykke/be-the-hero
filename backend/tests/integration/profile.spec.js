const request = require('supertest');
const app = require('../../src/app');

describe('Profile', () => {
    it('should be able to get the profile list', async() => {
        const response =  await request(app)
        .get('/profile')
        .set('Authorization', 'd5327d27')

        expect(response.body)
    })
})