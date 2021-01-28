class Ball {
  constructor(x, y, width, height, angle) {
    var options = { 
      density: 10, 
      frictionAir: 0.005};
    
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill("red")
    ellipse(0, 0, this.width, this.height);
    pop();
  }
}
/*function RD()
{
  var rand = Math.round(random(1,6));
  var border1;
    switch(rand)
    {
    case 1: border1.shapeColor="red";
    break;
    case 2: border1.shapeColor="blue";
    break;
    case 3: border1.shapeColor="orange";
    break;
    case 4: border1.shapeColor="green";
    break;
    case 5: border1.shapeColor="yellow";
    break;
    case 6: border1.shapeColor="pink";
    break;
    default : 
    break;
    }
}*/