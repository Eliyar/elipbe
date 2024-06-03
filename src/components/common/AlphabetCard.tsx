import classNames from 'classnames'
import { useCallback, useMemo } from 'react'
import styled, { css } from 'styled-components'

import { AlphabetItem } from '../../constants'
import { useAppContext } from '../../hooks/useAppContext'
import AudioPlayer from './AudioPlayer'
import { FlipCard } from './FlipCard'
import { IconButton } from './IconButton'
import { UighurTextStyles } from './styles'
import { WritingModalTrigger } from './WritingModalTrigger'

interface Props {
    className?: string
    alphabetItem: AlphabetItem
    colour: string
    isMd: boolean
    windowWidth: number
}

const Styles = styled.div<{ $colour: string; $isMd: boolean }>`
    margin: 16px;
    font-size: 32px;
    font-weight: bold;
    display: inline-block;

    .front-node {
        color: white;

        .outer-content {
            background-color: ${(props) => props.$colour};
        }
    }

    .back-node {
        color: #444;

        .outer-content {
            background-color: #d5d5d5;
        }
    }

    .outer-content {
        height: 100%;
        border-radius: 24px;
        position: relative;
    }

    .front-node {
        .inner-content {
            display: inline-block;
            position: absolute;
            top: 24px;
            right: 32px;

            .primary-letter {
                font-size: 120px;
                text-align: right;
                position: relative;
                top: -20px;
            }

            .secondary-letter {
                text-align: right;
            }

            .alt-letter {
                font-size: 60px;
                text-align: right;
            }
        }

        img {
            width: 280px;
            height: auto;
            object-fit: cover;
            position: absolute;
            top: -40px;
            left: -16px;
        }
    }

    .back-node {
        img {
            margin-left: 16px;
            width: auto;
            height: 60px;
            object-fit: cover;
        }

        .primary-letter {
            font-size: 120px;
            text-align: right;
            margin-bottom: 32px;
            position: relative;
            top: 24px;
            right: 32px;
        }

        .alts-list {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            background-color: #d5d5d5;
            border-radius: 24px;
            width: 100%;
        }

        .controls {
            position: absolute;
            top: 16px;
            left: 16px;
            display: flex;

            & > div {
                margin-right: 8px;
            }
        }
    }

    ${({ $isMd }) =>
        $isMd &&
        css`
            margin: 8px 6px !important;
            font-size: 18px;

            .inner-content {
                top: 16px !important;
                right: 20px !important;
            }

            .primary-letter {
                font-size: 50px !important;
            }

            .front-node {
                img {
                    width: 140px;
                    top: -20px;
                    left: -8px;
                }
            }

            .back-node {
                img {
                    height: 28px;
                }
            }
        `}
`

export const AlphabetCard = ({
    className,
    alphabetItem,
    colour,
    isMd,
    windowWidth,
}: Props) => {
    const { isAnimating: checkIsAnimating, onToggleAnimation } =
        useAppContext().selection

    const isAnimating = useMemo(
        () => checkIsAnimating(alphabetItem.alphabet),
        [alphabetItem.alphabet, checkIsAnimating]
    )

    const onFlip = useCallback(() => {
        onToggleAnimation(alphabetItem.alphabet)
    }, [alphabetItem.alphabet, onToggleAnimation])

    return (
        <Styles className={classNames(className)} $colour={colour} $isMd={isMd}>
            <FlipCard
                width={!isMd ? 375 : windowWidth / 2 - 16}
                height={!isMd ? 260 : 260 * 0.5}
                onFlip={onFlip}
                frontNode={
                    <div className="outer-content">
                        <img
                            src={alphabetItem.imgSrc}
                            alt={alphabetItem.imgNameTranslation}
                        />
                        <div className="inner-content">
                            <FrontPrimaryLetter
                                alphabet={alphabetItem.alphabet}
                                isMd={isMd}
                            />
                            <div className="secondary-letter">
                                <UighurTextStyles>
                                    {alphabetItem.imgName}
                                </UighurTextStyles>
                                <div>{alphabetItem.imgNameTranslation}</div>
                            </div>
                        </div>
                    </div>
                }
                backNode={(isFlipped: boolean) =>
                    isFlipped ? (
                        <div className="outer-content">
                            <BackPrimaryLetter
                                alphabet={alphabetItem.alphabet}
                                isMd={isMd}
                            />
                            <AltsList
                                className="alts-list"
                                alts={alphabetItem.alts}
                                isAnimating={isAnimating}
                                onToggleAnimation={() =>
                                    onToggleAnimation(alphabetItem.alphabet)
                                }
                            />
                            <div className="controls">
                                <WritingModalTrigger
                                    alphabetItem={alphabetItem}
                                    colour={colour}
                                >
                                    <IconButton icon="stylus_note" />
                                </WritingModalTrigger>
                                <AudioPlayer audioSrc={alphabetItem.audioSrc}>
                                    <IconButton icon="brand_awareness" />
                                </AudioPlayer>
                            </div>
                        </div>
                    ) : null
                }
            />
        </Styles>
    )
}

const FrontPrimaryLetter = ({
    alphabet,
    isMd,
}: {
    alphabet: string
    isMd: boolean
}) => {
    let top = primaryLetterFrontPosTopCorrection[alphabet] ?? 0
    if (isMd) {
        top = primaryLetterFrontPosTopCorrectionMd[alphabet] ?? 0
    }

    return (
        <div
            className="primary-letter"
            style={{
                top,
            }}
        >
            <UighurTextStyles>{alphabet}</UighurTextStyles>
        </div>
    )
}

const BackPrimaryLetter = ({
    alphabet,
    isMd,
}: {
    alphabet: string
    isMd: boolean
}) => {
    let top = primaryLetterBackPosTopCorrection[alphabet] ?? undefined
    if (isMd) {
        top = primaryLetterBackPosTopCorrectionMd[alphabet] ?? undefined
    }

    return (
        <div
            className="primary-letter"
            style={{
                top,
            }}
        >
            <UighurTextStyles>{alphabet}</UighurTextStyles>
        </div>
    )
}

const AltsList = ({
    className,
    alts,
    isAnimating,
    onToggleAnimation,
}: {
    className?: string
    alts: string[]
    isAnimating: boolean
    onToggleAnimation(): void
}) => {
    return (
        <div
            className={classNames(className)}
            onClick={(event) => {
                if (!isAnimating) {
                    event.stopPropagation()
                    onToggleAnimation()
                }
            }}
        >
            <div>
                {alts.map((imgSrc, idx) => {
                    if (!isAnimating) {
                        imgSrc = imgSrc.replace('gif', 'jpg')
                    }

                    return <img key={idx} src={imgSrc} alt="" />
                })}
            </div>
        </div>
    )
}

const primaryLetterFrontPosTopCorrection: Record<string, number> = {
    پ: -40,
    ج: -50,
    چ: -50,
    خ: -30,
    ر: -50,
    غ: -37,
    ف: -30,
    ك: 0,
    گ: 0,
    ڭ: 0,
    م: -50,
    ئې: -30,
    ئى: -30,
    ي: -50,
}

const primaryLetterBackPosTopCorrection: Record<string, number> = {
    ب: -10,
    پ: -10,
    ج: -20,
    چ: -20,
    خ: 0,
    ر: 0,
    س: 0,
    ش: 0,
    غ: 0,
    ف: 0,
    ق: 0,
    ل: 0,
    م: -10,
    ن: 0,
    ئو: 0,
    ئۇ: 0,
    ئۆ: 0,
    ئۈ: 0,
    ئې: -10,
    ئى: 0,
    ي: -10,
}

const primaryLetterFrontPosTopCorrectionMd: Record<string, number> = {
    ئا: 0,
    ئە: 0,
    ب: -10,
    پ: -17,
    ت: -5,
    ج: -20,
    چ: -20,
    خ: -13,
    د: -5,
    ر: -15,
    ز: -10,
    ژ: -10,
    س: -15,
    ش: -10,
    غ: -15,
    ف: -10,
    ق: -10,
    ك: -5,
    گ: 0,
    ڭ: 0,
    ل: -5,
    م: -15,
    ن: -10,
    ھ: -5,
    ئو: -5,
    ئۇ: -5,
    ئۆ: -5,
    ئۈ: -5,
    ۋ: -10,
    ئې: -10,
    ئى: -5,
    ي: -20,
}

const primaryLetterBackPosTopCorrectionMd: Record<string, number> = {
    ئا: 15,
    ئە: 15,
    ب: 0,
    پ: 0,
    ت: 10,
    ج: 0,
    چ: 0,
    خ: 10,
    د: 10,
    ر: 0,
    ز: 0,
    ژ: 10,
    س: 0,
    ش: 10,
    غ: 0,
    ف: 0,
    ق: 10,
    ك: 10,
    گ: 15,
    ڭ: 15,
    ل: 10,
    م: 0,
    ن: 0,
    ھ: 0,
    ئو: 10,
    ئۇ: 10,
    ئۆ: 10,
    ئۈ: 10,
    ۋ: 15,
    ئې: 10,
    ئى: 10,
    ي: 0,
}
