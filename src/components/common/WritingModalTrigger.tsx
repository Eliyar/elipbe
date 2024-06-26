import classNames from 'classnames'
import { ReactNode } from 'react'
import styled from 'styled-components'

import { AlphabetItem } from '../../constants'
import { OpenWritingModal } from '../../services/event-bus/events'

interface Props {
    className?: string
    alphabetItem: AlphabetItem
    colour: string
    children: ReactNode
}

const Styles = styled.div`
    &:hover {
        cursor: pointer;
    }
`

export const WritingModalTrigger = ({
    className,
    alphabetItem,
    colour,
    children,
}: Props) => {
    return (
        <Styles
            className={classNames(className)}
            onClick={(event) => {
                event.stopPropagation()
                OpenWritingModal.emit({
                    alphabetItem,
                    colour,
                })
            }}
        >
            {children}
        </Styles>
    )
}
