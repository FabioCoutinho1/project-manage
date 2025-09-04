import "./App.css";
import { RouterProvider } from "react-router/dom";
import router from "./components/routers/Router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
