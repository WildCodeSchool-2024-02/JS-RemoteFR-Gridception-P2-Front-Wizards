import { useRef, useEffect } from "react";
import customCursorImg from "../assets/wand2.png";

export default function Test1() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const cursor = cursorRef.current;

      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const scrollCursor = () => {
      const cursor = cursorRef.current;

      if (cursor) {
        const scrollTop = window.scrollY;
        cursor.style.transform = `translateY(${scrollTop}px)`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    window.addEventListener("scroll", scrollCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", scrollCursor);
    };
  }, []);

  return (
    <div id="Test1Container" style={{ cursor: "none" }}>
      <img
        ref={cursorRef}
        src={customCursorImg}
        alt="Custom Cursor"
        style={{
          position: "absolute",
          width: "70px",
          height: "70px",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </div>
  );
}
