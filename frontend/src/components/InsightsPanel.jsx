import React from "react";
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Warning, CheckCircle, Info } from "@mui/icons-material";

const InsightsPanel = ({ data }) => {
  const getInsights = () => {
    const insights = [];

    data.forEach((item) => {
      const url = item.url;
      const lcp = item.largest_contentful_paint?.percentiles?.p75;
      const cls = Number(item.cumulative_layout_shift?.percentiles?.p75);

      if (lcp > 4000) {
        insights.push({
          type: "warning",
          text: `${url}: Poor LCP (${lcp.toFixed(
            0
          )}ms). Consider optimizing images, preloading key resources, or implementing a CDN.`,
        });
      }

      if (cls > 0.25) {
        insights.push({
          type: "warning",
          text: `${url}: High CLS (${cls.toFixed(
            2
          )}). Ensure stable layout by reserving space for dynamic content and avoiding late-loading elements.`,
        });
      }

      if (lcp < 2500 && cls < 0.1) {
        insights.push({
          type: "success",
          text: `${url}: Good performance (LCP: ${lcp.toFixed(
            0
          )}ms, CLS: ${cls.toFixed(2)})`,
        });
      }
    });

    if (insights.length === 0) {
      insights.push({
        type: "info",
        text: "No significant performance issues detected. All metrics are within recommended thresholds.",
      });
    }

    return insights;
  };

  const insights = getInsights();

  return (
    <Paper sx={{ p: 2, mb: 3, bgcolor: "#78a010d4" }}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ bgcolor: "white", p: 1, borderRadius: 2, fontWeight: 7 }}
      >
        Performance Insights
      </Typography>
      <List>
        {insights.map((insight, index) => (
          <ListItem key={index}>
            <ListItemIcon sx={{ minWidth: "30px" }}>
              {insight.type === "warning" ? (
                <Warning color="warning" />
              ) : insight.type === "success" ? (
                <CheckCircle color="success" />
              ) : (
                <Info color="info" />
              )}
            </ListItemIcon>
            <ListItemText sx={{ color: "white" }} primary={insight.text} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default InsightsPanel;
