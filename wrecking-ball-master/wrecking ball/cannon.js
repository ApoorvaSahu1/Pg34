class Cannon {
    constructor(x, y) {
      this.x=x;
      this.y=y;
      this.width = 300;
      this.height = 300;
      this.cimage=loadImage("gettyimages-1140841251-612x612-removebg-preview.png")
      
      World.add(world, this.cimage);
    }
    display(){
    
      push();
      imageMode(CENTER);
      image(this.cimage,this.x,this.y,this.width,this.height)
    
      pop();
    }
  }