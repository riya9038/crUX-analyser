import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import DataTable from "./components/DataTable";
import SummaryStats from "./components/SummaryStats";
import InsightsPanel from "./components/InsightsPanel";
import { fetchCruxData } from "./services/cruxApi";
import "./App.css";

function App() {
  const [urls, setUrls] = useState("");
  const [urlList, setUrlList] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!urls.trim()) {
      setError("Please enter at least one URL");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const urlList = urls.split("\n").filter((url) => url.trim());
      setUrlList(urlList);
      const results = await fetchCruxData(urlList);
      setData(results);
    } catch (err) {
      setError(err.message || "Failed to fetch CrUX data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        mb: 4,
        bgcolor: "#f8f9fa",
        py: 4,
        fontFamily: '"Google Sans", "Roboto", sans-serif',
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: 2,
          p: 3,
          mb: 3,
          boxShadow: 1,
          border: "1px solid #dadce0",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            color: "#1a73e8",
            fontWeight: 500,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          Chrome UX Report Analyzer
        </Typography>
      </Box>

      <Box
        sx={{
          bgcolor: "white",
          borderRadius: 2,
          p: 3,
          mb: 3,
          boxShadow: 1,
          border: "1px solid #dadce0",
        }}
      >
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          label="Enter URLs (one per line)"
          inputProps={{
            placeholder:
              "For example:\nhttps://www.google.com\nhttps://www.example.org",
          }}
          value={urls}
          onChange={(e) => setUrls(e.target.value)}
          sx={{ mb: 2 }}
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={loading}
          startIcon={loading ? <CircularProgress size={20} /> : null}
        >
          {loading ? "Fetching Data..." : "Get CrUX Data"}
        </Button>
      </Box>

      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      {data.length > 0 && (
        <>
          {urlList.length > 1 && <SummaryStats data={data} />}
          <InsightsPanel data={data} />
          <DataTable data={data} />
        </>
      )}
    </Container>
  );
}

export default App;
