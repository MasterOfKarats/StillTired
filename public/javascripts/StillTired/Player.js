var coinE = false
function player(px,py){
    this.x = px
    this.y = py
    this.hie = 40
    this.wid = 40
    this.xpos = 0
    this.ypos = 0
    this.score = 0


    this.dir = function (x,y) {
        this.xpos = x
        this.ypos = y

    }
    this.update = function () {
         this.x += this.xpos
         this.y += this.ypos
        this.x = constrain(this.x, 0, 550)
        this.y = constrain(this.y, 0,550)
    }
    this.show = function () {
        fill(255)
        rect(this.x, this.y, this.hie,this.wid)
    }
    this.eatCoin = function (posx, posy) {
        var distance = dist(this.x, this.y, posx, posy)
        if(distance <= 20){
            coinE = true
            console.log(distance)
            newCoin.xpos = Math.random() *550
            newCoin.ypos = Math.random() * 550
            this.score += 1
            console.log(this.score)
        }
        var sc = textSize(32);
        sc.text(this.score, 10, 30);
        sc.fill(88, 24, 69);
    }

}
