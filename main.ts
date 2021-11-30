input.onPinPressed(TouchPin.P0, function () {
    music.stopAllSounds()
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
})
input.onPinPressed(TouchPin.P2, function () {
    music.stopAllSounds()
    music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(randint(0, 10))
})
input.onButtonPressed(Button.B, function () {
    music.stopAllSounds()
    for (let index = 0; index < 2; index++) {
        music.playTone(220, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(220, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    }
    music.playTone(220, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Quarter))
})
input.onPinPressed(TouchPin.P1, function () {
    music.stopAllSounds()
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.stopAllSounds()
})
basic.showString("Hello!")
basic.showIcon(IconNames.Happy)
