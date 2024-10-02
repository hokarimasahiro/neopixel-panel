input.onButtonPressed(Button.A, function () {
    文字選択 += 1
    if (文字選択 >= 文字リスト.length) {
        文字選択 = 0
    }
    表示文字選択(文字選択)
    表示位置 = 0
    strip.showColor(背景色)
    strip2.showColor(背景色)
})
function 文字色変更 () {
    文字色番号 += 1
    if (文字色番号 > 文字色リスト.length) {
        文字色番号 = 0
    }
    if (文字色番号 < 文字色リスト.length) {
        文字色 = 文字色リスト[文字色番号]
        背景色 = 背景色リスト[文字色番号]
    }
}
input.onButtonPressed(Button.AB, function () {
    背景番号 += 1
    if (背景番号 >= 4) {
        背景番号 = 0
    }
    if (背景番号 == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip2.showColor(neopixel.colors(NeoPixelColors.Black))
        表示位置 = 0
        文字表示()
    } else if (背景番号 == 1) {
        strip.showRainbow(1, 360)
    } else if (背景番号 == 2) {
        for (let カウンター2 = 0; カウンター2 <= strip.length(); カウンター2++) {
            strip.setPixelColor(カウンター2, neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
        }
    } else {
        for (let カウンター3 = 0; カウンター3 <= strip.length(); カウンター3++) {
            R = randint(0, 3) * 63
            strip.setPixelColor(カウンター3, neopixel.rgb(R, R, R))
        }
    }
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    文字色変更()
})
function 文字表示 () {
    strip2.shift(-8)
    文字表示サブ()
    if (表示位置 % 4 == 0) {
        strip.show()
    } else {
        strip2.show()
    }
    strip.shift(-8)
    表示位置 += 2
    if (表示位置 >= 文字.length) {
        表示位置 = 0
        文字色変更()
    }
}
function 表示文字選択 (文字番号: number) {
    文字 = 文字リスト[文字番号]
    for (let index = 0; index < 行末空白; index++) {
        文字 = "" + 文字 + "00"
    }
    if (文字.length % 4 != 0) {
        文字 = "" + 文字 + "00"
    }
}
function 文字表示サブ () {
    LINE = bit.hexToNumber(文字.substr(表示位置, 2))
    for (let Y = 0; Y <= 7; Y++) {
        if (表示位置 % 4 == 0) {
            POS2 = Y + 248
            POS = 255 - Y
        } else {
            POS = Y + 248
            POS2 = 255 - Y
        }
        if (文字色番号 >= 文字色リスト.length) {
            文字色 = neopixel.rgb(randint(5, 255), randint(5, 255), randint(5, 255))
        }
        if (bit.bitTest(LINE, 7 - Y)) {
            strip.setPixelColor(POS, 文字色)
            strip2.setPixelColor(POS2, 文字色)
        } else {
            strip.setPixelColor(POS, 背景色)
            strip2.setPixelColor(POS2, 背景色)
        }
    }
}
let POS = 0
let POS2 = 0
let 文字 = ""
let R = 0
let strip2: neopixel.Strip = null
let strip: neopixel.Strip = null
let 背景色 = 0
let 背景番号 = 0
let 文字色 = 0
let 文字色番号 = 0
let 表示位置 = 0
let 文字選択 = 0
let 行末空白 = 0
let 背景色リスト: number[] = []
let 文字色リスト: number[] = []
let 文字リスト: string[] = []
let LINE = 0
let イメージ５ = ""
let イメージ４ = ""
LINE = 0
let イメージ１ = "00FE020202020200001C2A2A2A18000000207C2222040000A0C000000000000000122A2A2A240000000000000000000000207C2222040000003E10202010000000221A0418200000000000000000000000FE909090906000003844828244380000FE9090909060000000000000000000003844828282440000FE10101010FE000618688868180600000082FE8200000000FE40201008FE00000000FA00000000"
let イメージ２ = "FE0202020202001C2A2A2A1800207C22220400A0C000122A2A2A24000000207C222204003E1020201000221A041820000000FE90909090600038448282443800FE909090906000000038448282824400FE10101010FE00061868886818060082FE8200FE40201008FE00FA00"
let イメージ３ = "040404040404FC0038447C043800083C080848300006040200780438403C000000083C0808483000344C04040400442828100C0000007C84847C0404040030488484844830007C84847C0404040000007088040404887000848484FC84848400102828447C8282003810101010103800848C94A4C48484001010101010001000"
文字リスト = [イメージ１, イメージ２, イメージ３]
let デモ文字 = "Let's try POP CHAIN!"
文字色リスト = [
neopixel.colors(NeoPixelColors.White),
neopixel.colors(NeoPixelColors.Red),
neopixel.colors(NeoPixelColors.Green),
neopixel.colors(NeoPixelColors.Blue)
]
背景色リスト = [
neopixel.colors(NeoPixelColors.Black),
neopixel.colors(NeoPixelColors.Black),
neopixel.colors(NeoPixelColors.Black),
neopixel.colors(NeoPixelColors.Black)
]
行末空白 = 8
文字選択 = 0
表示文字選択(文字選択)
表示位置 = 0
文字色番号 = 0
文字色 = 文字色リスト[文字色番号]
背景番号 = 0
背景色 = 背景色リスト[文字色番号]
let 最大輝度 = 10
let 輝度 = 最大輝度
strip = neopixel.create(DigitalPin.P0, 256, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P0, 256, NeoPixelMode.RGB)
strip.setBrightness(輝度)
strip2.setBrightness(輝度)
strip.showColor(背景色)
strip2.showColor(背景色)
文字表示()
basic.forever(function () {
    if (input.lightLevel() >= 最大輝度) {
        輝度 = 最大輝度
    } else {
        輝度 = input.lightLevel()
    }
    if (背景番号 == 0) {
        文字表示()
    } else {
        strip.rotate(-8)
        strip.show()
    }
    basic.pause(70)
})
control.inBackground(function () {
    while (true) {
        basic.showString(デモ文字)
    }
})
