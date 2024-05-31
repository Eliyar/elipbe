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
    font-weight: bold;
    color: white;
    display: inline-block;
`

export const AlphabetCard = ({ className, alphabetItem, colour }: Props) => {
    return (
        <Styles className={classNames(className)}>
            <FlipCard
                width={375}
                height={260}
                frontNode={
                    <InnerCardStyles $colour={colour}>
                        <IllustrationStyles src={alphabetItem.imgSrc} />
                        <ContentStyles>
                            <PrimaryLetterStyles>
                                <UighurTextStyles>
                                    {alphabetItem.alphabet}
                                </UighurTextStyles>
                            </PrimaryLetterStyles>
                            <SecondaryLetterStyles>
                                <UighurTextStyles>
                                    {alphabetItem.imgName}
                                </UighurTextStyles>
                                <div>{alphabetItem.imgNameTranslation}</div>
                            </SecondaryLetterStyles>
                        </ContentStyles>
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
`

const SecondaryLetterStyles = styled.div`
    text-align: right;
`

const IllustrationStyles = styled.img`
    width: 300px;
    height: auto;
    object-fit: cover;
    border-radius: 32px;
    position: absolute;
    top: -40px;
    left: -32px;
`

const ContentStyles = styled.div`
    display: inline-block;
    position: absolute;
    top: 24px;
    right: 32px;
`
