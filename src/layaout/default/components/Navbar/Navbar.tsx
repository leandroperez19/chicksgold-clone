import { FC } from "react";
import logo from "../../../../assets/chicks-logo-large.svg";
import "./Navbar.styles.css";
import { useScreen } from "../../../../hooks/useScreen";

type NavbarProps = {
    sidebarToggle: () => void,
};

const Navbar: FC<NavbarProps> = ({sidebarToggle}) => {
    const { isMobile } = useScreen(1200);

    return (
        <nav className="d-flex align-center">
            <div className="nav-content d-flex align-center justify-between w-100">
                {isMobile ? <MobileContent sidebarToggle={sidebarToggle}/> : <div></div>}
            </div>
        </nav>
    );
};

type MobileContentProps = {
    sidebarToggle: () => void
};

const MobileContent: FC<MobileContentProps> = ({sidebarToggle}) => {
    return (
        <>
            <div className="left flex-center gap-10">
                <button onClick={() => sidebarToggle()} className="flex-center">
                    <span className="material-symbols-outlined">menu</span>
                </button>
                <img src={logo} alt="logo" />
            </div>
            <div className="right">
                <button className="flex-center gap-5">
                    <h4>SIGN IN</h4>
                    <span className="material-symbols-outlined">person</span>
                </button>
            </div>
        </>
    );
};

export default Navbar;
