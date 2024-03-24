import { FC, ReactNode, useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useScreen } from "../../hooks/useScreen";
import { getCategories } from "../../services/categoryService";

type DefaultLayaoutProps = {
    children: ReactNode;
};

const DefaultLayaout: FC<DefaultLayaoutProps> = ({ children }) => {
    const [sidebarState, setSidebarState] = useState<boolean>(false);
    const [categories, setCategories] = useState<any>();
    const ref = useRef<HTMLDivElement | null>(null);
    const { isMobile } = useScreen(1200);
    const getAllCategories = () => {
        getCategories().then((res: any) => {
            setCategories(res?.categories);
        });
    };

    const sidebarToggle = () => {
        if (!sidebarState) {
            setSidebarState(true);
            return;
        }
        ref.current?.classList.add("inactive");
        setTimeout(() => {
            ref.current?.classList.remove("inactive");
            setSidebarState(false);
        }, 300);
    };

    useEffect(() => {
        getAllCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Navbar sidebarToggle={sidebarToggle} />
            {sidebarState && isMobile && (
                <Sidebar setState={sidebarToggle} reference={ref} categories={categories}/>
            )}
            {children}
        </div>
    );
};

export default DefaultLayaout;
