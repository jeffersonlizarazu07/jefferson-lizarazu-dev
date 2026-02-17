import { Button, Box } from "@mui/material";

export const ProjectsButton = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Button
        variant="contained"
        sx={{
          mt: 5,
          py: 1.6,
          borderRadius: 3,
          textTransform: "none",
          fontSize: 16,
          width: "25%"
        }}
      >
        Ver mis proyectos →
      </Button>
    </Box>
  );
};
