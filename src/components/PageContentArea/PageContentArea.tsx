import { FC, useEffect, useState } from "react";
import "./PageContentArea.styles.css";
import { getPageContent } from "../../services/pageContentService";
import { PageContent } from "../../services/pageContentService.types";

type PageContentAreaProps = {
    pageName: string;
    keyName: string;
};

const PageContentArea: FC<PageContentAreaProps> = ({ pageName, keyName }) => {
    const [content, setContent] = useState<PageContent | null>();

    const getContent = async () => {
        const res = await getPageContent(pageName, keyName);
        if (!res) return;
        setContent(res.pageContentAreas[0]);
    };

    useEffect(() => {
        if (content) return;
        getContent();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!content) return <></>;

    return (
        <div
            className="Page-content-area"
            dangerouslySetInnerHTML={{
                __html: content?.content.replaceAll('`', '')
            }}
        ></div>
    );
};

export default PageContentArea;
