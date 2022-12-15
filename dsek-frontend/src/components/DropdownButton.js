import {FaCaretDown} from 'react-icons/fa';

function DropdownButton(props) {
    var content = props.content;

    return (

        <nav className="DropdownButton">
            <div className='drop'>
                {content }<FaCaretDown/>
            </div>
        </nav>

    )
}
export default DropdownButton;