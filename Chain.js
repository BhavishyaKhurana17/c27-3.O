class Chain {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        
    var options = {
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX,y:this.offsetY}
      //  stiffness:0.04,
       // length:200
    }
  //  this.pointB=pointB;
    this.chain = Constraint.create(options);
    World.add(world,this.chain)
    }
    
   display(){
     
       var pointA=this.chain.bodyA.position;
       var pointB=this.chain.bodyB.position;
      // if(this.chain.bodyA){
       //var pointA = this.chain.bodyA.position;
     //  var pointB = this.pointB;
       strokeWeight(2);
       var Anchor1X=pointA.x
       var Anchor1Y=pointA.y

       var Anchor2X=pointB.x+this.offsetX
       var Anchor2Y=pointB.y+this.offsetY
       line (Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
   }
}