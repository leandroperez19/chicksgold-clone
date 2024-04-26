import { FC, useEffect, useState } from "react";
import { pageContentImage } from "../../services/pageContentService.types";
import { getPageContentImage } from "../../services/pageContentService";
import './PageContentImage.styles.css'

type PageContentImageProps = {
    keyName: string;
};

export const PageContentImage: FC<PageContentImageProps> = ({ keyName }) => {
    const [image, setImage] = useState<pageContentImage | null>();

    const getPageImage = async () => {
        const res = await getPageContentImage(keyName);
        if (!res) return;
        setImage(res.pageContentImages[0]);
    };

    useEffect(() => {
        getPageImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyName])

    if (!image) return <></>;

    return (
        <div className="Page-content-image full-size">
            <img src={image.image.url} alt={image.key} className="full-size"/>
        </div>
    );
};

export default PageContentImage;
