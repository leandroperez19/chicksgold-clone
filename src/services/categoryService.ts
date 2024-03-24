import { gql, request } from "graphql-request";

const MASTER_URL =
    "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clu4migp60sj807w2xergiy9k/master";

export const getCategories = async () => {
    const query = gql`
        query Categories {
            categories {
                createdAt
                id
                name
                updatedAt
            }
        }
    `;
    return await request(MASTER_URL, query);
};

