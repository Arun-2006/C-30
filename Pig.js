class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //The visibility of the pig
    this.Visiblity = 255;
  }

 display(){
   console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
     //To make the pig vanish when the bird hits it
     World.remove(world, this.body);
     push();
     //reduce visibility of the pig once hit by the bird
     this.Visiblity =this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }



};
