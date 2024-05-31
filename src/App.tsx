import classNames from 'classnames'
import styled from 'styled-components'

import { AlphabetsList } from './components/AlphabetsList'
import { Footer } from './components/common/Footer'
import { Header } from './components/common/Header'

interface Props {
    className?: string
}

const Styles = styled.div``

export const App = ({ className }: Props) => {
    return (
        <Styles className={classNames(className)}>
            <Header />
            <AlphabetsList />
            <Footer />
        </Styles>
    )
}
