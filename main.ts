let tonelist: number[];
let index: number;
function check_tones(tonelist: number[]): number {
    for (let num of tonelist) {
        //  wait for button pressed
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                music.playTone(Note.C, tonetime)
                if (num != 0) {
                    basic.showIcon(IconNames.Angry)
                    return 1
                } else {
                    break
                }
                
            }
            
            if (input.buttonIsPressed(Button.B)) {
                music.playTone(Note.G, tonetime)
                if (num != 2) {
                    basic.showIcon(IconNames.Angry)
                    return 1
                } else {
                    break
                }
                
            }
            
            if (input.logoIsPressed()) {
                music.playTone(Note.E, tonetime)
                if (num != 1) {
                    basic.showIcon(IconNames.Angry)
                    return 1
                } else {
                    break
                }
                
            }
            
        }
    }
    //  if we get here, we got them all correct
    basic.showIcon(IconNames.Happy)
    return 0
}

music.setBuiltInSpeakerEnabled(true)
//  When we start have 3 tones and 500 ms gaps
let count = 3
let tonetime = 500
while (true) {
    tonelist = [0, 0, 0]
    index = 0
    while (index <= count - 1) {
        tonelist[index] = randint(0, 2)
        index += 1
    }
    //  play the tones
    for (let num2 of tonelist) {
        if (num2 == 0) {
            basic.showArrow(ArrowNames.West)
            music.playTone(262, tonetime)
            basic.clearScreen()
        }
        
        if (num2 == 1) {
            basic.showArrow(ArrowNames.North)
            music.playTone(330, tonetime)
            basic.clearScreen()
        }
        
        if (num2 == 2) {
            basic.showArrow(ArrowNames.East)
            music.playTone(392, tonetime)
            basic.clearScreen()
        }
        
    }
    check_tones(tonelist)
    pause(500)
    basic.showIcon(IconNames.Square)
    //  If we want to go again press button A
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            break
        }
        
    }
}
