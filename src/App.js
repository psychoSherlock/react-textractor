import Nav from "./components/Navbar";
import Main from "./components/Upload";
import { SnackbarProvider } from "notistack";
import Slide from "@mui/material/Slide";

function App() {
  return (
    <div className="App">
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        TransitionComponent={Slide}
        autoHideDuration={3000}
      >
        <Nav />
        <Main />
      </SnackbarProvider>
    </div>
  );
}

export default App;
