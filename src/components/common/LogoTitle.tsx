import classNames from 'classnames'
import { ReactNode } from 'react'
import styled from 'styled-components'

import { Logo } from './Logo'

interface Props {
    className?: string
    title: string | ReactNode
    rtl?: boolean
}

const Styles = styled.div`
    display: flex;
    align-items: center;

    .logo-wrapper {
        margin-right: 8px;
        margin-left: 8px;
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
