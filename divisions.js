class Divisions {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);

        this.score = floor(random(100, 600));
        this.score -= this.score % 50;
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);

        textAlign(CENTER, CENTER);
        text(this.score, this.body.position.x + 40, height - divisionHeight);
    }
};