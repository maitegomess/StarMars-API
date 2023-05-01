
const directions_left = { "E": "B", "D": "C", "C": "E", "B": "D" }
const directions_right = { "E": "C", "D": "B", "C": "D", "B": "E" }

function getDirection(turn_to, target) {
    if (turn_to == "GE") {
        return directions_left[target.face]
    } else if (turn_to == "GD") {
        return directions_right[target.face]
    }
}

module.exports = { getDirection }