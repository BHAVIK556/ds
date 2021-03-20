class Ball{
    constructor(x, y,radius) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, radius, options);
    this.radius=radius;
    World.add(world, this.body);
    }
    
}