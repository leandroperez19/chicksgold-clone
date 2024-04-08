import { FC, useRef, useState } from "react";
import logo from "../../../../assets/chicks-logo-large.svg";
import "./Navbar.styles.css";
import { useScreen } from "../../../../hooks/useScreen";
import { Category, Game } from "../../../../types/category.types";
import Searchbar from "../../../../components/Searchbar/Searchbar";

type NavbarProps = {
    sidebarToggle: () => void;
    categories: Category[] | null;
};

const Navbar: FC<NavbarProps> = ({ sidebarToggle, categories }) => {
    const { isMobile } = useScreen(1024);

    return (
        <nav className="d-flex align-center">
            <div className="nav-content d-flex align-center justify-between full-size">
                {isMobile ? (
                    <MobileContent sidebarToggle={sidebarToggle} />
                ) : (
                    <DesktopContent categories={categories} />
                )}
            </div>
        </nav>
    );
};

type MobileContentProps = {
    sidebarToggle: () => void;
};

const MobileContent: FC<MobileContentProps> = ({ sidebarToggle }) => {
    return (
        <>
            <div className="left flex-center gap-10">
                <button onClick={() => sidebarToggle()} className="flex-center">
                    <span className="material-symbols-outlined">menu</span>
                </button>
                <img src={logo} alt="logo" />
            </div>
            <div className="right flex-center gap-10">
                <span className="material-symbols-outlined white fs-l">
                    shopping_cart
                </span>
                <button className="flex-center gap-5">
                    <h4>SIGN IN</h4>
                    <span className="material-symbols-outlined">person</span>
                </button>
            </div>
        </>
    );
};

type DesktopContentProps = {
    categories: Category[] | null;
};

const DesktopContent: FC<DesktopContentProps> = ({ categories }) => {
    return (
        <>
            <div className="left flex-center h-100">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="categories d-flex h-100">
                    {categories?.map((cat, i: number) => (
                        <CategoryNav category={cat} key={i} />
                    ))}
                </div>
            </div>
            <div className="right flex-center gap-10 h-100">
                <div className="cart flex-center gap-5 h-100">
                    <span className="material-symbols-outlined white fs-l">
                        shopping_cart
                    </span>
                    <span className="fs-medium white">CART (0)</span>
                </div>
                <button className="flex-center gap-5">
                    <h4>SIGN IN</h4>
                    <span className="material-symbols-outlined">person</span>
                </button>
            </div>
        </>
    );
};

type CategoryNavProps = {
    category: Category;
};

const CategoryNav: FC<CategoryNavProps> = ({ category }) => {
    const ref = useRef<HTMLDivElement>(null);
    const hoverIn = () => ref.current?.classList.add("hoverin");
    const hoverOut = () => ref.current?.classList.remove("hoverin");
    const trendingGames = category.games.filter((game) => game.isTrending)
    const regularGames = category.games.filter((game) => !game.isTrending)

    const [filteredRegular, setFilteredRegular] = useState<Game[] | null>(null);
    const [filteredTrending, setFilteredTrending] = useState<Game[] | null>(null);

    const search = (e: string) => {
        const filteredRegular = regularGames.filter((game) =>
            game.name.toLowerCase().includes(e.toLowerCase()) && category.games.includes(game)
        );
        const filteredTrending = trendingGames.filter((game) =>
            game.name.toLowerCase().includes(e.toLowerCase()) && category.games.includes(game)
        );
        setFilteredRegular(filteredRegular);
        setFilteredTrending(filteredTrending);
    };

    return (
        <div className="category-nav h-100">
            <div className="hover-item flex-center h-100 white gap-5" ref={ref}>
                {category.name.toUpperCase()}
                <span className="material-symbols-outlined white arrow-down">
                    expand_more
                </span>
            </div>
            <div
                className="nav-expandable d-flex"
                onMouseOver={hoverIn}
                onMouseOut={hoverOut}
            >
                <div className="trending-games">
                    <h5 className="fs-regular fw-300">Trending Games</h5>
                    {filteredTrending
                        ? filteredTrending.map((game, i) => (
                              <GameContainer game={game} key={i} />
                          ))
                        : trendingGames.map((game, i) => (
                              <GameContainer game={game} key={i} />
                          ))}
                </div>
                <div className="all-games">
                    <div className="search-container">
                        <Searchbar onChange={search} />
                    </div>
                    <div className="games d-grid">
                        {filteredRegular
                            ? filteredRegular.map((game, i) => (
                                  <GameContainer game={game} key={i} />
                              ))
                            : regularGames.map((game, i) => (
                                  <GameContainer game={game} key={i} />
                              ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

type GameContainerProps = {
    game: Game;
};

const GameContainer: FC<GameContainerProps> = ({ game }) => {
    return (
        <div className="game d-flex gap-10 align-center fs-regular fw-300">
            <img src={game.icon.url} alt="icon" />
            <div>{game.name}</div>
        </div>
    );
};

export default Navbar;
