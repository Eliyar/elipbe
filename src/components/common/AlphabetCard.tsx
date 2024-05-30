import classNames from 'classnames'
import styled from 'styled-components'

import { AlphabetItem } from '../../constants'
import { FlipCard } from './FlipCard'
import { UighurTextStyles } from './styles'

interface Props {
    className?: string
    alphabetItem: AlphabetItem
    colour: string
}

const Styles = styled.div`
    margin: 16px;
    font-size: 32px;
    color: white;
    display: inline-block;
`

export const AlphabetCard = ({ className, alphabetItem, colour }: Props) => {
    return (
        <Styles className={classNames(className)}>
            <FlipCard
                width={375}
                height={240}
                frontNode={
                    <InnerCardStyles $colour={colour}>
                        <img src={alphabetItem.imgSrc} />
                        <PrimaryLetterStyles>
                            <UighurTextStyles>
                                {alphabetItem.alphabet}
                            </UighurTextStyles>
                        </PrimaryLetterStyles>
                        <UighurTextStyles>
                            {alphabetItem.imgName}
                        </UighurTextStyles>
                        <div>{alphabetItem.imgNameTranslation}</div>
                    </InnerCardStyles>
                }
                backNode={
                    <InnerCardStyles $colour={`${colour}2C`}>
                        [back-of-card]
                    </InnerCardStyles>
                }
            />
        </Styles>
    )
}

const InnerCardStyles = styled.div<{ $colour: string }>`
    height: 100%;
    background-color: ${(props) => props.$colour};
    border-radius: 32px;
    position: relative;
`

const PrimaryLetterStyles = styled.div`
    font-size: 120px;
    color: white;
    display: inline-block;
    position: absolute;
    top: 16px;
    right: 24px;
`
