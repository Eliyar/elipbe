import classNames from 'classnames'
import styled, { css } from 'styled-components'

import { useMediaQuery } from '../../hooks/useMediaQuery'
import { Icon } from './Icon'

interface Props {
    className?: string
    icon: string
    onClick?(): void
}

const Styles = styled.div<{ $isMd: boolean }>`
    border-radius: 50%;
    background-color: #4444441c;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;

    ${({ $isMd }) =>
        $isMd
            ? css`
                  min-width: 32px;
                  min-height: 32px;
                  max-width: 32px;
                  max-height: 32px;
                  .icon {
                      font-size: 20px;
                  }
              `
            : css`
                  min-width: 56px;
                  min-height: 56px;
                  max-width: 56px;
                  max-height: 56px;

                  .icon {
                      font-size: 32px;
                  }
              `}

    .icon {
        color: #444444;
    }

    &:hover {
        background-color: #4444442c;
        transform: scale(1.1);

        &.hover {
            cursor: pointer;
        }
    }
`

export const IconButton = ({ className, icon, onClick }: Props) => {
    const { isMd } = useMediaQuery()

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
            $isMd={isMd}
        >
            <Icon className="icon" icon={icon} />
        </Styles>
    )
}
