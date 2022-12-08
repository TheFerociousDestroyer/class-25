class Cannon 
{
    constructor(x,y,width,height,angle)
    {
this.x = x
this.y = y
this.width = width
this.height = height
this.angle = angle
this.topImage = loadImage("./assets/canon.png")
this.CannonImage = loadImage("./assets/cannonBase.png")
    }

    show()
    {
        //right
        if(keyIsDown(RIGHT_ARROW) && this.angle<70)
        {
            this.angle +=1 
        }
        //left
        if(keyIsDown(LEFT_ARROW) && this.angle>-76)
        {
            this.angle -=1 
            console.log(this.angle)
        }
        //top
        push();
        translate(this.x,this.y)
        rotate(this.angle)
        imageMode(CENTER)
        image(this.topImage,0,0,this.width,this.height)
        pop()

        //bottom
        image(this.CannonImage,70,20,200,200)
        noFill()

    }
}
