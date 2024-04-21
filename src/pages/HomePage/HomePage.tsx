import { FC, useEffect } from "react"
import './HomePage.styles.css';
import Head from "../../components/Head/Head";
import { useScreen } from "../../hooks/useScreen";
import MobileBg from '../../assets/background-mobile.png';
import DesktopBg from '../../assets/home-page-background.jpg';
import Badge from '../../assets/award.svg';
import Trustpilot from "../../components/Trustpilot/Trustpilot";
import CategoryCard from "./components/categoryCard/categoryCard";
import { categories } from "./static";

type HomePageProps = {}

const HomePage: FC<HomePageProps> = () => {
  const { isMobile } = useScreen()
  let previousScrollTop = 0

  const scrollHandler = () => {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop >= 30 && currentScrollTop > previousScrollTop) document.querySelector('nav')?.classList.remove('navbar-transparent');
    else document.querySelector('nav')?.classList.add('navbar-transparent')
  }

  useEffect(() => {
    document.querySelector('nav')?.classList.add('navbar-transparent')
    document.addEventListener('scroll', scrollHandler)

    return () => document.removeEventListener('scroll', scrollHandler)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          <div className="reviews d-flex align-center gap-10">
            <img src={Badge} alt="award"/>
            <div className="text d-grid">
              <Trustpilot />
              <a href="/#" className="flex-center gap-5">
                <span>Customer reviews on trustpilot.com</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
          <div className="home-cards d-flex">
              {categories.map((cat, i) => (
                <CategoryCard name={cat.name} imgSrc={cat.img} key={i}/>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage;