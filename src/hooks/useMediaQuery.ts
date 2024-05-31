import { useEffect, useState } from 'react'

import { utilsService } from '../services/utils.service'

enum WIDTH {
    SM = 576,
    MD = 768,
}

const checkViewPort = (width: number): boolean =>
    window.matchMedia(`only screen and (max-width: ${width}px)`).matches

export const useMediaQuery = () => {
    const [isMd, setIsMd] = useState<boolean>(checkViewPort(WIDTH.SM))

    useEffect(() => {
        // Add debounce to reduce number of re-rendering
        window.addEventListener(
            'resize',
            utilsService.debounce(handleResize, 100)
        )

        function handleResize() {
            setIsMd(checkViewPort(WIDTH.MD))
        }

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return {
        isMd,
    }
}
