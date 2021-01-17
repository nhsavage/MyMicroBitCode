def check_tones(tonelist: List[number]):
    for num in tonelist:
        # wait for button pressed
        while True:
            if input.button_is_pressed(Button.A):
                music.play_tone(Note.C, tonetime)
                if num != 0:
                    basic.show_icon(IconNames.ANGRY)
                    return 1
                else:
                    break
            if input.button_is_pressed(Button.B):
                music.play_tone(Note.G, tonetime)
                if num != 2:
                    basic.show_icon(IconNames.ANGRY)
                    return 1
                else:
                    break
            if input.logo_is_pressed():
                music.play_tone(Note.E, tonetime)
                if num != 1:
                    basic.show_icon(IconNames.ANGRY)
                    return 1
                else:
                    break
    # if we get here, we got them all correct
    basic.show_icon(IconNames.HAPPY)
    return 0
music.set_built_in_speaker_enabled(True)
# When we start have 3 tones and 500 ms gaps
count = 3
tonetime = 500
while True:
    tonelist = [0, 0, 0]
    index = 0
    while index <= count - 1:
        tonelist[index] = randint(0, 2)
        index += 1
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
    check_tones(tonelist)
    pause(500)
    basic.show_icon(IconNames.SQUARE)
    # If we want to go again press button A
    while True:
        if input.button_is_pressed(Button.A):
            break