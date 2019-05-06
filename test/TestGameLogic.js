var mocha = require('mocha')
import newPlayer from "C:\Users\Nina Karat\IdeaProjects\StillTired\public\javascripts\StillTired\sketch.js"
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const mv = require('C:\\Users\\Nina Karat\\IdeaProjects\\StillTired\\public\\javascripts\\StillTired\\Movement.js')
const np = require("C:\\Users\\Nina Karat\\IdeaProjects\\StillTired\\public\\javascripts\\StillTired\\Player.js")
const sk = require("C:\\Users\\Nina Karat\\IdeaProjects\\StillTired\\public\\javascripts\\StillTired\\sketch.js")

describe('Player', function() {
    it("should have a value at x", function () {
        assert(np.player(100,100).x > 0)
    })
    it("should have a value at y", function () {
        assert(np.player(100,100).y > 0)
    })
    it("should have a width of 40", function () {
        assert(np.player(100,100).wid ===40)
    })
    it("should have a height of 40", function () {
        assert(np.player(100,100).hie ===40)
    })
})
describe('movement'), function () {
    it("should have left == true", function () {
        if(keys.Left == true) {
            assert(keyCode ===65 || keyCode === LEFT_ARROW)
        }
        if(keys.Right == true) {
            assert(keyCode ===68 || keyCode == RIGHT_ARROW)
        }
        if(keys.Up == true){
            assert(keyCode === 87 || keyCode == UP_ARROW)
        }
        if(keys.Down == true){
            assert(keyCode === 83 || keyCode === DOWN_ARROW)

        }
    })
}
