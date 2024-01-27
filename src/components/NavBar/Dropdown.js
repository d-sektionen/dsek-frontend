import { useState } from 'react';
import DropdownButton from './DropdownButton.js';
import DropdownItems from './DropdownItems.js';

function Dropdown({ title, items }) {
    // Dropdown är en dropdownmeny som består av en knapp för att "toggla" om 
    // föremålen, dvs DropdownItems i Dropdownwn som ska visas samt innehåller
    // kategorin för dropdownen (titeln)

    const [narrowDisplay, setNarrowDisplay] = useState("none");

    function handleClick() {
        setNarrowDisplay(narrowDisplay === "block" ?  "none" : "block")
    }

    
    return (
        <>
            <div className="narrow-dropdown dropdown">
                <DropdownButton title={title} onClick={()=>handleClick()} tabIndex="0"/>
                <DropdownItems items={items} displayType={narrowDisplay}></DropdownItems>
            </div>
            <div className="wide-dropdown dropdown">
                <DropdownButton title={title} onClick={()=>handleClick()} tabIndex="0"/>
                <DropdownItems items={items} displayType={narrowDisplay}></DropdownItems>
            </div>
        </>
    );
}

export default Dropdown;
