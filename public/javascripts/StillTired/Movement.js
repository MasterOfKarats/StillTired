function keyPressed()
{
    if(keyCode === 87 || keyCode == UP_ARROW)
    {
        newPlayer.dir(0,-2)
    }
    else if (keyCode === 83 || keyCode === DOWN_ARROW)
    {
        newPlayer.dir(0,2)
    }
    else if(keyCode ===68 || keyCode == RIGHT_ARROW)
    {
        newPlayer.dir(2,0)
    }
    else if(keyCode ===65 || keyCode === LEFT_ARROW)
    {
        newPlayer.dir(-2,0)
    }
    else
    {
        newPlayer(0,0)
    }
}

