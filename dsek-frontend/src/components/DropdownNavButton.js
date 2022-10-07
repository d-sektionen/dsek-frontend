import NavButton from './NavButton.js';
import '../css/Nav.css';

function DropdownNavButton(props) {
    return (
        <>
            <span className="TEST">
                <NavButton title={props.title + " ⯆"} link={props.link}/>
                <nav className="DropdownNavButton">
                    <div className="Dropdown-Buttons">
                        {   
                            props.titles ?
                            props.titles.map((t) =>
                                <NavButton title={t} link="#"/>
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