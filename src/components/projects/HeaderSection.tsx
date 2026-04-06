import { Box, Typography, Stack, Button } from "@mui/material";

export const HeaderSection = () => {
  return (
    <Box maxWidth={600} mb={8} marginTop={6}>
      <Typography variant="h3" fontWeight={700} gutterBottom>
        Mis{" "}
        <Box component="span" color="primary.main">
          proyectos
        </Box>
      </Typography>
      <Typography color="grey.400" marginBottom="2rem">
        A continuación se presentan algunos de los proyectos que he desarrollado
        y en los que he participado, enfocados en el desarrollo de aplicaciones
        web modernas.
      </Typography>

      {/* FILTER BUTTONS */}
      <Stack direction="row" spacing={2} flexWrap="wrap" mb={8}>
        <Button variant="contained">General</Button>
        <Button variant="outlined">Web Apps</Button>
        <Button variant="outlined">Mobile</Button>
        <Button variant="outlined">UI Components</Button>
      </Stack>
    </Box>
  );
};
