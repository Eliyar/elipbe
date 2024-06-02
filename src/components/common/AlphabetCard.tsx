import classNames from 'classnames'
import { useCallback, useMemo } from 'react'
import styled, { css } from 'styled-components'

import { AlphabetItem } from '../../constants'
import { useAppContext } from '../../hooks/useAppContext'
import AudioPlayer from './AudioPlayer'
import { FlipCard } from './FlipCard'
import { Icon } from './Icon'
import { IconButton } from './IconButton'
import { UighurTextStyles } from './styles'

interface Props {
    className?: string
    alphabetItem: AlphabetItem
    colour: string
    isMd: boolean
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
        border-radius: 32px;
        position: relative;
    }

    .inner-content {
        display: inline-block;
        position: absolute;
        top: 24px;
        right: 32px;

        .primary-letter {
            font-size: 120px;
            text-align: right;
        }

        .secondary-letter {
            text-align: right;
        }

        .alt-letter {
            font-size: 60px;
            text-align: right;
        }
    }

    .front-node {
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
            border-radius: 32px;
            width: 100%;
        }

        .controls {
            position: absolute;
            top: 16px;
            left: 0px;
        }
    }

    ${({ $isMd }) =>
        $isMd &&
        css`
            margin: 16px 8px;
            font-size: 18px;

            .inner-content {
                top: 10px;
                right: 20px;

                .primary-letter {
                    font-size: 50px !important;
                }

                .alt-letter {
                    font-size: 32px !important;
                }
            }

            .front-node img {
                img {
                    width: 140px;
                    top: -20px;
                    left: -8px;
                }
            }
        `}
`

export const AlphabetCard = ({
    className,
    alphabetItem,
    colour,
    isMd,
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
                width={!isMd ? 375 : 375 * 0.51}
                height={!isMd ? 260 : 260 * 0.51}
                onFlip={onFlip}
                frontNode={
                    <div className="outer-content">
                        <img
                            src={alphabetItem.imgSrc}
                            alt={alphabetItem.imgNameTranslation}
                        />
                        <div className="inner-content">
                            <div
                                className="primary-letter"
                                style={{
                                    top:
                                        primaryLetterPosTopCorrection[
                                            alphabetItem.alphabet
                                        ] ?? undefined,
                                }}
                            >
                                <UighurTextStyles>
                                    {alphabetItem.alphabet}
                                </UighurTextStyles>
                            </div>
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
                            <div
                                className="primary-letter"
                                style={{
                                    top:
                                        primaryLetterPosTopCorrection[
                                            alphabetItem.alphabet
                                        ] ?? undefined,
                                }}
                            >
                                <UighurTextStyles>
                                    {alphabetItem.alphabet}
                                </UighurTextStyles>
                            </div>
                            <AltsList
                                className="alts-list"
                                alts={alphabetItem.alts}
                                isAnimating={isAnimating}
                                onToggleAnimation={() =>
                                    onToggleAnimation(alphabetItem.alphabet)
                                }
                            />
                            <div className="controls">
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

const AltsList = ({
    className,
    alts,
    isAnimating,
    onToggleAnimation,
}: {
    className?: string
    alts: string[]
    isAnimating: boolean
    onToggleAnimation: () => void
}) => {
    return (
        <div className={classNames(className)}>
            {!isAnimating && <Icon icon="replay" onClick={onToggleAnimation} />}

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

const primaryLetterPosTopCorrection: Record<string, number> = {
    ج: -20,
    چ: -20,
    خ: 0,
    س: 0,
    ش: 0,
    غ: 0,
    ف: 0,
    ق: 0,
    ل: 0,
    م: 0,
    ن: 0,
    ئو: 0,
    ئۇ: 0,
    ئۆ: 0,
    ئۈ: 0,
    ئې: -10,
    ئى: 0,
    ي: -10,
}
