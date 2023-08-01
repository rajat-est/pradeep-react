import { ThemeProvider } from "styled-components";
import "./App.css";
import Route from "./components/Route";
import { Theme } from "./style/button";
function App() {
  return (
    <ThemeProvider theme={Theme} >
      <>
        <Route />
      </>
    </ThemeProvider>
  );
}
export default App;
