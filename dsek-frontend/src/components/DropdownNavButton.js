import NavButton from './NavButton.js';
import '../css/Nav.css';

function DropdownNavButton(props) {
    return (
        <>
            <span className="DropdownNavButtonComponent">
                <NavButton title={props.title + " ⯆"} link={props.link}/>
                <nav className="DropdownNavButton">
                    <div className="Dropdown-Buttons">
                        {   
                            props.titles ?
                            props.titles.map((t, i) =>
                                <NavButton key={i} title={t[0]} link={t[1]}/>
                            )
                            :
                            <></>
                        }
                    </div>
                </nav>
            </span>
        </>
    );
}

export default DropdownNavButton;