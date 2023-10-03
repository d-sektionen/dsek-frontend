import DropdownNavButton from './DropdownNavButton.js';
import '../css/Nav.css';

function DropdownElements(props) {
    return (
        <div className="dropdown-elements" onClick={props.setState}>
            {
                props.titles ?
                    props.titles.map((t, i) =>
                        <DropdownNavButton key={i} title={t[0]} link={t[1]} icon={t[2]}/>
                    )
                    :
                    <></>
            }
        </div>
    );
}

export default DropdownElements;