const request = require('supertest')
const app = require('../app.js')

describe("GET /", () => {
    describe("return json message from home page", () => {
        test("should response with a message", async () => {
            const response = await request(app).get('/')
            const result = JSON.parse(response.text);
            expect(result.message).toBe("Welcome to the Homepage!");
        })
    })
})

describe("GET /test", () => {
    describe("return json message from test page", () => {
        test("should response with a test message", async () => {
            const response = await request(app).get('/test')
            const result = JSON.parse(response.text);
            expect(result.message).toBe("Test docker nodejs app");
        })
    })
})

// closes server to prevent error:
// Jest did not exit one second after the test run has completed
afterAll(done => {
    app.close();
    done();
});