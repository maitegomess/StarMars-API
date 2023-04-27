const express = require("express");
const app = express();
//indica para express ler body com json
app.use(express.json())

app.listen(8081);

const directions_left = { "E": "B", "D": "C", "C": "E", "B": "D" }
const directions_right = { "E": "C", "D": "B", "C": "D", "B": "E" }

const limits = {
    max_x: 5,
    min_x: 0,
    max_y: 5,
    min_y: 0
}

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

    if ((clone_sonda.x > limits.max_x || clone_sonda.x < limits.min_x) || (clone_sonda.y > limits.max_y || clone_sonda.y < limits.min_y)) {
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
                target.x = target.x + 1
            } else if (target.face == "C") {
                target.y = target.y + 1
            } else if (target.face == "B") {
                target.y = target.y - 1
            } else {
                target.x = target.x - 1
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
