import classNames from 'classnames'
import styled from 'styled-components'

import { ALPHABET_ITEMS, COLOURS } from '../constants'
import { AlphabetCard } from './common/AlphabetCard'

interface Props {
    className?: string
}

const Styles = styled.div``

export const AlphabetsList = ({ className }: Props) => {
    return (
        <Styles className={classNames(className)}>
            {ALPHABET_ITEMS.map((alphabetItem, index) => (
                <AlphabetCard
                    key={index}
                    alphabetItem={alphabetItem}
                    colour={COLOURS[index]}
                />
            ))}
        </Styles>
    )
}
