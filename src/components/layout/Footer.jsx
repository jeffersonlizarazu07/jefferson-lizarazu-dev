import { Box, Container, Stack, Typography, Link } from "@mui/material";
import { SocialLinks } from "./common/SocialLinks";
import { NavLinks } from "./common/NavLinks";

export const Footer = () => {
  const name = "Jefferson Johan Lizarazu Rondon";
  const actualYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
          spacing={2}
        >
          <Box>
            <Typography variant="h6" fontWeight="bold">
              {name}
            </Typography>

            <Typography variant="body2" color="grey.500">
              Desarrollador Full Stack
            </Typography>
          </Box>

          <NavLinks direction="row" spacing={4} />

          <SocialLinks showLabels={false} />
        </Stack>
        <Box pt={1.5}>
          <Typography variant="caption">
            © {actualYear} {name}.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
