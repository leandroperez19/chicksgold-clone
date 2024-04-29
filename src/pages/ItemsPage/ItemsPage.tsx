import { FC, useEffect, useState } from "react";
import Head from "../../components/Head/Head";
import { useParams } from "react-router-dom";
import { getBackground } from "./utils";
import './ItemsPage.styles.css';
import { useAppContext } from "../../context/app.context";
import { Category, Game } from "../../services/categoryService.types";
import GamesDropdown from "../../components/GamesDropdown/GamesDropdown";
import gameIcon from '../../assets/game-default.svg';
import SimpleDropdown from "../../components/SimpleDropdown/SimpleDropdown";
import { itemTypeFilter, priceFilter, sortbyFilter } from "./static";
import { Item } from "../../services/itemsService.types";
import { getAllItems } from "../../services/itemsService";
import ItemsCard from "./components/itemsCard/itemsCard";
import { useScreen } from "../../hooks/useScreen";
import Searchbar from "../../components/Searchbar/Searchbar";
import Pagination from "../../components/Pagination/Pagination";

type ItemsPageProps = {}

const ItemsPage: FC<ItemsPageProps> = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>();
  const [itemsPage, setItemsPage] = useState<Category | null>()
  const [items, setItems] = useState<Item[] | null>();
  const { categories } = useAppContext();
  const { isMobile } = useScreen(580)

  const params = useParams();

  const getItems = async () => {
    const res = await getAllItems();
    if(!res) return;
    setItems(res.items);
  }

  useEffect(() => {
    getItems();
    if(!categories) return;
    const items = categories.find(c => c.name === 'Items');
    setItemsPage(items);
    if(!params) return;
    const game = items?.games.find(g => g.slug === params.game);
    if(game) setSelectedGame(game);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories])

  return (
    <>
      <Head name='Items'/>
      <div className="Items-page">
        <img src={getBackground(params.game?.toLowerCase() ?? 'default')} alt="background" className="background"/>
        <div className="page-content">
          <h1>Buy {selectedGame?.shortName ?? 'Game'} Items</h1>
          <div className="filters">
            <div className="first-row d-flex">
              {itemsPage && <GamesDropdown icon={gameIcon} label="Game" options={itemsPage?.games}/>}
              {isMobile &&
                <button className="flex-center">
                <span className="material-symbols-outlined fs-l">search</span>
              </button>}
            </div>
            {!isMobile && <Searchbar />}
            <div className="second-row d-flex radius">
              <SimpleDropdown 
                icon={priceFilter.icon} 
                label={priceFilter.label} 
                selected={priceFilter.selected} 
                options={priceFilter.options}
                disabled
                />
              <SimpleDropdown 
                icon={itemTypeFilter.icon} 
                label={itemTypeFilter.label} 
                selected={itemTypeFilter.selected} 
                options={itemTypeFilter.options}
                />
            </div>
          </div>
          <div className="cards-container radius">
            <div className="top d-flex align-center justify-between w-100">
                {!isMobile && <span className="items-shown">Showing {items?.length} of {items?.length}</span>}
                <div className="drop">
                    <SimpleDropdown 
                        icon={sortbyFilter.icon} 
                        label={sortbyFilter.label} 
                        selected={sortbyFilter.selected} 
                        options={sortbyFilter.options}
                    />  
                </div>
            </div>
            <div className="cards d-grid">
                {
                    items &&
                    items.map((item, i) => (
                        <ItemsCard key={i} item={item}/>
                    ))
                }
            </div>
            <div className="pagination-container">
                <Pagination totalPages={11}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemsPage;