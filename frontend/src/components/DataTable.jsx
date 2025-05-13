import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  TextField,
  Box,
  Typography,
} from "@mui/material";

const metricKeyMap = {
  lcp: "largest_contentful_paint",
  fcp: "first_contentful_paint",
  inp: "interaction_to_next_paint",
  cls: "cumulative_layout_shift",
};

const DataTable = ({ data }) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("url");
  const [filterValues, setFilterValues] = useState({
    fcp: "",
    lcp: "",
    inp: "",
    cls: "",
  });

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterValues((prev) => ({ ...prev, [name]: value }));
  };

  const sortedData = [...data].sort((a, b) => {
    const aValue = a[orderBy]?.percentiles?.p75 || a[orderBy];
    const bValue = b[orderBy]?.percentiles?.p75 || b[orderBy];

    if (aValue < bValue) return order === "asc" ? -1 : 1;
    if (aValue > bValue) return order === "asc" ? 1 : -1;
    return 0;
  });

  const filteredData = sortedData.filter((item) => {
    return Object.entries(filterValues).every(([filterKey, filterValue]) => {
      if (!filterValue) return true;

      const metricKey = metricKeyMap[filterKey];
      const metricValue = item[metricKey]?.percentiles?.p75;

      if (metricValue === undefined) return false;
      return metricValue.toString().includes(filterValue.toString());
    });
  });

  const renderSortableHeader = (id, label) => (
    <TableCell sortDirection={orderBy === id ? order : false}>
      <TableSortLabel
        active={orderBy === id}
        direction={orderBy === id ? order : "asc"}
        onClick={() => handleSort(id)}
      >
        {label}
      </TableSortLabel>
    </TableCell>
  );

  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          label="Filter FCP (ms)"
          name="fcp"
          type="number"
          value={filterValues.fcp}
          onChange={handleFilterChange}
          size="small"
        />
        <TextField
          label="Filter LCP (ms)"
          name="lcp"
          type="number"
          value={filterValues.lcp}
          onChange={handleFilterChange}
          size="small"
        />
        <TextField
          label="Filter INP (ms)"
          name="inp"
          type="number"
          value={filterValues.inp}
          onChange={handleFilterChange}
          size="small"
        />
        <TextField
          label="Filter CLS"
          name="cls"
          type="number"
          value={filterValues.cls}
          onChange={handleFilterChange}
          size="small"
          step="0.01"
        />
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {renderSortableHeader("url", "URL")}
              {renderSortableHeader("first_contentful_paint", "FCP (ms)")}
              {renderSortableHeader("largest_contentful_paint", "LCP (ms)")}
              {renderSortableHeader("interaction_to_next_paint", "INP (ms)")}
              {renderSortableHeader("cumulative_layout_shift", "CLS")}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.url}</TableCell>
                  <TableCell>
                    {row.first_contentful_paint?.percentiles.p75?.toFixed(0)}
                  </TableCell>
                  <TableCell>
                    {row.largest_contentful_paint?.percentiles.p75?.toFixed(0)}
                  </TableCell>
                  <TableCell>
                    {row.interaction_to_next_paint?.percentiles.p75?.toFixed(0)}
                  </TableCell>
                  <TableCell>
                    {Number(
                      row.cumulative_layout_shift?.percentiles.p75
                    )?.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ py: 4 }}>
                  <Typography variant="body1" color="textSecondary">
                    No data found matching your filters
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DataTable;
