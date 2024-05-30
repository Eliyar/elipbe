import classNames from 'classnames'
import { ReactNode, useState } from 'react'
import styled from 'styled-components'

interface Props {
    className?: string
    width: number
    height: number
    frontNode: ReactNode
    backNode: ReactNode
}

const Styles = styled.div<{ $width: number; $height: number }>`
    transition: transform 0.3s ease;
    transform-origin: center;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
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
}: Props) => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false)

    return (
        <Styles
            className={classNames(className)}
            $width={width}
            $height={height}
            onClick={() => setIsFlipped((prev) => !prev)}
        >
            <div
                className={classNames('flip-container', {
                    flipped: isFlipped,
                })}
            >
                <div className="flipper">
                    <div className="front-node">{frontNode}</div>
                    <div className="back-node">{backNode}</div>
                </div>
            </div>
        </Styles>
    )
}
