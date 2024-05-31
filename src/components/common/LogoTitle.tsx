import classNames from 'classnames'
import { ReactNode } from 'react'
import styled from 'styled-components'

import { Logo } from './Logo'

interface Props {
    className?: string
    title: string | ReactNode
    rtl?: boolean
}

const Styles = styled.span`
    display: flex;
    padding: 8px 12px;
    align-items: center;
    transition: transform var(--transition-duration) ease;
    transform-origin: center;

    .logo-wrapper {
        &:first-child {
            margin-right: 8px;
        }
        &:last-child {
            margin-left: 8px;
        }
    }

    * {
        transform: unset !important;
    }
`

export const LogoTitle = ({ className, title, rtl }: Props) => {
    return (
        <Styles className={classNames(className)}>
            {!rtl && <Logo className="logo-wrapper" />}
            <div>{title}</div>
            {rtl && <Logo className="logo-wrapper" />}
        </Styles>
    )
}
