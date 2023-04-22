import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "./App.css";
import TourCard from "./components/TourCard";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Container>
        <Grid container spacing={1}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
