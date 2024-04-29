import { gql, request } from "graphql-request";
import { Item } from "./itemsService.types";

const MASTER_URL = "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clu4migp60sj807w2xergiy9k/master";

export const getAllItems = async (): Promise<res> => {
    const query = gql`
        query AllItems {
            items(last: 15) {
                id
                image {
                    url
                }
                inStock
                onSale
                name
                minQuantity
                maxQuantity
                price
                previousPrice
                description
                game {
                    icon {
                        url
                    }
                    name
                    shortName
                }
            }
        }
    `;
    return await request(MASTER_URL, query);
};

type res = {
    items: Item[]
}