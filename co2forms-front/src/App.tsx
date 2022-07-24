import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./contexts/app";
import Routes from "./router/Routes";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Routes />
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
