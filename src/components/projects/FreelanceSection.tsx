import { Box, Typography, Stack, Button } from "@mui/material";

export const FreelanceSection = () => {
  return (
    <Box
      textAlign="center"
      mt={20}
      pt={10}
      borderTop="1px solid rgba(255,255,255,0.1)"
    >
      <Typography variant="h4" fontWeight={700} mb={3}>
        ¿Tienes un proyecto en mente?
      </Typography>

      <Typography color="grey.400" maxWidth={600} mx="auto" mb={5}>
        Actualmente me encuentro disponible como desarrollador freelance. Puedo ayudarte a convertir tu idea en una aplicación web funcional y escalable.
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        justifyContent="center"
      >
        <Button variant="contained" size="large">
          Start a Project
        </Button>
        <Button variant="outlined" size="large">
          View Resume
        </Button>
      </Stack>
    </Box>
  );
};
