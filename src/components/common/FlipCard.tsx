import classNames from 'classnames'
import { ReactNode, useState } from 'react'
import styled from 'styled-components'

interface Props {
    className?: string
    width: number
    height: number
    frontNode: ReactNode
    backNode(isFlipped: boolean): ReactNode
    onFlip?(): void
}

const Styles = styled.div<{ $width: number; $height: number }>`
    --border-radius: 24px;
    --transition-duration: 0.3s;

    transition: all var(--transition-duration) ease;
    transform-origin: center;

    .front-node * {
        transition: all var(--transition-duration) ease;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.05);

        .front-node {
            img {
                transform: scale(1.07);
                transform-origin: bottom right;
            }
            > div {
                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    background-color: rgba(0, 0, 0, 0.08);
                    border-radius: var(--border-radius);
                }
                div {
                    transform: scale(1.05);
                }
            }
        }
    }

    .flip-container.flipped .flipper {
        transform: rotateY(180deg);
    }

    .flip-container,
    .front-node,
    .back-node {
        width: ${(props) => props.$width}px;
        height: ${(props) => props.$height}px;
    }

    .flipper {
        transition: 0.5s;
        transform-style: preserve-3d;
        position: relative;
    }

    .front-node,
    .back-node {
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }

    .front-node {
        z-index: 2;
        transform: rotateY(0deg);
        background-color: inherit;
    }

    .back-node {
        transform: rotateY(180deg);
    }
`

export const FlipCard = ({
    className,
    width,
    height,
    frontNode,
    backNode,
    onFlip,
}: Props) => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false)

    return (
        <Styles
            className={classNames(className)}
            $width={width}
            $height={height}
            onClick={(event) => {
                event.stopPropagation()
                setIsFlipped((prev) => !prev)
                if (onFlip) {
                    onFlip()
                }
            }}
        >
            <div
                className={classNames('flip-container', {
                    flipped: isFlipped,
                })}
            >
                <div className="flipper">
                    <div className="front-node">{frontNode}</div>
                    <div className="back-node">{backNode(isFlipped)}</div>
                </div>
            </div>
        </Styles>
    )
}
