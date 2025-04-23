import "../css/BackToTop.css";
import { useState, useEffect } from "react";

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          ^ {/*upward arrow*/}
        </button>
      )}
    </>
  );
}

export { BackToTop };
