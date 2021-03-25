function Pipe() {
    this.top = random(height / 2);
    this.bottom = random(height / 2);
    this.x = width;
    this.w = 40;
    this.speed = 2;

    this.hits = function(bird) {
        if (bird.y < this.top || bird.y > height - this.bottom) {

            if (bird.x > this.x && bird.x < this.x + this.w) {
                return true;
            }
        }
        return false;
    }

    this.show = function() {
        fill(255);
        image(pipetex, this.x, 0, this.w, this.top);
        image(pipetex2, this.x, height - this.bottom, this.w, this.bottom);
    }

    this.update = function() {
        this.x -= this.speed;
    }

    this.offscreen = function() {
        if (this.x < -this.w) {
            return true;
        } else {
            return false;
        }
    }
}