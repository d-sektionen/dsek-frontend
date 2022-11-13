

function DropdownButton(props) {
    var content = props.content;

    var handleClick = props.onClick;

    return (

        <nav className="DropdownButton">

            <p>{content  + " ⯆"}</p>

        </nav>

    )
}
export default DropdownButton;