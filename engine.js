const limits = {
    max_x: 5,
    min_x: 0,
    max_y: 5,
    min_y: 0
}

function applyMovement(target, direction, unit) {
    target[direction] = target[direction] + unit
}

function isInvalidMovements(target) {
    let validation = (target.x > limits.max_x || target.x < limits.min_x) || (target.y > limits.max_y || target.y < limits.min_y)
    return validation
}

module.exports = { applyMovement, isInvalidMovements }

