//% color=#F0a020 icon="\uf001" block="BOB V2" weight=100
//% groups="['動き','うで']"

namespace BOB2 {
    // falseは、関数実行許可
    let privilage = false

    //% block="止める"
    //% group="動き"
    export function stop() {
        if (!privilage) {
            privilage = true
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.digitalWritePin(DigitalPin.P16, 0)
            privilage = false
        }
    }

    //% block="右手うごかす %angle 度"
    //% group="うで"
    export function rightHand(angle: number) {
        if (!privilage) {
            privilage = true
            servos.P1.setAngle(60 - angle)
            privilage = false
        }
    }

    //% block="左手うごかす %angle 度"
    //% group="うで"
    export function leftHand(angle: number) {
        if (!privilage) {
            privilage = true
            servos.P2.setAngle(120 - angle)
            privilage = false
        }
    }

    //% block="うしろに進む"
    //% group="動き"
    export function backword() {
        if (!privilage) {
            privilage = true
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P14, 1)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.digitalWritePin(DigitalPin.P16, 0)
            privilage = false
        }
    }

    //% block="まえに進む"
    //% group="動き"
    export function forward() {
        if (!privilage) {
            privilage = true
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.digitalWritePin(DigitalPin.P16, 1)
            privilage = false
        }
    }

    //% block="右に回る %t 秒"
    //% group="動き"
    export function turnRight(t: number) {
        if (!privilage) {
            privilage = true
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.digitalWritePin(DigitalPin.P16, 0)
            basic.pause(t * 1000)
            privilage = false
            stop()
        }
    }

    //% block="左に回る %t 秒"
    //% group="動き"
    export function turnLeft(t: number) {
        if (!privilage) {
            privilage = true
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P14, 1)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.digitalWritePin(DigitalPin.P16, 1)
            basic.pause(t * 1000)
            privilage = false
            stop()
        }
    }

    //% block="右手をふる %num 回"
    //% group="うで"
    export function waveRightHand(num: number) {
        if (!privilage) {
            privilage = true
            for (let index = 0; index < num; index++) {
                rightHand(-30)
                basic.pause(200)
                rightHand(30)
                basic.pause(200)
            }
            privilage = false
        }
    }

    //% block="左手をふる %num 回"
    //% group="うで"
    export function waveLeftHand(num: number) {
        if (!privilage) {
            privilage = true
            for (let index = 0; index < num; index++) {
                leftHand(-30)
                basic.pause(200)
                leftHand(30)
                basic.pause(200)
            }
            privilage = false
        }
    }
}
