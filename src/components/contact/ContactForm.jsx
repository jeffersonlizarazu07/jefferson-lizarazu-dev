import { Box, Typography, Grid, Stack } from "@mui/material";
import { NeonField } from "./NeonField";
import { GlassButton } from "./GlassButton";

export const ContactForm = () => {
  return (
    <Stack spacing={6}>
      <Box>
        <Typography
          sx={{
            color: "primary.main",
            fontWeight: 600,
            letterSpacing: 3,
            textTransform: "uppercase",
            fontSize: 14,
          }}
        >
          Connect
        </Typography>

        <Typography variant="h3" fontWeight={800} mt={2}>
          Let's build something{" "}
          <Box component="span" color="primary.main">
            extraordinary
          </Box>
          .
        </Typography>

        <Typography color="#94a3b8" mt={2} maxWidth={500}>
          Have a project in mind or just want to say hi? My inbox is always
          open.
        </Typography>
      </Box>

      <Box component="form">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <NeonField label="Your Name" color="#94a3b8" />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <NeonField label="Email Address" type="email" color="#94a3b8" />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <NeonField label="Subject" color="#94a3b8" />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <NeonField
              label="Tell me about your project..."
              multiline
              rows={5}
              color="#94a3b8"
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <GlassButton />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};
