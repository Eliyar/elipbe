import classNames from 'classnames'
import React from 'react'
import styled from 'styled-components'

import { AlphabetList } from './components/AlphabetList'
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
            <AlphabetList />
            <Footer />
        </Styles>
    )
}
