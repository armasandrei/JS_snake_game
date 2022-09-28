class Snake {
    //when creating a new snake -> atach a head to it
    constructor(x,y){
            this.x = x
            this.y = y     
            this.head = new Head(x,y)
            this.body = new Body(x,y+1)
            this.tail = new Tail(x,y+2)

    }
     //when rendering the snake -> also render the head
    render() {
        return (
        this.head.render() +
        this.body.render() +
        this.tail.render() 
         )

        
        // this.body.render()
        // this.tail.render()


    }
}