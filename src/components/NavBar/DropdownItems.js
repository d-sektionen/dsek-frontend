import DropdownNavButton from './DropdownNavButton.js';

function DropdownItems(props) {
    return (
        <div className="dropdown-items" style={{display:props.displayType}}>
            {props.items && props.items.map((t, i) =>
                <DropdownNavButton key={i} title={t[0]} link={t[1]} icon={t[2]}/>
            )}
        </div>
    );
}

export default DropdownItems;