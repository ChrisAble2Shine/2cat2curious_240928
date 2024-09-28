controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -219
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f . . . . 
    . . . . . . . . . . . f f f . . 
    . . . . . . . . . . . f 5 f . . 
    . . . . . . . . . . . f f f f . 
    f f f f f f f f f f f f f . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f . f . . . f . f . . . . 
    . . . f . f . . . f . f . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite.ay = 370
scene.cameraFollowSprite(mySprite)
