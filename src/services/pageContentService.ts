import { gql, request } from "graphql-request";
import { PageContent, pageContentImage } from "./pageContentService.types";

const MASTER_URL =
    "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clu4migp60sj807w2xergiy9k/master";

export const getPageContent = async (name: string, key: string): Promise<res> => {
    const query = gql`
        query PageContent {
            pageContentAreas(
                where: { page: { name: "${name}" }, key: "${key}" }
            ) {
                id
                key
                content
            }
        }
    `;
    return await request(MASTER_URL, query);
};

type res = {
    pageContentAreas: PageContent[]
}

export const getPageContentImage = async (key: string): Promise<imgRes> => {
    const query = gql`
    query MyQuery {
        pageContentImages(where: {key: "`+key+`"}) {
          id
          image {
            url
          }
          key
        }
      }
    `;
    return await request(MASTER_URL, query);
}

type imgRes = {
    pageContentImages: pageContentImage[]
}