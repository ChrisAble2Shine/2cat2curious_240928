namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
let coin: Sprite = null
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
mySprite.ay = 300
scene.cameraFollowSprite(mySprite)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 4 4 4 4 4 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 4 4 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Coin)
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
