import React from "react";

function App() {
  React.useEffect(() => {
    const head = document.head;
    const link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "https://xorb.github.io/design-editor-widget/index.widget.css";
    head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://xorb.github.io/design-editor-widget/index.widget.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      console.log("SCRIPT LOADED");
    };

    return () => {
      // head.removeChild(link);
      // document.removeChild(script);
    };
  }, []);
  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      id="design_editor_widget"
    ></div>
  );
}

export default App;
