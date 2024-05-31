import classNames from 'classnames'
import styled from 'styled-components'

import { AlphabetsList } from './components/AlphabetsList'
import { LogoTitle } from './components/common/LogoTitle'
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
    margin: 24px 24px 50px 24px;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    color: #555;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Header = () => {
    return (
        <HeaderStyles>
            <LogoTitle title="Elipbe" />
            <LogoTitle
                title={<UighurTextStyles>ئيلىپبە</UighurTextStyles>}
                rtl
            />
        </HeaderStyles>
    )
}
