import classNames from 'classnames'
import styled from 'styled-components'

import { AlphabetsList } from './components/AlphabetsList'
import { UighurTextStyles } from './components/common/styles'

interface Props {
    className?: string
}

const Styles = styled.div``

export const App = ({ className }: Props) => {
    return (
        <Styles className={classNames(className)}>
            <Header />
            <AlphabetsList />
        </Styles>
    )
}

const HeaderStyles = styled.div`
    margin: 24px 0 50px 0;
    font-size: 60px;
    font-weight: 600;
    text-align: center;
    color: #666;
`

const Header = () => {
    return (
        <HeaderStyles>
            <span>Elipbe</span>
            <span>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</span>
            <UighurTextStyles>ئيلىپبە</UighurTextStyles>
        </HeaderStyles>
    )
}
