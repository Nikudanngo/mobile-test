import { Box, Grid } from "@mui/material";
import React from "react";
import "./App.css";
import { FoodCard } from "./FoodCard";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      {/* {[...Array(100)].map((_, i) => (
        <FoodCard />
      ))} */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </Grid>
      </Box>
    </div>
  );
}

export default App;
