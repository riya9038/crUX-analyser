import React from "react";
import { Typography, Paper, Grid } from "@mui/material";
import SummaryItem from "./SummaryItem";

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
    <Paper sx={{ p: 2, mb: 3, bgcolor: "#f8cf41fa" }}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ bgcolor: "white", p: 1, borderRadius: 2, fontWeight: 700 }}
      >
        Summary Statistics
      </Typography>
      <Grid container spacing={2} sx={{ m: 3 }}>
        {" "}
        <SummaryItem
          title={"First Contentful Paint (FCP)"}
          stats={fcpStats}
          unit={"ms"}
        />
        <SummaryItem
          title={"Largest Contentful Paint (LCP)"}
          stats={lcpStats}
          unit={"ms"}
        />
        <SummaryItem
          title={"Interaction To Next Paint(INP)"}
          stats={inpStats}
          unit={"ms"}
        />
        <SummaryItem
          title={"Cumulative Layout Shift (CLS)"}
          stats={clsStats}
          unit={""}
          fixedValue={2}
        />
      </Grid>
    </Paper>
  );
};

export default SummaryStats;
