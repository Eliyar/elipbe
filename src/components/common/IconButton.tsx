import classNames from 'classnames'
import styled from 'styled-components'

import { Icon } from './Icon'

interface Props {
    className?: string
    icon: string
    onClick?(): void
}

const Styles = styled.div`
    min-width: 56px;
    min-height: 56px;
    max-width: 56px;
    max-height: 56px;
    border-radius: 50%;
    /* TODO: color var */
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        /* TODO: color var */
        background-color: #aaa;

        &.hover {
            cursor: pointer;
        }
    }
`

export const IconButton = ({ className, icon, onClick }: Props) => {
    return (
        <Styles
            className={classNames(className, {
                hover: !!onClick,
            })}
            onClick={(event) => {
                if (onClick) {
                    event.stopPropagation()
                    onClick()
                }
            }}
        >
            <Icon icon={icon} />
        </Styles>
    )
}
