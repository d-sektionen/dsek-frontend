import NavButton from './NavButton.js';
import DropdownNavButton from './DropdownNavButton.js';
import '../css/Nav.css';

function Element(props) {
    return (
        <div>
            <div className="dropdown-elements">
                {   
                    props.titles ?
                    props.titles.map((t, i) =>
                        <DropdownNavButton key={i} title={t[0]} link={t[1]}/>
                    )
                    :
                    <></>
                }
            </div>
        </div>
    );
}

export default Element;