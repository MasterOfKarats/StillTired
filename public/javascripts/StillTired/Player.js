function player(px,py){
    this.x = px
    this.y = py
    this.hie = 40
    this.wid = 40
    this.xpos = 0
    this.ypos = 0


    this.dir = function (x,y) {
        this.xpos = x
        this.ypos = y

    }
    this.update = function () {
        this.x += this.xpos
        this.y += this.ypos
    }
    this.show = function () {
        fill(255)
        rect(this.x, this.y, this.hie,this.wid)
    }

}
