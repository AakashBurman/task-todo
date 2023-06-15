import React from "react";

type TACustomButton = {
  title: string;
  mode?: "green" | "blue" | "black" | "red";
  onClick?: () => void;
};
function CustomButton({ title, mode = "black", onClick }: TACustomButton) {
  return (
    <button
      onClick={onClick}
      style={{
        color: mode,
        height: "35px",
        width: "100px",
        fontSize: "12px",
        border: `1px solid ${mode} `,
        borderRadius: "7px",
        cursor: "pointer",
        background: "transparent",
      }}
    >
      {title}
    </button>
  );
}

export default CustomButton;
