import { ThemeProvider } from "styled-components";
import "./App.css";
import Route from "./components/Route";
import { Theme } from "./style/button";
import { ValidationProvider } from "./components/ValidationContext";
import { LoginProvider } from "./components/LoginContext";
// import TransformedSample from "./components/SampleOne";
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <LoginProvider>
        <ValidationProvider>
          <>
            <Route />
            {/* <TransformedSample /> */}
          </>
        </ValidationProvider>
      </LoginProvider>
    </ThemeProvider>
  );
}
export default App;
