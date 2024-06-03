import { useEffect, useState } from 'react'

import { utilsService } from '../services/utils.service'

enum WIDTH {
    MD = 768,
}

const checkViewPort = (width: number): boolean =>
    window.matchMedia(`only screen and (max-width: ${width}px)`).matches

export const useMediaQuery = () => {
    const [isMd, setIsMd] = useState<boolean>(checkViewPort(WIDTH.MD))
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

    useEffect(() => {
        // Add debounce to reduce number of re-rendering
        window.addEventListener(
            'resize',
            utilsService.debounce(handleResize, 100)
        )

        function handleResize() {
            setIsMd(checkViewPort(WIDTH.MD))
            setWindowWidth(window.innerWidth)
        }

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return {
        isMd,
        windowWidth,
    }
}
