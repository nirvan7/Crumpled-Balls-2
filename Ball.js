class Ball{
  constructor(x, y, diameter) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.x=x;
      this.y=y;
      this.diameter = diameter;
      this.body = Bodies.circle(x, y, diameter);
      this.image=loadImage ("sprites/paper.png");
      World.add(world, this.body);
    }
    display(){
     var pos =this.body.position;
    fill("red");
    push();
    translate(pos.x,pos.y);
    scale(1.2)
    image(this.image, 0, 0,this.diameter,this.diameter);
    pop();
    }
}
