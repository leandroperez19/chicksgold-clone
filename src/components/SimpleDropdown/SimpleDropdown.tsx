import { FC, useEffect, useRef, useState } from "react"
import './SimpleDropdown.styles.css';
import { parseText } from "../../utils/parseText";

type SimpleDropdownProps = {
    icon: string;
    label: string;
    selected: string;
    options: string[];
    disabled?: boolean;
}

const SimpleDropdown: FC<SimpleDropdownProps> = ({ icon, label, selected, options, disabled = false}) => {
    const [isActive, setIsActive] = useState(false);
    const [selectedOption, setSelectedOption] = useState(selected);

    return (
        <div className={`Simple-dropdown ${parseText(label)} ${disabled && 'disabled'}`}>
            <div className='option-selected d-flex align-center justify-between radius' onClick={() => disabled ? '' : setIsActive(true)}>
                <div className="left d-flex align-center gap-10">
                    <img src={icon} alt="icon" className="icon"/>
                    <div className="text d-flex fd-column h-100 gap-5">
                        <div className="label fs-s">{label}</div>
                        <div className="selected">{selectedOption}</div>
                    </div>
                </div>
                <span className="material-symbols-outlined arrow-down">arrow_drop_down</span>
            </div>
            {isActive && 
            <Options 
                options={options} 
                setIsActive={setIsActive} 
                selectedOption={selectedOption}
                disabled={disabled}
                name={parseText(label) ?? ''}
                setSelectedOption={setSelectedOption}/>}
        </div>
    )
}

type OptionsProps = {
    options: string[];
    setIsActive: (x: boolean) => void;
    selectedOption: string;
    setSelectedOption: (x: string) => void;
    disabled: boolean;
    name: string;
}

const Options: FC<OptionsProps> = ({ options, setIsActive, selectedOption, setSelectedOption, disabled, name }) => {
    const optionsRef = useRef<HTMLDivElement>(null);

    const closeAux = () => {
        optionsRef.current?.classList.add('inactive');
        setTimeout(() => {
            setIsActive(false);
        }, 300)
    }

    const selectHandler = (opt: string) => {
        setSelectedOption(opt);
        closeAux()
    }
    
    useEffect(() => {
        const close = (e: any) => {
            if(e.target.closest('.Options') || e.target.closest(`.${name}`)) return;
            closeAux();
        }
        document.body.addEventListener('click', e => close(e))
        return () => document.body.removeEventListener('click', close);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className="Options radius" ref={optionsRef}>
            {
                options.map((opt, i) => (
                    <div 
                    className={`option ${opt === selectedOption && 'selected'}`} 
                    key={i} 
                    onClick={() => disabled ? '' : selectHandler(opt)}
                    >
                        {opt}
                    </div>
                ))
            }
        </div>
    )
} 

export default SimpleDropdown;
