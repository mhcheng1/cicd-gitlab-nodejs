const request = require('supertest')
const app = require('../app.js')

describe("GET /", () => {
    describe("return message from home page", () => {
        test("should response with a message", async () => {
            const response = await request(app).get('/')
            expect(response.text).toBe('{"message":"Test docker nodejs app"}');
        })
    })
})

// closes server to prevent error:
// Jest did not exit one second after the test run has completed
afterAll(done => {
    app.close();
    done();
});