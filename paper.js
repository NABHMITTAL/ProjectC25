class Paper{
    constructor(x,y,w,h){
        var opt = {
           isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density  : 1.2
        }
        this.body = Matter.Bodies.rectangle(x,y,w,h,opt);
        this.image = loadImage("images/download.jpg")
        image.scale = 0.125
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.diameter);
        pop();
    }
}