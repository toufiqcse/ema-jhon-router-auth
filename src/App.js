// @ts-nocheck
import { RouterProvider } from "react-router-dom";
import routes from "../src/router/Router";
import Header from "./pages/shared/Header/Header";

// @ts-nocheck
function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
