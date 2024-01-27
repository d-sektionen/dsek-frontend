import {FaSortDown} from 'react-icons/fa';

function DropdownButton({ title, onClick, tabIndex}) {
    return (
        <div className={"nav-button dropdown-button"} onClick={onClick} tabIndex={tabIndex}>
            {title + " " }<FaSortDown/>
        </div>
    )
}

export default DropdownButton;
