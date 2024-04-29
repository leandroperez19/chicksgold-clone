import { FC, ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Category } from "../services/categoryService.types";
import { getCategories } from "../services/categoryService";

type AppContextProps = {
    children: ReactNode
}

type ContextAtt = {
    categories: Category[] | null
}

const AppContext = createContext<ContextAtt | null>(null);

export const useAppContext = () => {
    const context = useContext(AppContext)
    if (!context) throw new Error('useAppContext must be used within an AppContext')
    return context
}

const ApplicationContext: FC<AppContextProps> = ({ children }) => {
    const [categories, setCategories] = useState<Category[] | null>(null);

    const getAllCategories = async () => {
        const res = await getCategories();
        if(!res) return;
        setCategories(res.categories)
    };

    useEffect(() => {
        if(categories) return;
        getAllCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <AppContext.Provider value={{ categories }}>
            {children}
        </AppContext.Provider>
    )
}

export default ApplicationContext;