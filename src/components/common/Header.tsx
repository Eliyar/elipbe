import classNames from 'classnames'
import styled, { css } from 'styled-components'

import { useMediaQuery } from '../../hooks/useMediaQuery'
import { FlipCard } from './FlipCard'
import { LogoTitle } from './LogoTitle'
import { UighurTextStyles } from './styles'

interface Props {
    className?: string
}

const Styles = styled.div<{ $isMd: boolean }>`
    padding: 8px 12px;
    margin-bottom: 100px;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    color: #454bb1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.95);
    position: sticky;
    top: 0px;
    z-index: 3;

    ${({ $isMd }) =>
        $isMd &&
        css`
            font-size: 26px;
            margin-bottom: 32px;

            img {
                width: 32px;
            }
        `}
`

export const Header = ({ className }: Props) => {
    const { isMd } = useMediaQuery()

    return (
        <Styles className={classNames(className)} $isMd={isMd}>
            <FlipCard
                width={160}
                height={isMd ? 48 : 56}
                frontNode={<LogoTitle title="Elipbe" />}
                backNode={() => (
                    <LogoTitle
                        title={<UighurTextStyles>ئېلىپبە</UighurTextStyles>}
                        rtl
                    />
                )}
            />
            <div />
        </Styles>
    )
}
