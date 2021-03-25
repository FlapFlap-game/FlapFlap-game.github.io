var bird;
var pipes = [];
var bomb = [];

score = 0;

let logo;
let pipetex;
let birdtex;
let pipetex2;
let bg;
let bombtex;
let scorebox;
let pkin;
let flap;
let yay;

let mode = 0;

function preload() {
    logo = loadImage('tex/newLogo.png');
    pipetex = loadImage('tex/tree_up.png');
    birdtex = loadImage('tex/passarinho.png');
    pipetex2 = loadImage('tex/tree_down.png');
    bg = loadImage('tex/bgroundnew.png');
    start = loadImage('tex/prestart2.png');
    win = loadImage('tex/youwon2.png');
    bombtex = loadImage('tex/bomb.png');
    scorebox = loadImage('tex/scorebox.png');
    flap = loadSound('sound/salto.mp3');
    pkin = loadSound('sound/selecione o botão do jogo.mp3');
}

function setup() {
    createCanvas(400, 600);
    bird = new Bird();
    pipes.push(new Pipe());
    textSize(32);
    clear();

}


function draw() {
    background(bg);

    if (mode == 0) {

        image(logo, 10, 20, 300, 100);
        fill(255);
        image(start, 30, 350, 350, 60);
        score = 0;
        bird.x = 64;
        bird.y = height / 2;

        pipes.x = width;
        pipes.w = 40;
        pipes.top = random(height / 2);
        pipes.bottom = random(height / 2);

    }

    if (mode == 1) {


        for (var i = pipes.length - 1; i >= 0; i--) {
            pipes[i].show();
            pipes[i].update();

            if (pipes[i].hits(bird)) {
                score = 0;
            } else if (frameCount % 100 == 0) {
                score = score + 1;
            }


            if (pipes[i].offscreen()) {
                pipes.slice(i, 1);
            }
        }



        if (score >= 99999) {
            mode = 2;
        }


        bird.update();
        bird.show();

        if (frameCount % 100 == 0) {
            pipes.push(new Pipe());
        }

        if (score == 1) {
            score += 1
        }

        if (score >= 200) {
            pipes.speed = 4;
        }

        if (score >= 600) {
            pipes.speed = 10;
        }

        if (score >= 1200) {
            pipes.speed = 15;
        }

        image(scorebox, 10, 20, 120, 80);
        text(score, 35, 70);


    }

    if (mode == 2) {
        fill(255);
        image(win, 30, 250, 350, 60);
        text('Restart the page to start again', 50, 400);
    }
}


function keyPressed() {
    if (key == ' ') {
        bird.up();

        flap.play();
    }

    if (key == 'r') {
        mode = 0;
    }
    if (key == ' ' && mode == 0) {
        bird.up();
        mode = 1;
        pkin.play();
    }
}