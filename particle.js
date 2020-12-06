class Particle{
    constructor(x,y,r){
       var options={
            isStatic:true,
            restitution:0.8,
            friction:0.5,
            density:1.2
       } 
       this.x=x;
       this.y=y;
       this.r=r;
       this.body = Bodies.circle(this.x,this.y,this.r/2,options);
       World.add(world, this.body);
    }
    display(){
        var PaperPos=this.body.position;
        push();
        translate(PaperPos.x,PaperPos.y);
        rectMode(CENTER);
        stroke("red");
        fill(255,0,0);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}