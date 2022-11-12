

function DropdownButton(props) {
    var content = props.content;

    var handleClick = props.onClick;

    return (

        <nav className="DropdownButton">

            <div className="">

                { content  + " ⯆" }

            </div>

        </nav>

    )
}
export default DropdownButton;