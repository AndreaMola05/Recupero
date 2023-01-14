let x = 0;
let y = 0;
let l = 50;
let riga = 0

function setup() {
    createCanvas(400, 400);
    background(220);
}

function draw() {
    if (riga % 2) {
        if (frameCount % 2 != 0) {
            fill("white");
            square(x, y, l);
        } else {
            fill("black");
            square(x, y, l);
        }
    } else {
        if (frameCount % 2 != 0) {
            fill("black");
            square(x, y, l);
        } else {
            fill("white");
            square(x, y, l);
        }
    }

    x = x + l;
    if (x >= 400) {
        x = 0;
        y = y + l;
        riga++
    }
}