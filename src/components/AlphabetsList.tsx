import classNames from 'classnames'
import styled from 'styled-components'

import { ALPHABET_ITEMS, COLOURS } from '../constants'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { AlphabetCard } from './common/AlphabetCard'

interface Props {
    className?: string
}

const Styles = styled.div`
    text-align: center;
    direction: rtl;
`

export const AlphabetsList = ({ className }: Props) => {
    const { isMd } = useMediaQuery()

    return (
        <Styles className={classNames(className)}>
            {ALPHABET_ITEMS.map((alphabetItem, idx) => {
                const colourIdx = idx % COLOURS.length
                const colour = COLOURS[colourIdx]

                return (
                    <AlphabetCard
                        key={idx}
                        alphabetItem={alphabetItem}
                        colour={colour}
                        isMd={isMd}
                    />
                )
            })}
        </Styles>
    )
}
