import { Box, Typography, Stack, Button } from "@mui/material";

export const HeaderSection = () => {
  return (
    <Box maxWidth={600} mb={8} marginTop={6}>
      <Typography variant="h3" fontWeight={700} gutterBottom>
        Selected{" "}
        <Box component="span" color="primary.main">
          Works
        </Box>
      </Typography>
      <Typography color="grey.400">
        A collection of projects focused on performance, accessibility and user
        experience.
      </Typography>

      {/* FILTER BUTTONS */}
      <Stack direction="row" spacing={2} flexWrap="wrap" mb={8}>
        <Button variant="contained">All Projects</Button>
        <Button variant="outlined">Web Apps</Button>
        <Button variant="outlined">Mobile</Button>
        <Button variant="outlined">UI Components</Button>
      </Stack>
    </Box>
  );
};
