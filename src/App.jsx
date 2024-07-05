import { AppUi } from "./AppUi";
import { ContextProvider } from "./Context/Context";
import "./App.css";

function App() {
  return (
    <>
      <ContextProvider>
        <AppUi />
      </ContextProvider>
    </>
  );
}

export default App;
