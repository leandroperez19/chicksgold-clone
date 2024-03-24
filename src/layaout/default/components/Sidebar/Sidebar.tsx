import { FC, useEffect, useState } from "react";
import "./Sidebar.styles.css";
import Searchbar from "../../../../components/Searchbar/Searchbar";

type SidebarProps = {
    setState: () => void,
    reference:  React.MutableRefObject<HTMLDivElement | null>,
    categories: any[]
};

const Sidebar: FC<SidebarProps> = ({ setState, reference, categories }) => {
    const [array, setArray] = useState<string[]>([""]);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const generateArray = () => {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push("hola");
        }
        setArray(arr);
    };

    useEffect(() => {
        generateArray();
    }, []);

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
                    categories.map((cat: any) => (
                        <SidebarDropdown label={cat.name} options={array} isActive={cat.name === activeDropdown} onToggle={() => handleDropdownToggle(cat.name)}/>
                    ))
                }
                {/* <SidebarDropdown
                    label={"Currency"}
                    options={array}
                    isActive={"Currency" === activeDropdown}
                    onToggle={() => handleDropdownToggle("Currency")}
                />
                <SidebarDropdown
                    label={"Items"}
                    options={array}
                    isActive={"Items" === activeDropdown}
                    onToggle={() => handleDropdownToggle("Items")}
                /> */}
            </div>
        </div>
    );
};

type SidebarDropdownProps = {
    label: string;
    options: string[];
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
        <div
            className={`sidebar-dropdown w-100 ${isActive ? "active" : "inactive"}`}
            onClick={onToggle}
        >
            <div className="label w-100 d-flex align-center justify-between">
                <div className="text">{label}</div>
                <span className="material-symbols-outlined arrow-down">
                    arrow_drop_down
                </span>
            </div>
            {active && (
                <div className="dropdown-content">
                    {options.map((opt, i) => (
                        <div
                            className="dropdown-item d-flex gap-10 align-center"
                            key={i}
                        >
                            <span className="material-symbols-outlined">
                                play_circle
                            </span>
                            <div>{opt}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Sidebar;
