import { FC, useEffect, useState } from "react";
import "./Sidebar.styles.css";
import Searchbar from "../../../../components/Searchbar/Searchbar";
import { Category, Game } from "../../../../services/categoryService.types";

type SidebarProps = {
    setState: () => void,
    reference:  React.MutableRefObject<HTMLDivElement | null>,
    categories: Category[] | null
};

const Sidebar: FC<SidebarProps> = ({ setState, reference, categories }) => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const handleDropdownToggle = (label: string) => {
        if (label === activeDropdown) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(label);
        }
    };

    return (
        <div className="Sidebar" ref={reference}>
            <div className="sidebar-top d-flex align-center gap-10">
                <button className="close-btn flex-center gap-5" onClick={() => setState()}>
                    <span className="material-symbols-outlined">close</span>
                    Close
                </button>
                <div className="search-container">
                    <Searchbar />
                </div>
            </div>
            <div className="sidebar-dropdowns">
                {
                    categories?.map((cat: Category) => (
                        <SidebarDropdown label={cat.name} options={cat.games} isActive={cat.name === activeDropdown} onToggle={() => handleDropdownToggle(cat.name)} key={cat.id}/>
                    ))
                }
            </div>
        </div>
    );
};

type SidebarDropdownProps = {
    label: string;
    options: Game[];
    isActive: boolean;
    onToggle: () => void;
};

const SidebarDropdown: FC<SidebarDropdownProps> = ({
    label,
    options,
    isActive,
    onToggle,
}) => {
    const [active, setIsActive] = useState<boolean>(isActive);

    useEffect(() => {
        setTimeout(() => {
            setIsActive(isActive);
        }, 300);
    }, [isActive]);

    return (
        <div className={`sidebar-dropdown w-100 ${isActive ? "active" : "inactive"}`}>
            <div className="label w-100 d-flex align-center justify-between" onClick={onToggle}>
                <div className="text">{label}</div>
                <span className="material-symbols-outlined arrow-down">
                    arrow_drop_down
                </span>
            </div>
            {active && (
                <div className="dropdown-content">
                    <div className="trending-games">
                        <h5 className="fw-300 fs-regular">Trending Games</h5>
                        {options.map((opt, i) => (
                            opt.isTrending &&
                            <div className="dropdown-item d-flex gap-10 align-center" key={i}>
                                <img src={opt.icon.url} alt="icon" />
                                <div>{opt.name}</div>
                            </div>
                        ))}
                    </div>
                    <div className="all-games">
                    <h5 className="fw-300 fs-regular">All Games</h5>
                        {options.map((opt, i) => (
                            !opt.isTrending &&
                            <div className="dropdown-item d-flex gap-10 align-center" key={i}>
                                <img src={opt.icon.url} alt="icon" />
                                <div>{opt.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
