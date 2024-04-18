import { FC } from "react";
import { Section } from "../../sections";
import './footerSection.styles.css';

type FooterSectionProps = {
    section: Section;
};

const FooterSection: FC<FooterSectionProps> = ({ section }) => {
    return (
        <div className="footer-section">
            <h4>{section.name}</h4>
            <ul>
                {section.sections.map((s, i) => (
                    <li className="d-block" key={i}>
                        <a href={s.routeName} className="d-block">{s.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterSection;
