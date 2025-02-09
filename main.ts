//% color=#F0a020 icon="\uf001" block="BOB V2" weight=100
//% groups="['動き','うで']"

namespace BOB2 
{
    //% block="止める"
    //% group="動き"
    export function stop() 
    {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }

    //% block="右手うごかす %angle 度"
    //% group="うで"
    export function rightHand(angle: number) {
        servos.P1.setAngle(60 - angle)
    }

    //% block="左手うごかす %angle 度"
    //% group="うで"
    export function leftHand(angle: number) {
        servos.P2.setAngle(120 - angle)
    }

    //% block="うしろに進む"
    //% group="動き"
    export function backword() {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }

    //% block="まえに進む"
    //% group="動き"
    export function forward() {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }

    //% block="右に回る %t 秒"
    //% group="動き"
    export function turnRight(t: number) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(t*1000)
        stop()
    }

    //% block="左に回る %t 秒"
    //% group="動き"
    export function turnLeft(t: number) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(t*1000)
        stop()
    }

    //% block="右手をふる %num 回"
    //% group="うで"
    export function waveRightHand(num: number) {
        for (let index = 0; index < num; index++) {
            rightHand(-30)
            basic.pause(200)
            rightHand(30)
            basic.pause(200)
        }
    }

    //% block="左手をふる %num 回"
    //% group="うで"
    export function waveLeftHand(num: number) {
        for (let index = 0; index < num; index++) {
            leftHand(-30)
            basic.pause(200)
            leftHand(30)
            basic.pause(200)
        }
    }
}
