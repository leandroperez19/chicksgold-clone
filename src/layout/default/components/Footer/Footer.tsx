import { FC, useState } from "react";
import "./Footer.styles.css";
import logo from "../../../../assets/chicks-logo-large.svg";
import { sections } from "./sections";
import FooterDropdown from "./components/footerDropdown/footerDropdown";
import Social from "./components/social/social";
import { useScreen } from "../../../../hooks/useScreen";
import FooterSection from "./components/footerSection/footerSection";
import Trustpilot from "../../../../components/Trustpilot/Trustpilot";

type FooterProps = {};

const Footer: FC<FooterProps> = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const { isMobile } = useScreen()

    const dropdownToggle = (label: string) =>
        label === activeDropdown
            ? setActiveDropdown(null)
            : setActiveDropdown(label);

    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo-container">
                    <img src={logo} alt="logo"/>
                    <a href="mailto:support@chicksgold.com" className="d-block">
                        support@chicksgold.com
                    </a>
                </div>
                <div className="dropdowns sections">
                    {sections.map((section, i) => (
                        isMobile ? 
                        <FooterDropdown
                            section={section}
                            key={i}
                            onToggle={() => dropdownToggle(section.name)}
                            isActive={section.name === activeDropdown}
                        />:
                        <FooterSection section={section} key={i}/>
                    ))}
                </div>
                <div className="trustpilot">
                    <a href="/">Trustpilot Reviews</a>
                    <Trustpilot />
                </div>
                <div className="socials flex-center">
                    <h4>Social</h4>
                    <Social />
                </div>
                <div className="copyright">
                    Copyright © 2017, ChicksGold.com. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
