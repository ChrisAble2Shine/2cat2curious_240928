namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const flower = SpriteKind.create()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.flower, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f 1 1 f 1 1 f . . . . . . 
        . . . f 1 1 f 1 1 f . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f 5 5 f 5 5 f . . . . . . 
        . . . f 5 5 f 5 5 f . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f 5 5 f 5 5 f . . . . . . 
        . . . f 5 5 f 5 5 f . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    bee.setPosition(mySprite.x + 80, mySprite.y - 80)
    bee.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
let bee: Sprite = null
let flower: Sprite = null
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
info.setLife(9)
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
    animation.runImageAnimation(
    coin,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 4 4 4 4 4 5 5 5 f . . 
        . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
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
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 4 4 4 5 5 5 f . . . 
        . . f 5 5 4 5 5 5 5 5 5 f . . . 
        . . f 5 5 4 5 5 5 5 5 5 f . . . 
        . . f 5 5 4 5 5 5 5 5 5 f . . . 
        . . f 5 5 4 5 5 5 5 5 5 f . . . 
        . . f 5 5 4 5 5 5 5 5 5 f . . . 
        . . f 5 5 5 5 4 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . f 5 5 5 4 5 5 5 f . . . . 
        . . . f 5 5 4 5 5 5 5 f . . . . 
        . . . f 5 5 4 5 5 5 5 f . . . . 
        . . . f 5 5 4 5 5 5 5 f . . . . 
        . . . f 5 5 4 5 5 5 5 f . . . . 
        . . . f 5 5 4 5 5 5 5 f . . . . 
        . . . f 5 5 5 4 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . f 5 5 5 4 5 5 5 f . . . . 
        . . . f 5 5 4 5 5 5 5 f . . . . 
        . . . f 5 5 4 5 5 5 5 f . . . . 
        . . . f 5 5 4 5 5 5 5 f . . . . 
        . . . f 5 5 4 5 5 5 5 f . . . . 
        . . . f 5 5 4 5 5 5 5 f . . . . 
        . . . f 5 5 5 4 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 4 4 4 5 5 5 f . . . 
        . . f 5 5 4 5 5 5 5 5 5 f . . . 
        . . f 5 5 4 5 5 5 5 5 5 f . . . 
        . . f 5 5 4 5 5 5 5 5 5 f . . . 
        . . f 5 5 4 5 5 5 5 5 5 f . . . 
        . . f 5 5 4 5 5 5 5 5 5 f . . . 
        . . f 5 5 5 5 4 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 4 4 4 4 4 5 5 5 f . . 
        . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
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
        `],
    100,
    true
    )
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        flower = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 3 . . . . . 3 . . . . . 
            . . . . . 3 . . . 3 . . . . . . 
            . . . . . a 3 a 3 a . . . . . . 
            . . . . . 3 4 4 4 3 . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . 7 7 . 7 . . 7 7 . . . . 
            . . . . 8 7 7 7 7 7 7 . . . . . 
            . . . . 8 7 7 7 7 8 . . . . . . 
            . . . . . 7 7 7 7 8 . . . . . . 
            . . . . . . 7 7 8 . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(flower, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
