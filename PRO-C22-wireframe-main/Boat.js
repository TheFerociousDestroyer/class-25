class Boat
{
    constructor(x,y,width,height,boatPos)
    {
        var opt =
        {
            restitution:0.1,
            density:0.9,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,width,height,opt)
        this.width = width
        this.height = height
        this.boatPosition = boatPos
        World.add(world,this.body)
        this.image = loadImage("./assets/boat.png")

    }

    show()
    {
        push()
        imageMode(CENTER)
        translate(this.body.position.x,this.body.position.y)
        image(this.image,0,this.boatPosition,this.width,this.height)
        pop()
    }
}