import '../css/Nav.css'; 
import { useState } from 'react';
import DropdownButton from './DropdownButton.js';

function Dropdown(props) {

    const [ display, setDisplay ] = useState( 'none' )

    function handleHover() {
        setDisplay( 'block' )
    }

    function handleLeave() {
        setDisplay( 'none' )
    }

    function handleClick() {
        if (display === 'none') {
            handleHover();
        } else {
            handleLeave();
        }
    }

    return (
        <div>
            <div className='wide-nav'>
                <div onMouseLeave={handleLeave}>
                    <nav onMouseEnter={handleHover} className="Dropdown NavButton">
                        <DropdownButton content={props.content} />
                    </nav>
                    <div style={{display:display}}>
                        {props.children}
                    </div>
                </div>
            </div>
            <div className='narrow-nav'>
                <div onClick={handleClick}>
                    <nav className="Dropdown NavButton">
                        <DropdownButton content={props.content} />
                    </nav>
                    <div style={{display:display}}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;