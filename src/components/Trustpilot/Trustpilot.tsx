import { FC } from "react";
import starFull from "../../assets/star_full.svg";
import starSemisesqui from "../../assets/star_semisesqui.svg";
import './Trustpilot.styles.css'

type TrustpilotProps = {};

const Trustpilot: FC<TrustpilotProps> = () => {
    return (
        <div className="score d-flex align-center">
            <div className="stars d-flex align-center">
                <img src={starFull} alt="star"/>
                <img src={starFull} alt="star"/>
                <img src={starFull} alt="star"/>
                <img src={starFull} alt="star"/>
                <img src={starSemisesqui} alt="star"/>
            </div>
            <span>4.6/5</span>
        </div>
    );
};

export default Trustpilot;