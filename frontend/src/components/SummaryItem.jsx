import { Grid, Typography } from "@mui/material";
import React from "react";

function SummaryItem({ title, stats, unit, fixedValue = 0 }) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <Typography>
        Avg: {stats.avg.toFixed(fixedValue)}
        {unit}
      </Typography>
      <Typography>
        Min: {stats.min.toFixed(fixedValue)}
        {unit}
      </Typography>
      <Typography>
        Max: {stats.max.toFixed(fixedValue)}
        {unit}
      </Typography>
    </Grid>
  );
}

export default SummaryItem;
