const request = require("supertest")
const { getDirection } = require("../vision.js")
const { app, sonda } = require('../server.js')

describe('Test my server', () => {
    it('should modify sonda.face', async () => {
        const res = await request(app).post('/move').send({
            movements: ["GD", "GD"]
        })
        expect(sonda.face).toBe("E")
    })
})
