import classNames from 'classnames'
import styled, { css } from 'styled-components'

import { AlphabetItem } from '../../constants'
import AudioPlayer from './AudioPlayer'
import { FlipCard } from './FlipCard'
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
            /* background-color: ${(props) => props.$colour}2c; */
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
    return (
        <Styles className={classNames(className)} $colour={colour} $isMd={isMd}>
            <FlipCard
                width={!isMd ? 375 : 375 * 0.51}
                height={!isMd ? 260 : 260 * 0.51}
                frontNode={
                    <div className="outer-content">
                        <img
                            src={alphabetItem.imgSrc}
                            alt={alphabetItem.imgNameTranslation}
                        />
                        <div className="inner-content">
                            <div className="primary-letter">
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
                backNode={
                    <div className="outer-content">
                        <div className="inner-content">
                            <div className="primary-letter">
                                <UighurTextStyles>
                                    {alphabetItem.alphabet}
                                </UighurTextStyles>
                            </div>
                            <div>
                                {alphabetItem.alts.reverse().map((alt, idx) => (
                                    <img
                                        key={idx}
                                        src={alt}
                                        alt={alphabetItem.imgNameTranslation}
                                    />
                                ))}
                            </div>
                            <div className="controls">
                                <AudioPlayer audioSrc={alphabetItem.audioSrc}>
                                    <IconButton icon="brand_awareness" />
                                </AudioPlayer>
                            </div>
                        </div>
                    </div>
                }
            />
        </Styles>
    )
}
