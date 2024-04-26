import { FC, useEffect } from "react"
import './HomePage.styles.css';
import Head from "../../components/Head/Head";
import { useScreen } from "../../hooks/useScreen";
import MobileBg from '../../assets/background-mobile.png';
import DesktopBg from '../../assets/home-page-background.jpg';
import Badge from '../../assets/award.svg';
import Trustpilot from "../../components/Trustpilot/Trustpilot";
import CategoryCard from "./components/categoryCard/categoryCard";
import { categories, mainGames, otherGames } from "./static";
import GameCardFull from "./components/gameCardFull/gameCardFull";
import SimpleGameCard from "./components/simpleGameCard/simpleGameCard";
import SeoContent from "./components/seoContent/seoContent";

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
          <div className="main-games-card">
            {
              mainGames.map((game, i) => (
                <GameCardFull name={game.name} text={game.text} icon={game.icon} img={game.img} key={i}/>
              ))
            }
          </div>
          <div className="games-simple-cards">
            <div className="title d-flex fd-column align-center gap-10">
              <h4>Games</h4>
              <Dots />
            </div>
            <SimpleGameCards />
          </div>
          <SeoContent />
        </div>
      </div>
    </>
  )
}

export default HomePage;

type DotsProps = {}

const Dots: FC<DotsProps> = () => {
  return(
    <div className="dots d-flex align-center justify-between">
      <div className="white-dot"/>
      <div className="white-dot"/>
      <div className="white-dot"/>
    </div>
  )
}

type SimpleGameCardsProps = {}

const SimpleGameCards: FC<SimpleGameCardsProps> = () => {
  const { isMobile } = useScreen(1024)

  return(
    <div className="cards d-grid gap-1rem">
      <div className="first-div d-grid gap-1rem">
        {
          otherGames.slice(0, isMobile ? 4 : 3).map((game, i) => (
            <SimpleGameCard key={i} img={game.img} title={game.title}/>
          ))
        }
      </div>
      <div className="second-div d-grid gap-1rem">
        {
          otherGames.slice(isMobile ? 4 : 3, otherGames.length + 1).map((game, i) => (
            <SimpleGameCard key={i} img={game.img} title={game.title}/>
          ))
        }
      </div>
    </div>
  )
}