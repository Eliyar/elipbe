import classNames from 'classnames'
import styled, { css } from 'styled-components'

import { AlphabetItem } from '../../constants'
import { FlipCard } from './FlipCard'
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
    color: white;
    display: inline-block;

    .outer-content {
        height: 100%;
        background-color: ${(props) => props.$colour};
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
            color: white;
        }

        .secondary-letter {
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
            }

            img {
                width: 140px;
                top: -20px;
                left: -8px;
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
                backNode={<div className="outer-content">[back-of-card]</div>}
            />
        </Styles>
    )
}
