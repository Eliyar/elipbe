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
        imgSrc: `${process.env.PUBLIC_URL}/assets/images/illustration-horse.png`,
        imgName: 'ئات',
        imgNameTranslation: 'Horse',
        audioSrc: `${process.env.PUBLIC_URL}/assets/audio/1.wav`,
        alts: [
            `${process.env.PUBLIC_URL}/assets/images/alts/1_1.gif`,
            `${process.env.PUBLIC_URL}/assets/images/alts/1_2.gif`,
            `${process.env.PUBLIC_URL}/assets/images/alts/1_3.gif`,
            `${process.env.PUBLIC_URL}/assets/images/alts/1_4.gif`,
        ],
    },
    {
        alphabet: 'ئە',
        imgSrc: `${process.env.PUBLIC_URL}/assets/images/illustration-mirror.png`,
        imgName: 'ئەينەك',
        imgNameTranslation: 'Mirror',
        audioSrc: `${process.env.PUBLIC_URL}/assets/audio/2.wav`,
        alts: [
            `${process.env.PUBLIC_URL}/assets/images/alts/2_1.gif`,
            `${process.env.PUBLIC_URL}/assets/images/alts/2_2.gif`,
            `${process.env.PUBLIC_URL}/assets/images/alts/2_3.gif`,
            `${process.env.PUBLIC_URL}/assets/images/alts/2_4.gif`,
        ],
    },
    {
        alphabet: 'ب',
        imgSrc: `${process.env.PUBLIC_URL}/assets/images/illustration-hammer.png`,
        imgName: 'ب',
        imgNameTranslation: 'Fish',
        audioSrc: `${process.env.PUBLIC_URL}/assets/audio/3.wav`,
        alts: [
            `${process.env.PUBLIC_URL}/assets/images/alts/3_1.gif`,
            `${process.env.PUBLIC_URL}/assets/images/alts/3_2.gif`,
            `${process.env.PUBLIC_URL}/assets/images/alts/3_3.gif`,
            `${process.env.PUBLIC_URL}/assets/images/alts/3_4.gif`,
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
