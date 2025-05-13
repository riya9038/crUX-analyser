import React from "react";
import { Typography, Paper, Grid } from "@mui/material";

const SummaryStats = ({ data }) => {
  let values = null;
  const calculateStats = (metric) => {
    if (metric === "cumulative_layout_shift") {
      values = data
        .map((item) => Number(item[metric]?.percentiles.p75))
        .filter((val) => val !== undefined);
    } else {
      values = data
        .map((item) => item[metric]?.percentiles.p75)
        .filter((val) => val !== undefined);
    }
    if (values.length === 0) return { avg: 0, min: 0, max: 0 };

    const sum = values.reduce((a, b) => a + b, 0);
    const avg = sum / values.length;
    const min = Math.min(...values);
    const max = Math.max(...values);

    return { avg, min, max };
  };

  const fcpStats = calculateStats("first_contentful_paint");
  const lcpStats = calculateStats("largest_contentful_paint");
  const inpStats = calculateStats("interaction_to_next_paint");
  const clsStats = calculateStats("cumulative_layout_shift");

  return (
    <Paper sx={{ p: 2, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Summary Statistics
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle2">
            First Contentful Paint (FCP)
          </Typography>
          <Typography>Avg: {fcpStats.avg.toFixed(0)}ms</Typography>
          <Typography>Min: {fcpStats.min.toFixed(0)}ms</Typography>
          <Typography>Max: {fcpStats.max.toFixed(0)}ms</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle2">
            Largest Contentful Paint (LCP)
          </Typography>
          <Typography>Avg: {lcpStats.avg.toFixed(0)}ms</Typography>
          <Typography>Min: {lcpStats.min.toFixed(0)}ms</Typography>
          <Typography>Max: {lcpStats.max.toFixed(0)}ms</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle2">
            Interaction To Next Paint(INP)
          </Typography>
          <Typography>Avg: {inpStats.avg.toFixed(0)}ms</Typography>
          <Typography>Min: {inpStats.min.toFixed(0)}ms</Typography>
          <Typography>Max: {inpStats.max.toFixed(0)}ms</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle2">
            Cumulative Layout Shift (CLS)
          </Typography>
          <Typography>Avg: {clsStats.avg.toFixed(2)}</Typography>
          <Typography>Min: {clsStats.min.toFixed(2)}</Typography>
          <Typography>Max: {clsStats.max.toFixed(2)}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SummaryStats;
