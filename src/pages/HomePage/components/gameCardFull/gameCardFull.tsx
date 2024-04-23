import { FC } from "react";
import './gameCardFull.styles.css';
import { parseText } from "../../../../utils/parseText";
import { useScreen } from "../../../../hooks/useScreen";

type GameCardFullProps = {
  name: string,
  text: string,
  img: string,
  icon: string,
}

const GameCardFull: FC<GameCardFullProps> = ({name, text, img, icon}) => {
  const { isMobile } = useScreen(1024)

  return (
    <div className="GameCardFull">
      <img src={img} alt={`${parseText(name)}-background`} className="bg-img full-size"/>
      <div className="card-content">
        <div className="title text">
          <h5>{name}</h5>
          <div className="cg-line" />
          {!isMobile && <p>{text}</p>}
        </div>
        {!isMobile &&<button>Buy Now</button>}
        <img src={icon} alt={`${parseText(name)}-icon`} className="icon"/>
      </div>
    </div>
  )
}

export default GameCardFull;