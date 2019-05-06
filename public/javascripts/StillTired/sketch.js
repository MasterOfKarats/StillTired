var socket;
var players = []
function setup() {
	createCanvas(600, 600);
	var socket = io.connect('http://localhost:5000');
	newPlayer = new player(random(500),random(500))
	newCoin = new coin()
	var data =
		{
			x: newPlayer.x,
			y: newPlayer.y
		};
	socket.emit('start', data);

	socket.on("updateList", function (data) {
		players = data
	})
}

function draw() {
	background(181, 238, 245)
	for(var i =0; players.length; i++)
	{
		text(players[i].id)
		fill(255)
		rect(players[i].x, players[i].y, 50,50)

	}
	newPlayer.update()
	newPlayer.show()
	newCoin.show()
	var data =
		{
			x: newPlayer.x,
			y: newPlayer.y
		};
	socket.emit('update', data)

}
function coin(){
	this.xpos = Math.random() * 590
	this.ypos = Math.random() * 591
	this.hie = 20
	this.wid = 20

	this.show = function () {
		fill(253, 228, 11)
		rect(this.xpos,this.ypos, this.hie,this.wid)
	}
	this.returnx = function () {
		return this.xpos
	}
	this.returny = function () {
		return this.ypos
	}

}