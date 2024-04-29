import { Game } from "./categoryService.types"

export interface Item {
    id: string,
    image: {
        url: string
    },
    inStock: boolean,
    onSale?: boolean,
    name: string,
    minQuantity: number,
    maxQuantity: number,
    price: number,
    previousPrice?: number,
    game: Game,
    description: string
}