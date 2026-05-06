import { Box, Container, Stack, Typography } from "@mui/material";

const TECH_STACK = ["REACT", "EXPRESS", "JAVA", "VITE", "TAILWIND", "VERCEL"];

export const TechRow = () => {
  return (
    <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.1)", py: 10 }}>
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 8 }}
          justifyContent="space-between"
          flexWrap="wrap"
          sx={{ opacity: 0.5 }}
        >
          {TECH_STACK.map((tech) => (
            <Typography key={tech} variant="h6">{tech}</Typography>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
