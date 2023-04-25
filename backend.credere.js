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

app.post("/position", function (req, res) {

});

app.get("/reset", function (req, res) {
    sonda = {
        x: 0,
        y: 0,
        face: "D"
    }

    res.send(sonda);

})
