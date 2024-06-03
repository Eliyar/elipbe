const assetsUrl = `${process.env.PUBLIC_URL}/assets`

export type AlphabetItem = {
    alphabet: string
    imgSrc: string
    imgName: string
    imgNameTranslation: string
    audioSrc: string
    alts: string[]
}

export const ALPHABET_ITEMS: AlphabetItem[] = [
    {
        alphabet: 'ئا',
        imgSrc: `${assetsUrl}/images/illustration-horse.png`,
        imgName: 'ئات',
        imgNameTranslation: 'Horse',
        audioSrc: `${assetsUrl}/audio/1.wav`,
        alts: [
            `${assetsUrl}/images/alts/1_1.gif`,
            `${assetsUrl}/images/alts/1_2.gif`,
            `${assetsUrl}/images/alts/1_3.gif`,
            `${assetsUrl}/images/alts/1_4.gif`,
        ],
    },
    {
        alphabet: 'ئە',
        imgSrc: `${assetsUrl}/images/illustration-mirror.png`,
        imgName: 'ئەينەك',
        imgNameTranslation: 'Mirror',
        audioSrc: `${assetsUrl}/audio/2.wav`,
        alts: [
            `${assetsUrl}/images/alts/2_1.gif`,
            `${assetsUrl}/images/alts/2_2.gif`,
            `${assetsUrl}/images/alts/2_3.gif`,
            `${assetsUrl}/images/alts/2_4.gif`,
        ],
    },
    {
        alphabet: 'ب',
        imgSrc: `${assetsUrl}/images/illustration-fish.png`,
        imgName: 'بىلىق',
        imgNameTranslation: 'Fish',
        audioSrc: `${assetsUrl}/audio/3.wav`,
        alts: [
            `${assetsUrl}/images/alts/3_1.gif`,
            `${assetsUrl}/images/alts/3_2.gif`,
            `${assetsUrl}/images/alts/3_3.gif`,
            `${assetsUrl}/images/alts/3_4.gif`,
        ],
    },
    {
        alphabet: 'پ',
        imgSrc: `${assetsUrl}/images/illustration-boat.png`,
        imgName: 'پاراخوت',
        imgNameTranslation: 'Boat',
        audioSrc: `${assetsUrl}/audio/4.wav`,
        alts: [
            `${assetsUrl}/images/alts/4_1.gif`,
            `${assetsUrl}/images/alts/4_2.gif`,
            `${assetsUrl}/images/alts/4_3.gif`,
            `${assetsUrl}/images/alts/4_4.gif`,
        ],
    },
    {
        alphabet: 'ت',
        imgSrc: `${assetsUrl}/images/illustration-watermelon.png`,
        imgName: 'تاۋۇز',
        imgNameTranslation: 'Watermelon',
        audioSrc: `${assetsUrl}/audio/5.wav`,
        alts: [
            `${assetsUrl}/images/alts/5_1.gif`,
            `${assetsUrl}/images/alts/5_2.gif`,
            `${assetsUrl}/images/alts/5_3.gif`,
            `${assetsUrl}/images/alts/5_4.gif`,
        ],
    },
    {
        alphabet: 'ج',
        imgSrc: `${assetsUrl}/images/illustration-furcoat2.png`,
        imgName: 'جۇۋا',
        imgNameTranslation: 'Fur Coat',
        audioSrc: `${assetsUrl}/audio/6.wav`,
        alts: [
            `${assetsUrl}/images/alts/6_1.gif`,
            `${assetsUrl}/images/alts/6_2.gif`,
            `${assetsUrl}/images/alts/6_3.gif`,
            `${assetsUrl}/images/alts/6_4.gif`,
        ],
    },
    {
        alphabet: 'چ',
        imgSrc: `${assetsUrl}/images/illustration-kettle.png`,
        imgName: 'چۆگۈن',
        imgNameTranslation: 'Kettle',
        audioSrc: `${assetsUrl}/audio/7.wav`,
        alts: [
            `${assetsUrl}/images/alts/7_1.gif`,
            `${assetsUrl}/images/alts/7_2.gif`,
            `${assetsUrl}/images/alts/7_3.gif`,
            `${assetsUrl}/images/alts/7_4.gif`,
        ],
    },
    {
        alphabet: 'خ',
        imgSrc: `${assetsUrl}/images/illustration-rooster.png`,
        imgName: 'خوراز',
        imgNameTranslation: 'Rooster',
        audioSrc: `${assetsUrl}/audio/8.wav`,
        alts: [
            `${assetsUrl}/images/alts/8_1.gif`,
            `${assetsUrl}/images/alts/8_2.gif`,
            `${assetsUrl}/images/alts/8_3.gif`,
            `${assetsUrl}/images/alts/8_4.gif`,
        ],
    },
    {
        alphabet: 'د',
        imgSrc: `${assetsUrl}/images/illustration-doctor.png`,
        imgName: 'دوكتور',
        imgNameTranslation: 'Doctor',
        audioSrc: `${assetsUrl}/audio/9.wav`,
        alts: [
            `${assetsUrl}/images/alts/9_1.gif`,
            `${assetsUrl}/images/alts/9_2.gif`,
        ],
    },
    {
        alphabet: 'ر',
        imgSrc: `${assetsUrl}/images/illustration-rocket.png`,
        imgName: 'راكېتا',
        imgNameTranslation: 'Rocket',
        audioSrc: `${assetsUrl}/audio/10.wav`,
        alts: [
            `${assetsUrl}/images/alts/10_1.gif`,
            `${assetsUrl}/images/alts/10_2.gif`,
        ],
    },
    {
        alphabet: 'ز',
        imgSrc: `${assetsUrl}/images/illustration-giraffe.png`,
        imgName: 'زىراپە',
        imgNameTranslation: 'Giraffe',
        audioSrc: `${assetsUrl}/audio/11.wav`,
        alts: [
            `${assetsUrl}/images/alts/11_1.gif`,
            `${assetsUrl}/images/alts/11_2.gif`,
        ],
    },
    {
        alphabet: 'ژ',
        imgSrc: `${assetsUrl}/images/illustration-journal.png`,
        imgName: 'ژۇرنال',
        imgNameTranslation: 'Journal',
        audioSrc: `${assetsUrl}/audio/12.wav`,
        alts: [
            `${assetsUrl}/images/alts/12_1.gif`,
            `${assetsUrl}/images/alts/12_2.gif`,
        ],
    },
    {
        alphabet: 'س',
        imgSrc: `${assetsUrl}/images/illustration-clock.png`,
        imgName: 'سائەت',
        imgNameTranslation: 'Clock',
        audioSrc: `${assetsUrl}/audio/13.wav`,
        alts: [
            `${assetsUrl}/images/alts/13_1.gif`,
            `${assetsUrl}/images/alts/13_2.gif`,
            `${assetsUrl}/images/alts/13_3.gif`,
            `${assetsUrl}/images/alts/13_4.gif`,
        ],
    },
    {
        alphabet: 'ش',
        imgSrc: `${assetsUrl}/images/illustration-lion2.png`,
        imgName: 'شىر',
        imgNameTranslation: 'Lion',
        audioSrc: `${assetsUrl}/audio/14.wav`,
        alts: [
            `${assetsUrl}/images/alts/14_1.gif`,
            `${assetsUrl}/images/alts/14_2.gif`,
            `${assetsUrl}/images/alts/14_3.gif`,
            `${assetsUrl}/images/alts/14_4.gif`,
        ],
    },
    {
        alphabet: 'غ',
        imgSrc: `${assetsUrl}/images/illustration-goose.png`,
        imgName: 'غاز',
        imgNameTranslation: 'Goose',
        audioSrc: `${assetsUrl}/audio/15.wav`,
        alts: [
            `${assetsUrl}/images/alts/15_1.gif`,
            `${assetsUrl}/images/alts/15_2.gif`,
            `${assetsUrl}/images/alts/15_3.gif`,
            `${assetsUrl}/images/alts/15_4.gif`,
        ],
    },
    {
        alphabet: 'ف',
        imgSrc: `${assetsUrl}/images/illustration-fountain.png`,
        imgName: 'فونتان',
        imgNameTranslation: 'Fountain',
        audioSrc: `${assetsUrl}/audio/16.wav`,
        alts: [
            `${assetsUrl}/images/alts/16_1.gif`,
            `${assetsUrl}/images/alts/16_2.gif`,
            `${assetsUrl}/images/alts/16_3.gif`,
            `${assetsUrl}/images/alts/16_4.gif`,
        ],
    },
    {
        alphabet: 'ق',
        imgSrc: `${assetsUrl}/images/illustration-sheep.png`,
        imgName: 'قوي',
        imgNameTranslation: 'Sheep',
        audioSrc: `${assetsUrl}/audio/17.wav`,
        alts: [
            `${assetsUrl}/images/alts/17_1.gif`,
            `${assetsUrl}/images/alts/17_2.gif`,
            `${assetsUrl}/images/alts/17_3.gif`,
            `${assetsUrl}/images/alts/17_4.gif`,
        ],
    },
    {
        alphabet: 'ك',
        imgSrc: `${assetsUrl}/images/illustration-cow.png`,
        imgName: 'كالا',
        imgNameTranslation: 'Cow',
        audioSrc: `${assetsUrl}/audio/18.wav`,
        alts: [
            `${assetsUrl}/images/alts/18_1.gif`,
            `${assetsUrl}/images/alts/18_2.gif`,
            `${assetsUrl}/images/alts/18_3.gif`,
            `${assetsUrl}/images/alts/18_4.gif`,
        ],
    },
    {
        alphabet: 'گ',
        imgSrc: `${assetsUrl}/images/illustration-flowers.png`,
        imgName: 'گۈل',
        imgNameTranslation: 'Flowers',
        audioSrc: `${assetsUrl}/audio/19.wav`,
        alts: [
            `${assetsUrl}/images/alts/19_1.gif`,
            `${assetsUrl}/images/alts/19_2.gif`,
            `${assetsUrl}/images/alts/19_3.gif`,
            `${assetsUrl}/images/alts/19_4.gif`,
        ],
    },
    {
        alphabet: 'ڭ',
        imgSrc: `${assetsUrl}/images/illustration-tshirt.png`,
        imgName: 'كۆڭلەك',
        imgNameTranslation: 'Shirt',
        audioSrc: `${assetsUrl}/audio/20.wav`,
        alts: [
            `${assetsUrl}/images/alts/20_1.gif`,
            `${assetsUrl}/images/alts/20_2.gif`,
            `${assetsUrl}/images/alts/20_3.gif`,
            `${assetsUrl}/images/alts/20_4.gif`,
        ],
    },
    {
        alphabet: 'ل',
        imgSrc: `${assetsUrl}/images/illustration-kite.png`,
        imgName: 'لەگلەك',
        imgNameTranslation: 'Kite',
        audioSrc: `${assetsUrl}/audio/21.wav`,
        alts: [
            `${assetsUrl}/images/alts/21_1.gif`,
            `${assetsUrl}/images/alts/21_2.gif`,
            `${assetsUrl}/images/alts/21_3.gif`,
            `${assetsUrl}/images/alts/21_4.gif`,
        ],
    },
    {
        alphabet: 'م',
        imgSrc: `${assetsUrl}/images/illustration-monkey.png`,
        imgName: 'مايمۇن',
        imgNameTranslation: 'Monkey',
        audioSrc: `${assetsUrl}/audio/22.wav`,
        alts: [
            `${assetsUrl}/images/alts/22_1.gif`,
            `${assetsUrl}/images/alts/22_2.gif`,
            `${assetsUrl}/images/alts/22_3.gif`,
            `${assetsUrl}/images/alts/22_4.gif`,
        ],
    },
    {
        alphabet: 'ن',
        imgSrc: `${assetsUrl}/images/illustration-naan.png`,
        imgName: 'نان',
        imgNameTranslation: 'Naan',
        audioSrc: `${assetsUrl}/audio/23.wav`,
        alts: [
            `${assetsUrl}/images/alts/23_1.gif`,
            `${assetsUrl}/images/alts/23_2.gif`,
            `${assetsUrl}/images/alts/23_3.gif`,
            `${assetsUrl}/images/alts/23_4.gif`,
        ],
    },
    {
        alphabet: 'ھ',
        imgSrc: `${assetsUrl}/images/illustration-bee.png`,
        imgName: 'ھەرە',
        imgNameTranslation: 'Bee',
        audioSrc: `${assetsUrl}/audio/24.wav`,
        alts: [
            `${assetsUrl}/images/alts/24_1.gif`,
            `${assetsUrl}/images/alts/24_2.gif`,
            `${assetsUrl}/images/alts/24_3.gif`,
            `${assetsUrl}/images/alts/24_4.gif`,
        ],
    },
    {
        alphabet: 'ئو',
        imgSrc: `${assetsUrl}/images/illustration-fire.png`,
        imgName: 'ئوت',
        imgNameTranslation: 'Fire',
        audioSrc: `${assetsUrl}/audio/25.wav`,
        alts: [
            `${assetsUrl}/images/alts/25_1.gif`,
            `${assetsUrl}/images/alts/25_2.gif`,
            `${assetsUrl}/images/alts/25_3.gif`,
            `${assetsUrl}/images/alts/25_4.gif`,
        ],
    },
    {
        alphabet: 'ئۇ',
        imgSrc: `${assetsUrl}/images/illustration-flour.png`,
        imgName: 'ئۇن',
        imgNameTranslation: 'Flour',
        audioSrc: `${assetsUrl}/audio/26.wav`,
        alts: [
            `${assetsUrl}/images/alts/26_1.gif`,
            `${assetsUrl}/images/alts/26_2.gif`,
            `${assetsUrl}/images/alts/26_3.gif`,
            `${assetsUrl}/images/alts/26_4.gif`,
        ],
    },
    {
        alphabet: 'ئۆ',
        imgSrc: `${assetsUrl}/images/illustration-home.png`,
        imgName: 'ئۆي',
        imgNameTranslation: 'House',
        audioSrc: `${assetsUrl}/audio/27.wav`,
        alts: [
            `${assetsUrl}/images/alts/27_1.gif`,
            `${assetsUrl}/images/alts/27_2.gif`,
            `${assetsUrl}/images/alts/27_3.gif`,
            `${assetsUrl}/images/alts/27_4.gif`,
        ],
    },
    {
        alphabet: 'ئۈ',
        imgSrc: `${assetsUrl}/images/illustration-grapes2.png`,
        imgName: 'ئۈزۈم',
        imgNameTranslation: 'Grapes',
        audioSrc: `${assetsUrl}/audio/28.wav`,
        alts: [
            `${assetsUrl}/images/alts/28_1.gif`,
            `${assetsUrl}/images/alts/28_2.gif`,
            `${assetsUrl}/images/alts/28_3.gif`,
            `${assetsUrl}/images/alts/28_4.gif`,
        ],
    },
    {
        alphabet: 'ۋ',
        imgSrc: `${assetsUrl}/images/illustration-bicycle.png`,
        imgName: 'ۋېلىسىپىت',
        imgNameTranslation: 'Bicycle',
        audioSrc: `${assetsUrl}/audio/29.wav`,
        alts: [
            `${assetsUrl}/images/alts/29_1.gif`,
            `${assetsUrl}/images/alts/29_2.gif`,
            `${assetsUrl}/images/alts/29_3.gif`,
            `${assetsUrl}/images/alts/29_4.gif`,
        ],
    },
    {
        alphabet: 'ئې',
        imgSrc: `${assetsUrl}/images/illustration-bear.png`,
        imgName: 'ئېيىق',
        imgNameTranslation: 'Bear',
        audioSrc: `${assetsUrl}/audio/30.wav`,
        alts: [
            `${assetsUrl}/images/alts/30_1.gif`,
            `${assetsUrl}/images/alts/30_2.gif`,
            `${assetsUrl}/images/alts/30_3.gif`,
            `${assetsUrl}/images/alts/30_4.gif`,
            `${assetsUrl}/images/alts/30_5.gif`,
            `${assetsUrl}/images/alts/30_6.gif`,
            `${assetsUrl}/images/alts/30_7.gif`,
            `${assetsUrl}/images/alts/30_8.gif`,
        ],
    },
    {
        alphabet: 'ئى',
        imgSrc: `${assetsUrl}/images/illustration-dog.png`,
        imgName: 'ئىت',
        imgNameTranslation: 'Dog',
        audioSrc: `${assetsUrl}/audio/31.wav`,
        alts: [
            `${assetsUrl}/images/alts/31_1.gif`,
            `${assetsUrl}/images/alts/31_2.gif`,
            `${assetsUrl}/images/alts/31_3.gif`,
            `${assetsUrl}/images/alts/31_4.gif`,
            `${assetsUrl}/images/alts/31_5.gif`,
            `${assetsUrl}/images/alts/31_6.gif`,
            `${assetsUrl}/images/alts/31_7.gif`,
            `${assetsUrl}/images/alts/31_8.gif`,
        ],
    },
    {
        alphabet: 'ي',
        imgSrc: `${assetsUrl}/images/illustration-tiger.png`,
        imgName: 'يولۋاس',
        imgNameTranslation: 'Tiger',
        audioSrc: `${assetsUrl}/audio/32.wav`,
        alts: [
            `${assetsUrl}/images/alts/32_1.gif`,
            `${assetsUrl}/images/alts/32_2.gif`,
            `${assetsUrl}/images/alts/32_3.gif`,
            `${assetsUrl}/images/alts/32_4.gif`,
        ],
    },
]

export const COLOURS = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#cddc39',
    '#ffeb3b',
    '#ffc107',
    '#ff9800',
    '#ff5722',
    '#795548',
    '#9e9e9e',
    '#607d8b',
]

export const MAX_GIF_ANIMATIONS = 3
