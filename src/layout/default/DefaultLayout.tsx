import { FC, ReactNode, useRef, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useScreen } from "../../hooks/useScreen";
import Footer from "./components/Footer/Footer";

type DefaultLayoutProps = {
    children: ReactNode;
};

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
    const [sidebarState, setSidebarState] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const { isMobile } = useScreen(1024);

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

    return (
        <div className="app-container">
            <Navbar sidebarToggle={sidebarToggle}/>
            {sidebarState && isMobile && (
                <Sidebar setState={sidebarToggle} reference={ref}/>
            )}
            {children}
            <Footer />
        </div>
    );
};

export default DefaultLayout;
