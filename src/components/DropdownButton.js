import {FaSortDown} from 'react-icons/fa';

function DropdownButton({ content, onClick, tabIndex}) {
    return (
        <div className={"nav-button dropdown-button"} onClick={onClick} tabIndex={tabIndex}>
            {content + " " }<FaSortDown/>
        </div>
    )
}

export default DropdownButton;
