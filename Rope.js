class Rope {
  constructor(bodyA,bodyB,offsetX,offsetY) {
    
   this.offsetX = offsetX;
   this.offsetY = offsetY;


   var options = {
        bodyA: bodyA,
        bodyB: bodyB,
        pointB:{x:this.offsetX,y:this.offsetY},
        length: 10,
        stiffness:0.04
    }
  
  
    this.rope = Matter.Constraint.create(options);
    World.add(world,this.rope);
  
  
  }
   display() {
     var pointA = this.rope.bodyA.position;
     var pointB = this.rope.bodyB.position;
   
       stroke("green")
       strokeWeight(4);
       var anchor1X = pointA.x;
       var anchor1Y = pointA.y;
       var anchor2X = pointB.x + this.offsetX;
       var anchor2Y = pointB.x + this.offsetY;

       line(anchor1X,anchor1Y,anchor2X,anchor2Y);
   }
  
 }