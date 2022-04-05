input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
basic.showLeds(`
    # # # . .
    # . . . .
    # # . . .
    # . . . .
    # # # . .
    `)
radio.setGroup(200)
