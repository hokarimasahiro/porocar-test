input.onButtonPressed(Button.A, function () {
    carcotrol.carCtrl(200, 200)
    carcotrol.setNeoColor(carcotrol.colors(RGBColors.Red))
})
input.onGesture(Gesture.Shake, function () {
    carcotrol.carCtrl(0, 0)
    carcotrol.setNeoColor(carcotrol.colors(RGBColors.Black))
})
input.onButtonPressed(Button.B, function () {
    carcotrol.carCtrl(-200, -200)
    carcotrol.setNeoColor(carcotrol.colors(RGBColors.Green))
})
basic.pause(100)
carcotrol.setNeoColor(carcotrol.colors(RGBColors.Black))
carcotrol.setNeoColor(carcotrol.colors(RGBColors.Black))
basic.showNumber(carcotrol.getCarType())
basic.pause(2000)
basic.forever(function () {
    carcotrol.plotBarGraph(pins.analogReadPin(AnalogPin.P1) / 4, pins.analogReadPin(AnalogPin.P2) / 4)
    basic.pause(100)
})
