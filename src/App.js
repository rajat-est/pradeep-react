import { ThemeProvider } from "styled-components";
import "./App.css";
import Route from "./components/Route";
import { Theme } from "./style/button";
// import TransformedSample from "./components/SampleOne";
function App() {
  return (
    <ThemeProvider theme={Theme} >
      <>
        <Route />
        {/* <TransformedSample /> */}
      </>
    </ThemeProvider>
  );
}
export default App;
