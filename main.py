def check_tones(tonelist):
    # possible improvement - save values in a list
    # and then check whole list
    for num in tonelist:
        # wait for button pressed
        while True:
            if input.button_is_pressed(Button.A):
                basic.show_arrow(ArrowNames.WEST)
                music.play_tone(Note.C, 250)
                if num != 0:
                    basic.show_icon(IconNames.NO)
                    return 1
                else:
                    break
            if input.button_is_pressed(Button.B):
                basic.show_arrow(ArrowNames.EAST)
                music.play_tone(Note.G, 250)
                if num != 2:
                    basic.show_icon(IconNames.NO)
                    return 1
                else:
                    break
            if input.logo_is_pressed():
                basic.show_arrow(ArrowNames.NORTH)
                music.play_tone(Note.E, 250)
                if num != 1:
                    basic.show_icon(IconNames.NO)
                    return 1
                else:
                    break
    # if we get here, we got them all correct
    basic.show_icon(IconNames.YES)
    return 0

def set_tonelist(numtones: number):
    # set up the list of tones for this round
    tonelist2 = [0, 0 , 0]
    for i in range(numtones):
        tonelist2[i] = randint(0, 2)
    return tonelist2
# main code starts here 
music.set_built_in_speaker_enabled(True)
score = 0
# When we start have 3 tones 
numtones = 3
# game loop
while True:
    tonelist = set_tonelist(numtones)
    # get faster each time
    for tonetime in [500, 300, 100]:
        # play the tones
        for num2 in tonelist:
            if num2 == 0:
                basic.show_arrow(ArrowNames.WEST)
                music.play_tone(262, tonetime)
                basic.clear_screen()
            if num2 == 1:
                basic.show_arrow(ArrowNames.NORTH)
                music.play_tone(330, tonetime)
                basic.clear_screen()
            if num2 == 2:
                basic.show_arrow(ArrowNames.EAST)
                music.play_tone(392, tonetime)
                basic.clear_screen()
        l_fail = check_tones(tonelist)
        if l_fail:
            basic.show_icon(IconNames.SAD)
            pause(500)
            score = 0
        else: 
            score +=1
        pause(500)
        basic.show_string(str(score))
        # If we want to go again press button A
        while True:
            if input.button_is_pressed(Button.A):
                break