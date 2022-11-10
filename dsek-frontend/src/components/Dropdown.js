import '../css/Nav.css'; 
import { useState } from 'react';
import { DropdownButton } from './DropdownButton.js';

function Dropdown(props) {

    const [ display, setDisplay ] = useState( 'none' )

    function handleClick() {

        if ( display == 'none' ) {

            setDisplay( 'block' )

        } else {

            setDisplay( 'none' )

        }

    }

    return (
        <div>
            <nav onClick={handleClick} className="Dropdown NavButton">
                <DropdownButton content={props.content} />
            </nav>
            <div style={{display:display}}>
                {props.children}
            </div>
        </div>
    )
}

export {Dropdown}