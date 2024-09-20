import {FaSortDown} from 'react-icons/fa';

function DropdownButton({ title, onClick, tabIndex}) {
    // knapp som visar dropdownkategori och "togglar" dropdown (om den visas eller göms)
    return (
        <div className={"nav-button dropdown-button"} onClick={onClick} tabIndex={tabIndex}>
            {title + " " }<FaSortDown/>
        </div>
    )
}

export default DropdownButton;
