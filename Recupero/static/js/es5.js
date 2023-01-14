let x = 0
let y = 0
let l = 40
let w = 400
let h = 400
let d = 20

function setup() {

    createCanvas(w, h);
    background(0);

}

function draw() {
    let r = random()
    stroke(255)

    if (r < 0.5) {

        line(x, y, x + l, y + l)
    }
    if (r > 0.5) {

        line(x, y + l, x + l, y)

    }

    x = x + l
    if (x >= 400) {
        x = 0
        y = y + l
    }
}