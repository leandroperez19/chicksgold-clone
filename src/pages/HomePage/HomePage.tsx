import { FC } from "react"
import './HomePage.styles.css';
import Head from "../../components/Head/Head";
import { useScreen } from "../../hooks/useScreen";
import MobileBg from '../../assets/background-mobile.png';
import DesktopBg from '../../assets/home-page-background.jpg';

type HomePageProps = {}

const HomePage: FC<HomePageProps> = () => {
  const { isMobile } = useScreen()

  return (
    <>
      <Head name="Home"/>
      <div className="Homepage">
        <img src={isMobile ? MobileBg : DesktopBg} className={isMobile ? 'mobile-bg' : 'desktop-bg'} alt="background"/>
        <div className="page-container">
          
        </div>
      </div>
    </>
  )
}

export default HomePage;