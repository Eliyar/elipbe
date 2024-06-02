import { createContext, useContext } from 'react'

import { SelectionHookState, useSelection } from './_useSelection'

interface ContextState {
    selection: SelectionHookState
}

const AppStateContext = createContext<ContextState>(null!)

// Provider
export function AppContextProvider({ children }: any) {
    const selection = useSelection()

    return (
        <AppStateContext.Provider
            value={{
                selection,
            }}
        >
            {children}
        </AppStateContext.Provider>
    )
}

// Consumer
export function useAppContext() {
    return useContext(AppStateContext)
}
