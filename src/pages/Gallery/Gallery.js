import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Grid } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNew";

export default function Gallery(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100%" }}
    >
      <Grid item xs={3} sx={{ width: "60%" }}>
        <Carousel
          NextIcon={<ArrowForwardIosIcon />}
          PrevIcon={<ArrowBackIosIcon />}
          style={{ height: "100%" }}
          indicatorIconButtonProps={{
            style: {
              marginTop: "1.5rem", // 1
            },
          }}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
}

function Item(props) {
  return (
    <Paper
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingBottom: "1rem",
      }}
    >
      <h2>{props.item.name}</h2>
      <img src="https://placehold.co/650x400" alt="random" />
    </Paper>
  );
}
