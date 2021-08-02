brick.buttonEnter.onEvent(ButtonEvent.Pressed, function () {
    if (true) {
        if (20 < sensors.color1.light(LightIntensityMode.Reflected)) {
            motors.largeAD.tank(5, 15)
        } else {
            motors.largeAD.tank(15, 5)
        }
    }
})
forever(function () {
	
})
forever(function () {
    brick.showValue("RLI", sensors.color1.light(LightIntensityMode.Reflected), 1)
})
