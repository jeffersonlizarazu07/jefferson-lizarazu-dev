import { TextField } from "@mui/material";

export const NeonField = ({
  label,
  multiline = false,
  rows = 1,
  type = "text",
  color,
}) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      multiline={multiline}
      rows={rows}
      type={type}
      sx={{
        "& .MuiInputLabel-root": { color: color },
        "& .MuiInputLabel-root.Mui-focused": { color: color },
        "& .MuiOutlinedInput-root": {
          transition: "0.3s",
          "& fieldset": {
            borderColor: color || "divider",
          },
          "&:hover fieldset": {
            borderColor: "primary.main",
          },
          "&.Mui-focused fieldset": {
            borderColor: "primary.main",
            boxShadow: "0 0 10px rgba(43,108,238,0.4)",
          },
        },
      }}
    />
  );
};
