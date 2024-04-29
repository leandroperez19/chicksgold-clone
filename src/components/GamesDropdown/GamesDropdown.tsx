import { FC, useEffect, useRef, useState } from "react";
import "./GamesDropdown.styles.css";
import { Game } from "../../services/categoryService.types";

type GamesDropdownProps = {
    icon: string;
    label: string;
    options: Game[]
};

const GamesDropdown: FC<GamesDropdownProps> = ({ icon, label, options }) => {
    const input = useRef<HTMLInputElement>(null);
    const [searchValue, setSearchValue] = useState("");
    const [selectedValue, setSelectedValue] = useState<Game | null>();
    const [optionsActive, setOptionsActive] = useState(false);

    const labelClick = () => {
        input.current?.focus();
        setOptionsActive(true);
        setSearchValue('');
    };

    const blurHandler = () => {
        setTimeout(() => {
            setSearchValue(selectedValue?.shortName?.toUpperCase() ?? searchValue)
        }, 300)
    }

    return (
        <div className="Games-dropdown">
            <div className="selected-option d-flex align-center justify-between" onClick={labelClick}>
                <div className="left-unselected d-flex align-center full-size">
                    <img src={selectedValue ? selectedValue.icon.url : icon} alt="icon" className="selected-icon"/>
                    <div className="text d-flex align-center full-size">
                        <input
                            type="text"
                            ref={input}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onFocus={() => labelClick()}
                            value={searchValue}
                            className={selectedValue ? 'filled' : ''}
                            onBlur={() => blurHandler()}
                        />
                        {!selectedValue && 
                        <span className={`label ${searchValue.length > 0 && "top"}`}>
                            {label}
                        </span>}
                    </div>
                </div>
                <span className="material-symbols-outlined arrow-down">arrow_drop_down</span>
            </div>
            {optionsActive && 
                <DropdownOptions 
                options={options} 
                close={setOptionsActive} 
                setSelectedValue={setSelectedValue}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                />
            }
        </div>
    );
};

type DropdownOptionsProps = {
  options: Game[];
  close: (x: boolean) => void;
  setSelectedValue: (x: Game) => void;
  searchValue: string;
  setSearchValue: (x: string) => void
};

const DropdownOptions: FC<DropdownOptionsProps> = ({ options, close, setSelectedValue, searchValue, setSearchValue }) => {
    const optionsContainer = useRef<HTMLDivElement>(null)
    const regular = options.filter(game => !game.isTrending && game.shortName?.includes(searchValue.toUpperCase()));
    const trending = options.filter(game => game.isTrending && game.shortName?.includes(searchValue.toUpperCase()))

    const [regularGames, setRegularGames] = useState<Game[] | null>(regular);
    const [trendingGames, setTrendingGames] = useState<Game[] | null>(trending);

    const closeHandler = () => {
      optionsContainer.current?.classList.add('inactive-dropdown');
      setTimeout(() => {
        close(false)
      }, 300)
    }

    const selectionHandler = async (game: Game) => {
      setSelectedValue(game);
      closeHandler();
      setTimeout(() => {
        setSearchValue(game.shortName?.toUpperCase() ?? '');
      }, 300)
    }
    
    useEffect(() => {
        setRegularGames(regular);
        setTrendingGames(trending);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue])

    useEffect(() => {
      const closeOptions = (e: any) => {
        if(e.target.closest('.Dropdown-options') || e.target.closest('.selected-option')) return;
        closeHandler();
      }
      document.body.addEventListener('click', e => closeOptions(e))
      return () => document.body.removeEventListener('click', closeOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <div className="Dropdown-options d-grid gap-10" ref={optionsContainer}>
        {(trendingGames && trendingGames?.length > 0) &&
        <div className="trending-games">
            <h5>Trending Games</h5>
            <div className="options">
                {trendingGames.map((game, i) => (
                <div className="option d-flex align-center gap-10" key={i} onClick={() => selectionHandler(game)}>
                    <img src={game.icon.url} alt="icon"/>
                    <span>{game.shortName}</span>
                </div>
                ))
                }
            </div>
        </div>
        }
        {(regularGames && regularGames.length > 0) &&
        <div className="regular-games">
          <h5>All</h5>
          <div className="options">
          {
            regularGames?.map((game, i) => (
              <div className="option d-flex align-center gap-10" key={i} onClick={() => selectionHandler(game)}>
                <img src={game.icon.url} alt="icon"/>
                <span>{game.shortName}</span>
              </div>
            ))
          }
          </div>
        </div>
        }
      </div>
    );
};

export default GamesDropdown;
