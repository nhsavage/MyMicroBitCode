let tonelist: number[];
let l_fail: number;
function check_tones(tonelist: number[]): number {
    //  possible improvement - save values in a list
    //  and then check whole list
    for (let num of tonelist) {
        //  wait for button pressed
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                basic.showArrow(ArrowNames.West)
                music.playTone(Note.C, 250)
                if (num != 0) {
                    basic.showIcon(IconNames.No)
                    return 1
                } else {
                    break
                }
                
            }
            
            if (input.buttonIsPressed(Button.B)) {
                basic.showArrow(ArrowNames.East)
                music.playTone(Note.G, 250)
                if (num != 2) {
                    basic.showIcon(IconNames.No)
                    return 1
                } else {
                    break
                }
                
            }
            
            if (input.logoIsPressed()) {
                basic.showArrow(ArrowNames.North)
                music.playTone(Note.E, 250)
                if (num != 1) {
                    basic.showIcon(IconNames.No)
                    return 1
                } else {
                    break
                }
                
            }
            
        }
    }
    //  if we get here, we got them all correct
    basic.showIcon(IconNames.Yes)
    return 0
}

function set_tonelist(numtones: number): number[] {
    //  set up the list of tones for this round
    let tonelist2 = [0, 0, 0]
    for (let i = 0; i < numtones; i++) {
        tonelist2[i] = randint(0, 2)
    }
    return tonelist2
}

//  main code starts here 
music.setBuiltInSpeakerEnabled(true)
let score = 0
//  When we start have 3 tones 
let numtones = 3
//  game loop
while (true) {
    //  get faster each time
    for (let tonetime of [500, 300, 100]) {
        tonelist = set_tonelist(numtones)
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
        l_fail = check_tones(tonelist)
        if (l_fail) {
            basic.showIcon(IconNames.Sad)
            pause(500)
            score = 0
        } else {
            score += 1
        }
        
        pause(500)
        basic.showString("" + score)
        //  If we want to go again press button A
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                break
            }
            
        }
    }
}
