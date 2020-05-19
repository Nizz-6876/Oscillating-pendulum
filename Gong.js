class Gong{
    constructor(x, y,radius) {
        var options = {
          'restitution':0.5,
          'density':1, 
          'friction':1   
        }
        this.radius=radius;
        this.body = Bodies.circle(x, y,radius, options);
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("yellow");
        circle(0,0,this.radius);
        pop();
      }
}