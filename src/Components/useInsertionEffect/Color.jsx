import { useState, useInsertionEffect } from "react";

export const Color = () => {
  const [theme, setTheme] = useState("dark");

  useInsertionEffect(() => {
    const { color, bgColor } = getsColorsFor(theme);
    let styleRule = null;
    if (color !== buttonColor || bgColor !== buttonBgColor) {
      buttonColor = color;
      buttonBgColor = bgColor;
      styleRule = getStyleRule();
      document.head.appendChild(styleRule);
    }

    return () => {
      if (!styleRule) {
        return;
      }
      document.head.removeChild(styleRule);
    };
  }, [theme]);

  const onThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button onClick={onThemeChange} className="theme-button">
      Change my theme
    </button>
  );
};

let buttonColor = "";
let buttonBgColor = "";

const getStyleRule = () => {
  const styleElement = document.createElement("style");
  const rule = `
    .theme-button {
      color: ${buttonColor};
      background-color: ${buttonBgColor};
      padding: 1rem;
      border: 1px solid black;
      border-radius: 0.25rem;
      cursor: pointer;
      margin: auto;
  `;
  styleElement.innerHTML = rule;
  return styleElement;
};

const getsColorsFor = (theme) => {
  if (theme === "light") {
    return { color: "black", bgColor: "white" };
  }
  return { color: "white", bgColor: "black" };
};
