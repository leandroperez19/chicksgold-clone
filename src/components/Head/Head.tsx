import { FC, useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { Page } from "../../services/pageService.types";
import { getPageMetaData } from "../../services/pageServices";

type HeadProps = {
    name: string
}

const Head: FC<HeadProps> = ({ name }) => {
    const [metaData, setMetaData] = useState<Page | null>(null);

    const getData = async () => {
      const res = await getPageMetaData(name);
      if(!res) return;
      setMetaData(res.pages[0])
    }
  
    useEffect(() => {
      getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <Helmet>
            <title>{metaData?.title}</title>
            <meta name="description" content={metaData?.description} />
        </Helmet>
    )
}

export default Head;