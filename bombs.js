function bombs() {
    this.x = random(height / 2);
    let a = 0;

    this.hits = function(bird) {
        if (bird.y < this.x) {

            if (bird.x > this.x && bird.x < this.x + a) {
                return true;
            }
        }
        return false;
    }

    this.show = function() {
        fill(255);
        image(bombtex, this.x, a, 40, 40);

    }

    this.update = function() {
        a = a + 1;
    }

    this.offscreen = function() {
        if (this.x < -this.w) {
            return true;
        } else {
            return false;
        }
    }
}