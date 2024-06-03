import classNames from 'classnames'
import Popup from 'reactjs-popup'
import styled, { css } from 'styled-components'

import { AlphabetItem } from '../../constants'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import AudioPlayer from './AudioPlayer'
import { IconButton } from './IconButton'
import { UighurTextStyles } from './styles'

export interface ModalProps {
    open: boolean
    onClose(): void
}

export interface WritingModalProps {
    className?: string
    alphabetItem: AlphabetItem
    colour: string
}

const Styles = styled.div<{ $colour: string; $isMd: boolean }>`
    font-size: 32px;
    font-weight: bold;
    position: relative;

    .header {
        color: white;
        height: 260px;

        .outer-content {
            background-color: ${(props) => props.$colour};
        }

        .controls-left {
            position: absolute;
            top: 24px;
            left: 24px;
            z-index: 3;

            .icon {
                color: white;
            }
        }

        .controls-right {
            position: absolute;
            top: 24px;
            right: 24px;
            z-index: 3;

            .icon {
                color: white;
            }
        }
    }

    .outer-content {
        height: 100%;
        border-top-right-radius: 24px;
        border-top-left-radius: 24px;
        position: relative;
    }

    .header {
        .inner-content {
            display: inline-block;
            position: absolute;
            top: 24px;
            right: calc(50% - 100px - 40px);

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
            left: calc(50% - 280px + 40px);
        }
    }

    .alts-list {
        padding: 16px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        background-color: #d5d5d5;
        width: 100%;

        img {
            margin-left: 32px;
            width: auto;
            height: 90px;
            object-fit: cover;
        }
    }

    ${({ $isMd }) =>
        $isMd &&
        css`
            font-size: 18px;

            .inner-content {
                top: 16px !important;
                right: calc(50% - 80px) !important;
            }

            .primary-letter {
                font-size: 50px !important;
            }

            .header {
                height: calc(260px * 0.52);

                img {
                    width: 150px;
                    top: -20px;
                    left: calc(50% - 120px);
                }

                .controls-right {
                    top: 12px;
                    right: 12px;
                }

                .controls-left {
                    top: 12px;
                    left: 12px;
                }
            }

            .alts-list {
                img {
                    height: 50px;
                }
            }
        `}
`

export const WritingModal = ({
    className,
    alphabetItem,
    colour,
    open,
    onClose,
}: WritingModalProps & ModalProps) => {
    const { isMd } = useMediaQuery()

    return (
        <Popup
            className={classNames(className)}
            open={open}
            closeOnDocumentClick
            modal
            onClose={onClose}
        >
            <Styles $colour={colour} $isMd={isMd}>
                <div className="modal">
                    <div className="header">
                        <div className="controls-left">
                            <AudioPlayer audioSrc={alphabetItem.audioSrc}>
                                <IconButton icon="brand_awareness" />
                            </AudioPlayer>
                        </div>

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
                        <div className="controls-right">
                            <IconButton icon="close" onClick={onClose} />
                        </div>
                    </div>

                    <AltsList className="alts-list" alts={alphabetItem.alts} />
                </div>
            </Styles>
        </Popup>
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

const AltsList = ({
    className,
    alts,
}: {
    className?: string
    alts: string[]
}) => {
    return (
        <div className={classNames(className)}>
            <div>
                {alts.map((imgSrc, idx) => {
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
