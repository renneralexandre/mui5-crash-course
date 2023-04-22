import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import AccessTime from "@mui/icons-material/AccessTime";

import { createTheme, ThemeProvider } from "@mui/material";
import { blue } from "@mui/material/colors";

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

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src="/img/img01.svg" alt="" className="img" />
          <Box padding={0} paddingLeft={1}>
            <Typography variant="subtitle1" component="h2">
              Venha você também
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                5 hours
              </Typography>
            </Box>
            <Box marginTop={3} sx={{ display: "flex", alignItems: "center" }}>
              <Rating name="readOnly" value={3.5} precision={0.5} readOnly size="small" />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                4.5
              </Typography>
              <Typography variant="body1" component="p" marginLeft={1.5}>
                (655 reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h6" marginLeft={0.5}>
                From C $14.50
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
