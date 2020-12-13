class Ground{

    constructor(x, y ,width, height){

        

        this.x = x
        this.y = y
        this.height = height
        this.width = width
        
        var options = {
            isStatic: true,
        }

        this.body = Bodies.rectangle(x, y, width, height, options)
        World.add(world, this.body)
        
    }

    display(){
        var pos3 = this.body.position

        push()
        translate(pos3.x, pos3.y);
        rectMode(CENTER);
        rect(0,0, this.width, this.height)
        
        pop();

    }
}