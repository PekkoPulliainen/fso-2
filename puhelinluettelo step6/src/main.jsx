import ReactDOM from "react-dom/client";
import App from "./App";

const numbers = [];

ReactDOM.createRoot(document.getElementById("root")).render(
  <App numbers={numbers} />
);
