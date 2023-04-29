const request = require("supertest")
const app = require("./server.js")

const sonda = {
    x: 0,
    y: 0,
    face: "D"
}

describe('Test my server', () => {
    it('should get main route', async () => {
        const res = await request(app).get('/position')
        expect(res.body).toStrictEqual(sonda)
    })
})