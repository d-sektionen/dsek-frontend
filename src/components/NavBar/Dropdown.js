import { useState } from "react";
import DropdownButton from "./DropdownButton.js";
import DropdownItems from "./DropdownItems.js";

function Dropdown({ title, items }) {
  // Dropdown är en dropdownmeny som består av en knapp för att "toggla" om
  // föremålen, dvs DropdownItems i Dropdownwn som ska visas samt innehåller
  // kategorin för dropdownen (titeln)

  const [dropdownDisplay, setDropdownDisplay] = useState("none");

  function handleClick() {
    setDropdownDisplay(dropdownDisplay === "block" ? "none" : "block");
  }

  return (
    <>
      <div className="dropdown yes-dropdown">
        <DropdownButton
          title={title}
          onClick={() => handleClick()}
          tabIndex="0"
        />
        <DropdownItems
          items={items}
          displayType={dropdownDisplay}
        ></DropdownItems>
      </div>
    </>
  );
}

export default Dropdown;
