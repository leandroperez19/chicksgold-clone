import { gql, request } from "graphql-request";
import { Page } from "./pageService.types";


const MASTER_URL = "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clu4migp60sj807w2xergiy9k/master";

export const getPageMetaData = async (name: string): Promise<res> => {
    const query = gql`
        query Pages {
            pages(where: { name: "${name}"}) {
                id
                name
                title
                description
            }
        }
    `;
    return await request(MASTER_URL, query);
};

interface res {
    pages: Page[]
}
