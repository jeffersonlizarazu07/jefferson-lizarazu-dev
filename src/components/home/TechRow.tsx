import { Box, Container, Stack, Typography } from "@mui/material";

export const TechRow = () => {
  return (
    <Box
      sx={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        py: 10,
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={8}
          justifyContent="space-between"
          flexWrap="wrap"
          sx={{ opacity: 0.5 }}
        >
          <Typography variant="h6">REACT</Typography>
          <Typography variant="h6">NEXT.JS</Typography>
          <Typography variant="h6">SUPABASE</Typography>
          <Typography variant="h6">TAILWIND</Typography>
          <Typography variant="h6">VERCEL</Typography>
        </Stack>
      </Container>
    </Box>
  );
};
