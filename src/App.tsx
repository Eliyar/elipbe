import classNames from 'classnames'
import styled from 'styled-components'

import { AlphabetsList } from './components/AlphabetsList'

interface Props {
    className?: string
}

const Styles = styled.div``

export const App = ({ className }: Props) => {
    return (
        <Styles className={classNames(className)}>
            <AlphabetsList />
        </Styles>
    )
}
