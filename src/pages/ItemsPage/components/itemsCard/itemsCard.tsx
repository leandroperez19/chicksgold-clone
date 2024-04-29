import { FC, useState } from "react"
import { useScreen } from "../../../../hooks/useScreen"
import { Item } from "../../../../services/itemsService.types"
import './itemsCard.styles.css'
import { formatCurrency } from "../../../../utils/formatCurrency"

type ItemsCardProps = {
    item: Item
}

const ItemsCard: FC<ItemsCardProps> = ({ item }) => {
  return (
    <div className="Items-card radius">
        <div className="top d-flex justify-between">
            <div className={`left d-flex fd-column ${!item.onSale ? 'flex-center' : 'justify-between'}`}>
                {item.onSale && <div className="on-sale d-flex align-center gap-5">ON SALE</div>}
                {item.inStock && <div className="in-stock">In stock</div>}
            </div>
            <div className="right">
                <NumericInput value={item.minQuantity} maxQuantity={item.maxQuantity}/>
            </div>
        </div>
        <div className="image">
            <img src={item.image.url} alt="item" />
        </div>
        <div className="name d-flex justify-between">
            <span>{item.name}</span>
            <img src={item.game.icon.url} alt="game-icon" />
        </div>
        <div className="price d-flex align-center gap-10">
            <div className="main-price">{formatCurrency(item.price)}</div>
            {item.previousPrice && <div className="previous-price">{formatCurrency(item.previousPrice)}</div>}
        </div>
        <p className="description">{item.description}</p>
        <div className="buttons white d-flex gap-10">
            <button className="flex-center radius">Details</button>
            <button className="flex-center radius">
                Add
                <span className="material-symbols-outlined white fs-m">
                    shopping_cart
                </span>
            </button>
        </div>
    </div>
  )
}

type NumericInputProps = {
    value: number;
    maxQuantity: number;
}

const NumericInput: FC<NumericInputProps> = ({ value, maxQuantity }) => {
    const { isMobile } = useScreen(1024)
    const [quantity, setQuantity] = useState(value)

    const plusHandler = () => (quantity < maxQuantity) && setQuantity(prevQuantity => prevQuantity + 1)
    const minusHandler = () => (quantity !== value) && setQuantity(prevQuantity => prevQuantity - 1)

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
    }    

    const blurHandler = () => {
        if(quantity > maxQuantity) setQuantity(maxQuantity);
        if(quantity < value) setQuantity(value)
    }

    if(isMobile)
    return(
        <div className="Mobile-input d-flex justify-between align-center">
            <button className="minus white flex-center fs-m radius" onClick={minusHandler}>-</button>
            <div className="quantity">{quantity}</div>
            <button className="plus white flex-center fs-m radius" onClick={plusHandler}>+</button>
        </div>
    )
    return(
        <div className="Desktop-input">
            <input type="number" value={quantity} onChange={e => inputHandler(e)} onBlur={blurHandler}/>
            <div className="arrows d-flex fd-column gap-5">
                <span className="material-symbols-outlined" onClick={plusHandler}>arrow_drop_up</span>
                <span className="material-symbols-outlined" onClick={minusHandler}>arrow_drop_down</span>
            </div>
        </div>
    )
}

export default ItemsCard;
