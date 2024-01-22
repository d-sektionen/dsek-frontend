import { useState } from 'react';

import '../css/Nav.css';
import DropdownButton from './DropdownButton.js';

function Dropdown({ content, children }) {
    const [narrowDisplay, setNarrowDisplay] = useState("none");
    const [state, setState] = useState("");

    function handleClick() {
        if (narrowDisplay === "block") {
            setNarrowDisplay("none");
        }
        else {
            setNarrowDisplay("block");
        }
    }
    //den här onlcick funktionen är för när man tabbar igenom hemsidan och klickar på en Dropdown i navbaren.
    //då jag inte kom på ett bra sätt att visa "children" vid ett tryck på DropdownButton så ändrar jag classname på WideNav till att ha "open" också
    //sen sköter css samma funktionalitet som att hovra över den.
    function handleWide() {
        if (state === " open") {
            setState("");
        }
        else {
            setState(" open");
        }
    }

    return (
        <>
            <div className="narrow-dropdown">
                <DropdownButton content={content} onClick={()=>handleClick()} tabIndex={"0"}/>
                <div className="dropdown-items" style={{display: narrowDisplay}}>
                    {children}
                </div>
            </div>
            <div className={"wide-dropdown".concat(state)}>
                <DropdownButton content={content} onClick={()=>handleWide()} tabIndex={"0"}/>
                <div className="dropdown-items">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Dropdown;
