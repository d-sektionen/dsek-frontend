import {FaSortDown} from 'react-icons/fa';

function DropdownButton(props) {
    var content = props.content;

    return (

        <nav className="DropdownButton">
                {content + " " }<FaSortDown/>
        </nav>

    )
}
export default DropdownButton;