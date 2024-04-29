import { FC } from "react";
import './Pagination.styles.css';

type PaginationProps = {
    totalPages: number;
};

const Pagination: FC<PaginationProps> = ({ totalPages }) => {
    // const [currentPage, setCurrentPage] = useState('0');

    // i may add the functionality later

    return (
        <div className="Pagination d-flex flex-center">
            {/* <span className="material-symbols-outlined white flex-center">chevron_left</span> */}
            <ul className="d-flex align-center gap-5 white">
                <li className="active">1</li>
                <li>2</li>
                <li>3</li>
                <input type="number" placeholder="..."/>
                <li>11</li>
            </ul>
            <span className="material-symbols-outlined white flex-center">chevron_right</span>
        </div>
    );
};

export default Pagination;
