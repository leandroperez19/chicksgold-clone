import { FC, useRef, useState } from "react";
import "./Searchbar.styles.css";

type SearchbarProps = {
    onChange?: (e: string) => void;
};

const Searchbar: FC<SearchbarProps> = ({ onChange }) => {
    const ref = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState<string>("");

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        if(!onChange) return;
        onChange(e.target.value);
    };

    const eraseHandler = () => {
        setInputValue('');
        if(!onChange) return;
        onChange('');
    }

    return (
        <div className="Searchbar flex-center w-100">
            <span className="material-symbols-outlined">search</span>
            <input
                type="text"
                name="search"
                id="search"
                ref={ref}
                className="full-size"
                autoComplete="off"
                onChange={(e) => changeHandler(e)}
                value={inputValue}
            />
            <span className={`placeholder ${inputValue.length > 0 && "floating"}`}>
                Search
            </span>
            {inputValue.length > 0 && (
                <span className="material-symbols-outlined erase d-block fs-regular" onClick={eraseHandler}>
                    close
                </span>
            )}
        </div>
    );
};

export default Searchbar;
