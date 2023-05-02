import { useState } from 'react';
import '../css/Nav.css';
import DropdownButton from './DropdownButton.js';

function Dropdown(props) {

    const [display, setDisplay] = useState('none')
    const [height, setHeight] = useState('0');

    function handleHover() {
        setDisplay('block')
        setHeight('auto')
    }

    function handleLeave() {
        setDisplay('none')
        setHeight(0)
    }

    function handleClick() {
        if (display === 'none') {
            handleHover();
        } else {
            handleLeave();
        }
    }

    return (
        <>
            <div className='wide-nav' onMouseLeave={handleLeave}>
                <nav onMouseEnter={handleHover} className="Dropdown NavButton">
                    <DropdownButton content={props.content} />
                </nav>
                <div style={{ display: display, height: height }}>
                    {props.children}
                </div>
            </div>
            <div className='narrow-nav'>
                <nav onClick={handleClick} className="Dropdown NavButton">
                    <DropdownButton content={props.content} />
                </nav>
                <div style={{ display: display }}>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Dropdown;