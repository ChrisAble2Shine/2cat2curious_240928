scene.set_background_color(9)
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)