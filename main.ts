function とめる () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function みぎて (数値: number) {
    servos.P1.setAngle(60 - 数値)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
    	
    } else if (receivedNumber == 2) {
        まえにすすむ()
    } else if (receivedNumber == 3) {
        みぎにまわる(1)
    } else if (receivedNumber == 4) {
        ひだりにまわる(1)
    } else if (receivedNumber == 5) {
        basic.showIcon(IconNames.Square)
    } else if (receivedNumber == 6) {
        basic.showIcon(IconNames.StickFigure)
    } else {
        とめる()
    }
})
function ひだりて (数値: number) {
    servos.P2.setAngle(120 - 数値)
}
function うしろにすすむ () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function まえにすすむ () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function みぎにまわる (じかん: number) {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(じかん)
    とめる()
}
function ひだりてをふる (かいすう: number) {
    for (let index = 0; index < かいすう; index++) {
        ひだりて(30)
        ひだりて(330)
    }
}
function ひだりにまわる (じかん: number) {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(じかん)
    とめる()
}
function みぎてをふる (かいすう: number) {
    for (let index = 0; index < かいすう; index++) {
        みぎて(330)
        みぎて(30)
    }
}
basic.forever(function () {
	
})
