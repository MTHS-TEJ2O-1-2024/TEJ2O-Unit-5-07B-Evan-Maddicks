/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan M
 * Created on: Oct 2024
 * This program will change a servo's angle.
*/

//variable
let servo1 = robotbit.Servos.S1

//cleanup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

//setup
input.onButtonPressed(Button.A,function() {
    robotbit.Servo(servo1,45)
    basic.clearScreen()
    basic.showNumber(45)
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servo1, 135)
    basic.clearScreen()
    basic.showNumber(135)
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})