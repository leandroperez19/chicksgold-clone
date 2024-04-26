import { FC } from "react";
import PageContentArea from "../../../../components/PageContentArea/PageContentArea";
import './seoContent.styles.css';
import { simpleCards } from "../../static";
import diamond from '../../../../assets/diamond-circle.svg';
import PageContentImage from "../../../../components/PageContentImage/PageContentImage";
import { useScreen } from "../../../../hooks/useScreen";

type SeoContentProps = {};

const SeoContent: FC<SeoContentProps> = () => {
    const { isMobile } = useScreen(1024)

    return (
        <div className="Seo-content">
          <div className="promise">
           <div className="text">
              <PageContentArea pageName="Home" keyName="HOME_PROMISE_TITLE" />
              <PageContentArea pageName="Home" keyName="HOME_PROMISE_CONTENT" />
           </div>
           <div className="cards d-grid">
            {simpleCards.map((text, i) => (
              <div className="card d-flex align-center" key={i}>
                <img src={diamond} alt="diamond" />
                <span>{text}</span>
              </div>
            ))}
           </div>
          </div>
          <div className="first-banner banner">
            <PageContentImage keyName={`FIRST_BANNER_${isMobile ? 'MOBILE' : 'DESKTOP'}`}/>
          </div>
          <div className="about">
            <div className="text">
              <PageContentArea pageName="Home" keyName="HOME_ABOUT_TITLE" />
              <PageContentArea pageName="Home" keyName="HOME_ABOUT_CONTENT" />
            </div>
          </div>
          <div className="second-banner banner">
            <PageContentImage keyName={`SECOND_BANNER_${isMobile ? 'MOBILE' : 'DESKTOP'}`}/>
          </div>
          <div className="products">
            <div className="text">
              <PageContentArea pageName="Home" keyName="HOME_PRODUCTS_TITLE" />
              <PageContentArea pageName="Home" keyName="HOME_PRODUCTS_CONTENT" />
            </div>
          </div>
        </div>
    );
};

export default SeoContent;
