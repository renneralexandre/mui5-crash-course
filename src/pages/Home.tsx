import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "../App.css";
import TourCard from "../components/TourCard";
import cities from "../data.json";
import { Typography } from "@mui/material";

const Home = () => (
  <div className="App">
    <Container sx={{ marginY: 5 }}>
      {cities.map((city, index) => (
        <div key={index}>
          <Typography variant="h4" component="h2" marginTop={5} marginBottom={3}>
            Top {city.name} Tours
          </Typography>
          <Grid container spacing={1}>
            {city.tours.map((t, index) => (
              <TourCard tour={t} key={index} />
            ))}
          </Grid>
        </div>
      ))}
    </Container>
  </div>
);

export default Home;
