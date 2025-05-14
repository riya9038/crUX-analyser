import { Grid, Typography } from "@mui/material";
import React from "react";

function SummaryItem({ title, stats }) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <Typography>Avg: {stats.avg.toFixed(0)}ms</Typography>
      <Typography>Min: {stats.min.toFixed(0)}ms</Typography>
      <Typography>Max: {stats.max.toFixed(0)}ms</Typography>
    </Grid>
  );
}

export default SummaryItem;
