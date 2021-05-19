class Dustbin{
    constructor(x,y){
        this.dustbinWidth=200;
        this.dustbinHeight=100;
        this.wallThickness=20;
        this.x=x;
        this.y=y;
        this.angle=0;
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic :true});

        this.rightBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
        this.leftBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});

        Matter.Body.setAngle(this.rightBody,-1*this.angle);
        Matter.Body.setAngle(this.leftBody,this.angle);

        World.add(world,this.bottomBody);
        World.add(world,this.rightBody);
        World.add(world,this.leftBody);

    }

    display(){
        var pos_bottom = this.bottomBody.position;
        push ();
        translate(pos_bottom.x,pos_bottom.y);
        fill("pink");
        rectMode(CENTER);
        rect(0,0,this.dustbinWidth,this.wallThickness);
        pop()
        
        var pos_right= this.rightBody.position;
        push ();
        translate(pos_right.x,pos_right.y);
        fill("pink");
        rotate(-1*this.angle);
        rectMode(CENTER);
        rect(0,0,this.wallThickness,this.dustbinHeight);
        pop();
 
        var pos_left = this.leftBody.position;
        push ();
        translate(pos_left.x,pos_left.y);
        fill("pink");
        rotate(this.angle);
        rectMode(CENTER);
        rect(0,0,this.wallThickness,this.dustbinHeight);
        pop();
    }



}