import classNames from 'classnames'
import { ReactNode, useCallback, useRef } from 'react'
import styled from 'styled-components'

interface Props {
    className?: string
    audioSrc: string
    children: ReactNode
}

const Styles = styled.div``

const AudioPlayer = ({ className, audioSrc, children }: Props) => {
    const audioRef = useRef<HTMLAudioElement | null>(null)

    const handlePlay = useCallback((event: any) => {
        event.stopPropagation()
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            audioRef.current.currentTime = 0
        } catch (error) {
            console.error(error)
        }
        audioRef.current?.play()
    }, [])

    return (
        <Styles className={classNames(className)} onClick={handlePlay}>
            {children}
            <audio ref={audioRef} src={audioSrc} />
        </Styles>
    )
}

export default AudioPlayer
