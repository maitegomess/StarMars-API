const request = require("supertest")
const { app, sonda } = require("../server.js")

describe('Test my server', () => {
    it('should get main route', async () => {
        const res = await request(app).get('/position')
        expect(res.body).toStrictEqual(sonda)
    })

    it('shouldnt modify sonda position when provide invalid movements', async () => {
        const res = await request(app).post('/move').send({
            movements: ["GD", "M"]
        })

        expect(sonda.y).toBe(0)
    })
})