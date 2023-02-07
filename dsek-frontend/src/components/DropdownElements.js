import NavButton from './NavButton.js';
import DropdownNavButton from './DropdownNavButton.js';
import '../css/Nav.css';

function DropdownElements(props) {
    return (
        <div className="dropdown-elements">
            {
                props.titles ?
                    props.titles.map((t, i) =>
                        <DropdownNavButton key={i} title={t[0]} link={t[1]} />
                    )
                    :
                    <></>
            }
        </div>
    );
}

export default DropdownElements;