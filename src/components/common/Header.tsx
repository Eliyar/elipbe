import classNames from 'classnames'
import styled from 'styled-components'

import { FlipCard } from './FlipCard'
import { LogoTitle } from './LogoTitle'
import { UighurTextStyles } from './styles'

interface Props {
    className?: string
}

const Styles = styled.div`
    padding: 12px;
    margin-bottom: 100px;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    color: #555;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.95);
    position: sticky;
    top: 0px;
    z-index: 3;
`

export const Header = ({ className }: Props) => {
    return (
        <Styles className={classNames(className)}>
            <FlipCard
                width={160}
                height={56}
                frontNode={<LogoTitle title="Elipbe" />}
                backNode={
                    <LogoTitle
                        title={<UighurTextStyles>ئيلىپبە</UighurTextStyles>}
                        rtl
                    />
                }
            />
            <div />
        </Styles>
    )
}
