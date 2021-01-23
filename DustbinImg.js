class DustbinImg {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.image=loadImage ("sprites/dustbingreen.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      scale(0.42,0.28);
      rectMode(CENTER);
      fill("white");
      image(this.image,0,0,this.x,this.y);
      pop();
     // rect(pos.x, pos.y, this.width, this.height);
     
    }
  };