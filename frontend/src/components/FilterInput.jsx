import { TextField } from "@mui/material";
import React from "react";

function FilterInput({ name, placeholder, value, handleChange, step }) {
  return (
    <TextField
      placeholder={placeholder}
      name={name}
      type="number"
      value={value}
      onChange={handleChange}
      size="small"
      step={step || 1}
      sx={{
        bgcolor: "white",
        borderRadius: 1,
        "& .MuiInputBase-input::placeholder": {
          color: "black",
          opacity: 1,
        },
      }}
    />
  );
}

export default FilterInput;
