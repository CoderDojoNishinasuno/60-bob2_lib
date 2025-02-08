//% color=190 icon="¥f544" block="BOB2" weight=100

namespace BOB2 
{
    //% block="見せる|number $v"
    export function showNumber(v: number, interval: number = 150)
    {return(v)}

    //% block="とめる"
    export function stop() 
    {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }

    //% block="みぎて|number $angle"
    export function rightHand(angle: number) {
        servos.P1.setAngle(60 - angle)
    }

    //% block="ひだりて|number $angle"
    export function leftHand(angle: number) {
        servos.P2.setAngle(120 - angle)
    }

    //% block="うしろにすすむ"
    export function backword() {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }

    //% block="まえにすすむ"
    export function forward() {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }

    //% block="みぎまわる|number $angle"
    export function turnRight(t: number) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(t)
        stop()
    }

    //% block="ひだりてふる|number $num"
    export function waveLeftHand(num: number) {
        for (let index = 0; index < num; index++) {
            leftHand(-30)
            basic.pause(200)
            leftHand(30)
            basic.pause(200)
        }
    }

    //% block="ひだりまわる| number $t"
    export function turnLeft(t: number) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(t)
        stop()
    }

    //% block="みぎてふる|number $num"
    export function waveRightHand(num: number) {
        for (let index2 = 0; index2 < num; index2++) {
            rightHand(-30)
            basic.pause(200)
            rightHand(30)
            basic.pause(200)
        }
    }
}
