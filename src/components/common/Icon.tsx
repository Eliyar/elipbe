import classNames from 'classnames'
import styled from 'styled-components'

interface Props {
    className?: string
    icon: string
    onClick?(): void
}

const Styles = styled.span`
    &.hover {
        &:hover {
            cursor: pointer;
        }
    }
`

export const Icon = ({ className, icon, onClick }: Props) => {
    return (
        <Styles
            className={classNames(className, 'material-symbols-outlined', {
                hover: !!onClick,
            })}
            onClick={(event) => {
                event.stopPropagation()
                if (onClick) {
                    onClick()
                }
            }}
        >
            {icon}
        </Styles>
    )
}
