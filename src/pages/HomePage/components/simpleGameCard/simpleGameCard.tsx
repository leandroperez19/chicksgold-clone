import { FC } from "react";
import { parseText } from "../../../../utils/parseText";
import './simpleGameCard.styles.css';

type SimpleGameCardProps = {
    img: string,
    title: string
}

const SimpleGameCard: FC<SimpleGameCardProps> = ({ img, title }) => {
  return (
    <div className="Simple-game-card flex-center full-size">
        <img src={img} alt={parseText(title)} className="bg full-size"/>
        <div className="title flex-center fd-column gap-10">
            <h3 className="fs-l">{title}</h3>
            <div className="cg-line" />
        </div>
    </div>
  )
}

export default SimpleGameCard;