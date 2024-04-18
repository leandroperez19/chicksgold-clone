import { FC, ReactNode, useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useScreen } from "../../hooks/useScreen";
import { getCategories } from "../../services/categoryService";
import { Category } from "../../services/categoryService.types";
import Footer from "./components/Footer/Footer";

type DefaultLayoutProps = {
    children: ReactNode;
};

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
    const [sidebarState, setSidebarState] = useState<boolean>(false);
    const [categories, setCategories] = useState<Category[] | null>(null);
    const ref = useRef<HTMLDivElement | null>(null);
    const { isMobile } = useScreen(1024);
    const getAllCategories = () => {
        getCategories().then((res) => {
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
            <Navbar sidebarToggle={sidebarToggle} categories={categories}/>
            {sidebarState && isMobile && (
                <Sidebar setState={sidebarToggle} reference={ref} categories={categories}/>
            )}
            {children}
            <Footer />
        </div>
    );
};

export default DefaultLayout;
