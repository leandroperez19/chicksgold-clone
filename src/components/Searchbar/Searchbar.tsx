import { FC } from "react";
import "./Searchbar.styles.css";

type SearchbarProps = {};

const Searchbar: FC<SearchbarProps> = () => {
    return (
        <div className="Searchbar flex-center w-100">
            <span className="material-symbols-outlined">search</span>
            <input type="text" name="search" id="search" className="full-size" autoComplete="off"/>
            <span className="placeholder">Search</span>
        </div>
    );
};

export default Searchbar;
