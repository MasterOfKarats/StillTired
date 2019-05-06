const keys =
    {
        Up: false,
        Down: false,
        Left: false,
        Right: false
    }

function keyPressed()
{
    if(keyCode === 87 || keyCode == UP_ARROW)
    {   keys.Up = true
        //newPlayer.dir(0,-1)
    }
    else if (keyCode === 83 || keyCode === DOWN_ARROW)
    {
        keys.Down = true
        //newPlayer.dir(0,1)
    }
    else if(keyCode ===68 || keyCode == RIGHT_ARROW)
    {
        keys.Right = true
        //newPlayer.dir(1,0)
    }
    else if(keyCode ===65 || keyCode === LEFT_ARROW)
    {
        keys.Left = true
       // newPlayer.dir(-1,0)
    }
    else
    {
        newPlayer(0,0)
    }
}

