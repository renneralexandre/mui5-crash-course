import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import AccessTime from "@mui/icons-material/AccessTime";

import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body1",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 9,
          },
        },
        {
          props: {
            variant: "h6",
          },
          style: {
            fontSize: 16,
          },
        },
      ],
    },
  },
});

export interface Tour {
  id: number;
  name: string;
  duration: number;
  rating: number;
  numberOfReviews: number;
  price: number;
  image: string;
}

const TourCard = (props: { tour: Tour }): JSX.Element => {
  return (
    <Grid item xs={3} key="{props.tour.id}">
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src={props.tour.image} alt="" className="img" />
          <Box padding={0} paddingLeft={1}>
            <Typography variant="subtitle1" component="h2">
              {props.tour.name}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {props.tour.duration} hours
              </Typography>
            </Box>
            <Box marginTop={3} sx={{ display: "flex", alignItems: "center" }}>
              <Rating name="readOnly" value={props.tour.rating} precision={0.5} readOnly size="small" />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {props.tour.rating}
              </Typography>
              <Typography variant="body1" component="p" marginLeft={1.5}>
                ({props.tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h6" marginLeft={0.5}>
                From C ${props.tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
