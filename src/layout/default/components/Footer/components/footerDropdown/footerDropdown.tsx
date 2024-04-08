import { FC } from "react";
import { Section } from "../../sections";
import "./footerDropdown.styles.css";

type FooterDropdownProps = {
    section: Section;
    onToggle: () => void;
    isActive: boolean;
};

const FooterDropdown: FC<FooterDropdownProps> = ({ section, onToggle, isActive }) => {
    return (
        <div className={`footer-dropdown ${isActive ? "active" : "inactive"}`}>
            <div className="label d-flex align-center justify-between" onClick={onToggle}>
                <span>{section.name}</span>
                <span className="material-symbols-outlined fs-m arrow">expand_more</span>
            </div>
            <div className="footer-expandable">
                <ul>
                    {section.sections.map((sec) => (
                        <li className="d-block">
                            <a href={sec.routeName}>{sec.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FooterDropdown;
