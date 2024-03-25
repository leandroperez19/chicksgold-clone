import { gql, request } from "graphql-request";
import { Category } from "../types/category.types";

const MASTER_URL =
    "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clu4migp60sj807w2xergiy9k/master";

export const getCategories: () => Promise<res> = async () => {
    const query = gql`
        query Categories {
            categories {
                createdAt
                id
                name
                updatedAt
                games(last: 25) {
                    id 
                    name
                    shortName
                    slug
                    icon {
                        url
                    }
                    isTrending
                }
            }
        }
    `;
    return await request(MASTER_URL, query);
};

interface res {
    categories: Category[]
}
