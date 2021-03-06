import React from "react";

export default function LogoWrapper() {
  return (
    <>
      <div
        style={{ cursor: "pointer", marginRight: 25 }}
        onClick={() => (location.href = "/")}
      >
        <span
          style={{
            fontFamily: "Roboto",
            fontSize: "22px",
            background:
              "linear-gradient(135deg, rgba(32,153,88,1) 0%, rgba(0,141,114,1) 100%)",
            backgroundClip: "text",
            "-webkit-background-clip": "text",
            "-moz-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            "-moz-text-fill-color": "transparent",
          }}
        >
          Nucleoid
        </span>
      </div>
    </>
  );
}
