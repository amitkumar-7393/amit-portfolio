import { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("scrolled");
    };
  }, []);

  return null;
}

export default ScrollToTop;
