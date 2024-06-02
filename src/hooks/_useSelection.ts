import { useCallback, useState } from 'react'

import { MAX_GIF_ANIMATIONS } from '../constants'

export interface SelectionHookState {
    isAnimating(alphabet: string): boolean
    onToggleAnimation(alphabet: string): void
}

export const useSelection = (): SelectionHookState => {
    const [animating, setAnimating] = useState<string[]>([])

    const isAnimating = useCallback(
        (alphabet: string) => animating.indexOf(alphabet) !== -1,
        [animating]
    )

    const onToggleAnimation = useCallback((alphabet: string) => {
        setAnimating((prev) => {
            let array = [...prev]

            if (array.indexOf(alphabet) !== -1) {
                array = array.filter((i) => i !== alphabet)
            } else {
                array.push(alphabet)
            }

            // When the max selection has reached, remove the first item
            if (array.length > MAX_GIF_ANIMATIONS) {
                array.shift()
            }

            return array
        })
    }, [])

    return {
        isAnimating,
        onToggleAnimation,
    }
}
