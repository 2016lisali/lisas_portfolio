import { useState } from "react";
import { ArrowUp } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

const BackToTopBtn = () => {
  const [showBtn, setShowBtn] = useState("none")
  const scroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setShowBtn("block");
    } else {
      setShowBtn("none");;
    }
  }
  window.onscroll = function () { scroll() };
  const goTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <Button variant="secondary" className={`btp-btn d-${showBtn} position-fixed rounded-circle px-2 py-2`}
      style={{ bottom: "30px", right: "30px" }}>
      <ArrowUp size="25"
        role="button"
        onClick={goTop} />
    </Button>
  )
}

export default BackToTopBtn;