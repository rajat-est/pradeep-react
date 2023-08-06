import { ThemeProvider } from "styled-components";
import "./App.css";
import Route from "./components/Route";
import { Theme } from "./style/button";
import { ValidationProvider } from "./components/ValidationContext";
// import TransformedSample from "./components/SampleOne";
function App() {
  return (
    <ThemeProvider theme={Theme} >
      <ValidationProvider>
      <>
        <Route />
        {/* <TransformedSample /> */}
      </>
      </ValidationProvider>
    </ThemeProvider>
  );
}
export default App;
