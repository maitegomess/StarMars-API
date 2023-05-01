const express = require("express");
const { applyMovement, isInvalidMovements } = require("./engine.js")
const app = express();
//indica para express ler body com json
app.use(express.json())

const directions_left = { "E": "B", "D": "C", "C": "E", "B": "D" }
const directions_right = { "E": "C", "D": "B", "C": "D", "B": "E" }

let sonda = {
    x: 0,
    y: 0,
    face: "D"
}

app.get("/position", function (req, res) {
    res.send(sonda)
});

app.post("/move", function (req, res) {
    let movements = req.body.movements
    let clone_sonda = {}
    Object.assign(clone_sonda, sonda)

    move(movements, clone_sonda)

    if (isInvalidMovements(clone_sonda)) {
        res.send({ messege: "Ocorreu um erro, você ultrapassou o limite de marte!" })
    } else {
        move(movements, sonda)
        res.send(sonda)
    }

});

function getDirection(turn_to, target) {
    if (turn_to == "GE") {
        return directions_left[target.face]
    } else if (turn_to == "GD") {
        return directions_right[target.face]
    }
}

function move(commands, target) {
    commands.forEach(movement => {
        if (movement == "M") {
            if (target.face == "D") {
                applyMovement(target, "x", 1)
            } else if (target.face == "C") {
                applyMovement(target, "y", 1)
            } else if (target.face == "B") {
                applyMovement(target, "y", -1)
            } else {
                applyMovement(target, "x", -1)
            }
        } else if (movement == "GE" || movement == "GD") {
            target.face = getDirection(movement, target)
        }

    });
}

app.get("/reset", function (req, res) {
    sonda = {
        x: 0,
        y: 0,
        face: "D"
    }

    res.send(sonda);

})

module.exports = { app, sonda }