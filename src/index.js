import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

// ReactDOM.render(
//     <App />,
//     document.getElementById("root")
// )

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
