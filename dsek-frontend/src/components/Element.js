import NavButton from './NavButton.js';
import '../css/Nav.css';

function Element(props) {
    var content = props.name
    return (
        <div>
            {/* <div>
                {content}
            </div> */}
            <div className="Dropdown-Buttons">
                {   
                    props.titles ?
                    props.titles.map((t, i) =>
                        <NavButton key={i} title={t[0]} link={t[1]}/>
                    )
                    :
                    <></>
                }
            </div>
        </div>
            // {/* <nav className="DropdownNavButton"> */}
            //     {/* <div className="Dropdown-Buttons">
            //         {   
            //             props.titles ?
            //             props.titles.map((t, i) =>
            //                 <NavButton key={i} title={t[0]} link={t[1]}/>
            //             )
            //             :
            //             <></>
            //         }
            //     </div> */}
            // {/* </nav> */}
    );
}

export default Element;