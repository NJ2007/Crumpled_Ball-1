class Paper{
    constructor(x,y){
     var options ={
         restitution:0.3,
         density:1.2,
         friction:0.5,
         isStatic:false
     }
     this.body = Bodies.circle(x,y,20,options);
     World.add(world,this.body);
    }
    
    display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(CENTER);
    fill("yellow");
    ellipse(0,0,20,20);
    pop();
    
    }

}