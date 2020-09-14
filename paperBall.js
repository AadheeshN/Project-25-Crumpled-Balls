class paper {
    constructor(x, y, radiusX) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 5,
        }

        this.body = Bodies.circle(x, y, radiusX, options);
        this.radius = radiusX;
        this.image = loadImage("paperImage.png");
        World.add(world, this.body);
    }    
    
    display() { 
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.body.position.radiusX);   
    }


}