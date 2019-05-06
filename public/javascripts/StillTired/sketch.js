var socket;
var players = []
function setup() {
	createCanvas(600, 600);
	var socket = io.connect('http://localhost:5000');
	newPlayer = new player(random(500),random(500))
	newCoin = new coin(Math.random() * 590, Math.random() * 591)
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
	for(var i = 0; i < players.length; i++)
	{
		text(players[i].id)
		fill(255)
		rect(players[i].x, players[i].y, 40,40)
	}
	newPlayer.update()
	newPlayer.show()
	newCoin.show()
	newPlayer.eatCoin(newCoin.xpos, newCoin.ypos)
	var data =
		{
			x: newPlayer.x,
			y: newPlayer.y
		};
	socket.emit('update', data)

}

function coin(x, y){
	this.xpos = x
	this.ypos = y
	this.hie = 20
	this.wid = 20

	this.show = function () {
		fill(253, 228, 11)
		rect(this.xpos,this.ypos, this.hie,this.wid)
	}

}