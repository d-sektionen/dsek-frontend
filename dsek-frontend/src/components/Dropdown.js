import { useState } from 'react';

import '../css/Nav.css';
import DropdownButton from './DropdownButton.js';

function Dropdown({ content, children }) {
    const [narrowDisplay, setNarrowDisplay] = useState("none");

    function handleClick() {
        if (narrowDisplay === "block") {
            setNarrowDisplay("none");
        }
        else {
            setNarrowDisplay("block");
        }
    }

    return (
        <>
            <div className="narrow-dropdown">
                <DropdownButton content={content} onClick={handleClick} />
                <div className="dropdown-items" style={{display: narrowDisplay}}>
                    {children}
                </div>
            </div>
            <div className="wide-dropdown">
                <DropdownButton content={content} />
                <div className="dropdown-items">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Dropdown;