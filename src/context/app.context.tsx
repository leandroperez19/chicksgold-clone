import { FC, ReactNode, createContext, useContext } from "react";

type AppContextProps = {
    children: ReactNode
}

type ContextAtt = {}

const AppContext = createContext<ContextAtt | null>(null);

export const useAppContext = () => {
    const context = useContext(AppContext)
    if (!context) throw new Error('useAppContext must be used within an AppContext')
    return context
}

const ApplicationContext: FC<AppContextProps> = ({ children }) => {
    return(
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export default ApplicationContext;