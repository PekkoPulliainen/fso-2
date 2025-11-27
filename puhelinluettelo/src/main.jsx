import ReactDOM from "react-dom/client";
import App from "./App";

const numbers = [
  {
    id: "Jonne Jakaja",
    content: "Jonne Jakaja",
    number: "040-1231244",
    important: true,
  },
  {
    id: "Janne Jokija",
    content: "Janne Jokija",
    number: "040-4421321",
    important: false,
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <App numbers={numbers} />
);
