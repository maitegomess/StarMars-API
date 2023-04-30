const request = require("supertest")
const { app, sonda } = require("../server.js")
const { applyMovement, isInvalidMovements } = require("../movements.js")

describe('Test my server', () => {
    it('should get main route', async () => {
        const res = await request(app).get('/position')
        expect(res.body).toStrictEqual(sonda)
    })

    it('should apply 1 unit in horizontal negative direction', async () => {
        let target = {
            x: 0,
            y: 0,
            face: "D"
        }

        applyMovement(target, "x", -1)

        expect(target.x).toBe(-1)
    })


    it('shouldnt modify sonda position when provide invalid movements', async () => {
        const res = await request(app).post('/move').send({
            movements: ["GD", "M"]
        })

        expect(sonda.y).toBe(0)
    })

    it('should return false for invalid movements', async () => {
        let target = {
            x: 15,
            y: 0,
            face: "D"
        }
        let validation = isInvalidMovements(target)
        expect(validation).toBe(true)
    })

    it('should return true for valid movements', async () => {
        let target = {
            x: 5,
            y: 0,
            face: "D"
        }
        let validation = isInvalidMovements(target)
        expect(validation).toBe(false)
    })
})