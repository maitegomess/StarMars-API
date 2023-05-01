const { applyMovement, isInvalidMovements } = require("../movements.js")

it('should apply 1 unit in horizontal negative direction', async () => {
    let target = {
        x: 0,
        y: 0,
        face: "D"
    }

    applyMovement(target, "x", -1)

    expect(target.x).toBe(-1)
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