import { Box, Container, Stack, Typography, Link } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        py: 6,
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="grey.500">
            © 2024 DEV.FOLIO. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={4}>
            <Link underline="none" color="grey.500">
              Privacy Policy
            </Link>
            <Link underline="none" color="grey.500">
              Terms of Service
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
