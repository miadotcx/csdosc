class ball {
    constructor(i) {
        this.i = i;
        this.r = random(20, 50);
        this.x = random(this.r / 2, width - this.r / 2);
        this.y = random(this.r / 2, height - this.r / 2);
        this.sx = random(-10, 10);
        this.sy = random(-10, 10);

        this.c = color(random(0, 255), random(0, 255), random(0, 255));
    }

    /**
     * Draw the component
     */
    draw() {
        fill(this.c);
        ellipse(this.x, this.y, this.r);
    }

    /**
     * Move around the screen, hit on walls
     */
    move() {
        this.x += this.sx;
        this.y += this.sx;

        if (this.x < this.r / 2) {
            this.x = this.r / 2;
            this.sx *= -1;
            this.hitWall(3);
        } else if (this.x > width - this.r / 2) {
            this.x = width - this.r / 2;
            this.sx =* -1;
            this.hitWall(1);
        } else if (this.y < this.r / 2) {
            this.y = this.r / 2;
            this.sy *= -1;
            this.hitWall(0);
        } else if (this.y > height - this.r / 2) {
            this.y = height - this.r / 2;
            this.sy *= -1;
            this.hitWall(2);
        }
    }

    /**
     * Handle onMousePressed per ball
     * Change color of ball on click
     */
    mousePressed() {
        if (mouseX >= this.x - this.r / 2 && mouseX <= this.x + this.r / 2 && mouseY >= this.y - this.r / 2 && mouseY <= this.y + this.r / 2) {
            this.c = color(random(0, 255), random(0, 255), random(0, 255));
        }
    }

    /**
     * Handle screen resizes
     */
    resize() {}

    /**
     * Function executed when a wall is hit
     * @param {number} wallNumber number of wall counting clockwise with top = 0
     */
    hitWall(wallNumber) {
        client.sendMessage("/ball/hit", this.index, wallNumber);
    }
}