import {FaSortDown} from 'react-icons/fa';

function DropdownButton({ content, onClick }) {
    return (
        <div className="nav-button dropdown-button" onClick={onClick}>
            {content + " " }<FaSortDown/>
        </div>
    )
}

export default DropdownButton;