input.onButtonPressed(Button.A, function () {
    porocar.carCtrl(200, 200)
    porocar.setNeoColor(porocar.colors(RGBColors.Red))
})
input.onGesture(Gesture.Shake, function () {
    porocar.carCtrl(0, 0)
    porocar.setNeoColor(porocar.colors(RGBColors.Black))
})
input.onButtonPressed(Button.B, function () {
    porocar.carCtrl(-200, -200)
    porocar.setNeoColor(porocar.colors(RGBColors.Green))
})
basic.pause(100)
porocar.setNeoColor(porocar.colors(RGBColors.Black))
porocar.setNeoColor(porocar.colors(RGBColors.Black))
basic.pause(2000)
basic.forever(function () {
    porocar.plotBarGraph(pins.analogReadPin(AnalogPin.P1) / 4, pins.analogReadPin(AnalogPin.P2) / 4)
    basic.pause(100)
})
