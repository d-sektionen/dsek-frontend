import { useState } from 'react';
import DropdownButton from './DropdownButton.js';
import DropdownItems from './DropdownItems.js';

function Dropdown({ title, items }) {
    const [narrowDisplay, setNarrowDisplay] = useState("none");
    const [wideDisplay, setWideDisplay] = useState("");

    function handleClick() {
        setNarrowDisplay(narrowDisplay === "block" ?  "none" : "block")
    }
    function handleWide() {
        setWideDisplay( wideDisplay === "block" ?  "none" : "block")
    }

    
    return (
        <>
            <div className="narrow-dropdown dropdown">
                <DropdownButton title={title} onClick={()=>handleClick()} tabIndex="0"/>
                <DropdownItems items={items} displayType={narrowDisplay}></DropdownItems>
            </div>
            <div className="wide-dropdown dropdown">
                <DropdownButton title={title} onClick={()=>handleWide()} tabIndex="0"/>
                <DropdownItems items={items} displayType={wideDisplay}></DropdownItems>
            </div>
        </>
    );
}

export default Dropdown;
