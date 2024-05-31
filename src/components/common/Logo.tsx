import classNames from 'classnames'
import styled from 'styled-components'

interface Props {
    className?: string
}

const Styles = styled.img`
    width: 40px;
    height: auto;
    display: inline-block;
`

export const Logo = ({ className }: Props) => {
    return (
        <Styles
            className={classNames(className)}
            src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
            alt="Logo"
        ></Styles>
    )
}
