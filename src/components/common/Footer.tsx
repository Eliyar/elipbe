import classNames from 'classnames'
import styled, { css } from 'styled-components'

import { useMediaQuery } from '../../hooks/useMediaQuery'
import { Icon } from './Icon'
import { Logo } from './Logo'
import { UighurTextStyles } from './styles'

interface Props {
    className?: string
}

const Styles = styled.div<{ $isMd: boolean }>`
    margin: 80px 32px 32px 32px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    word-spacing: -1px;
    color: #555;

    ${({ $isMd }) =>
        $isMd
            ? css`
                  text-align: center;

                  & > div {
                      margin-top: 50px;
                  }

                  .links-wrapper {
                      & > div {
                          margin-top: 16px;
                      }
                  }
              `
            : css`
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  position: relative;

                  .links-wrapper {
                      display: flex;

                      & > div {
                          margin-right: 24px;

                          &:last-child {
                              margin-right: 0;
                          }
                      }
                  }
              `}

    .content-center {
        position: absolute;
        top: -8px;
        left: calc(50% - 185px / 2);
    }

    .text-right {
        text-align: right;
    }
`

export const Footer = ({ className }: Props) => {
    const { isMd } = useMediaQuery()

    return (
        <Styles className={classNames(className)} $isMd={isMd}>
            {!isMd ? (
                <>
                    <MadeWithLoveStyles>
                        <span>Made with&nbsp;</span>
                        <Icon icon="favorite" />
                        <span>&nbsp;by&nbsp;</span>
                        <UighurTextStyles>ئېلىيار</UighurTextStyles>
                    </MadeWithLoveStyles>
                    <LogoTitleStyles className="content-center">
                        <span>Elipbe</span>
                        <Logo />
                        <UighurTextStyles>ئېلىپبە</UighurTextStyles>
                    </LogoTitleStyles>
                </>
            ) : (
                <>
                    <LogoTitleStyles>
                        <span>Elipbe</span>
                        <Logo />
                        <UighurTextStyles>ئېلىپبە</UighurTextStyles>
                    </LogoTitleStyles>
                    <MadeWithLoveStyles>
                        <span>Made with&nbsp;</span>
                        <Icon icon="favorite" />
                        <span>&nbsp;by&nbsp;</span>
                        <UighurTextStyles>ئېلىيار</UighurTextStyles>
                    </MadeWithLoveStyles>
                </>
            )}

            <div
                className={classNames('links-wrapper', {
                    'text-right': !isMd,
                })}
            >
                <BuyMeACoffeeStyles>Buy me a coffee</BuyMeACoffeeStyles>
                <ContactMeStyles>
                    <a href="mailto:hello@elipbe.ca">Contact me</a>
                </ContactMeStyles>
            </div>
        </Styles>
    )
}

const LogoTitleStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: 500;
    font-family: 'Work Sans', sans-serif;
    font-optical-sizing: auto;
    font-style: normal;

    img {
        width: 34px;
        margin: 0 16px;
    }
`

const MadeWithLoveStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #777;

    .material-symbols-outlined {
        color: red;
    }
`

const BuyMeACoffeeStyles = styled.div`
    color: #777;
`

const ContactMeStyles = styled.div`
    color: #777;

    a {
        color: inherit;
        text-decoration: none;
    }
`
