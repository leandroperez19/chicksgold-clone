import { FC } from "react";
import './categoryCard.styles.css';
import circle from '../../../../assets/circle.svg';

type CategoryCardProps = {
    name: string,
    imgSrc: string
}

const CategoryCard: FC<CategoryCardProps> = ({ name, imgSrc }) => {
  return (
    <div className="Category-card d-flex align-center fd-column">
        <div className="image flex-center fd-column">
            <img src={circle} alt="circle"/>
            <img src={imgSrc} alt={name}/>
        </div>
        <div className="name flex-center fd-column gap-10">
            <h4>{name}</h4>
            <div className="cg-line" />
        </div>
    </div>
  )
}

export default CategoryCard;
