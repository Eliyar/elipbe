import classNames from 'classnames'
import styled from 'styled-components'

import { Icon } from './Icon'
import { Logo } from './Logo'
import { UighurTextStyles } from './styles'

interface Props {
    className?: string
}

const Styles = styled.div`
    margin: 80px 32px 32px 32px;
    text-align: center;
    font-size: 18px;
    color: #555;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .content-center {
        position: absolute;
        top: -8px;
        left: calc(50% - 185px / 2);

        .logo-wrapper {
            margin: 0 16px;
        }
    }

    .text-right {
        text-align: right;
    }
`

export const Footer = ({ className }: Props) => {
    return (
        <Styles className={classNames(className)}>
            <MadeWithLoveStyles>
                <span>Made with&nbsp;</span>
                <Icon icon="favorite" />
                <span>&nbsp;by&nbsp;</span>
                <UighurTextStyles>ئېلىيار</UighurTextStyles>
            </MadeWithLoveStyles>
            <LogoTitleStyles className="content-center">
                <span>Elipbe</span>
                <Logo className="logo-wrapper" />
                <UighurTextStyles>ئيلىپبە</UighurTextStyles>
            </LogoTitleStyles>
            <div className="text-right">
                <BuyMeACoffeeStyles>Buy me a coffee</BuyMeACoffeeStyles>
                <ContactMeStyles>Contact me</ContactMeStyles>
            </div>
        </Styles>
    )
}

const LogoTitleStyles = styled.div`
    display: flex;
    align-items: center;
    font-size: 22px;
    font-weight: 500;

    img {
        width: 34px;
    }
`

const MadeWithLoveStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .material-symbols-outlined {
        margin: 0 4px;
        color: red;
    }
`

const BuyMeACoffeeStyles = styled.span`
    margin-left: 32px;
`

const ContactMeStyles = styled.span`
    margin-left: 32px;
`
