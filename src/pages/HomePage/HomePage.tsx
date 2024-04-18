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
        <div className="main-content-container">
          <div className="welcome">
            <h1>Welcome to Chicks Gold.</h1>
            <p>Your destination to buy, sell, boost or swap your video game assets.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage;