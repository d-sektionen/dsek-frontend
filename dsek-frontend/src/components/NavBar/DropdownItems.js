import DropdownNavButton from './DropdownNavButton.js';

function DropdownItems(props) {
    // konstruerar en div för dropdownen som visar alla objekten i Dropdownen
    return (
        <div className="dropdown-items" style={{display:props.displayType}}>
            {props.items && props.items.map((t, i) =>
                <DropdownNavButton key={i} title={t[0]} link={t[1]} icon={t[2]}/>
            )}
        </div>
    );
}

export default DropdownItems;