import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/AlternateEmail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NorthEastIcon from "@mui/icons-material/NorthEast";

export const ContactPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: 10,
        position: "relative",
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      {/* Watermark */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.03,
          fontSize: "12rem",
          fontWeight: 800,
          transform: "rotate(12deg)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        {"<CONTACT />"}
      </Box>

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={10} alignItems="center">
          <Grid size={{ xs: 12, lg: 7 }}>
            <ContactForm />
          </Grid>

          <Grid size={{ xs: 12, lg: 5 }}>
            <ContactSidebar />
          </Grid>
        </Grid>
      </Container>

      {/* Background Glow */}
      <Box
        sx={{
          position: "fixed",
          top: "10%",
          left: "5%",
          width: 300,
          height: 300,
          bgcolor: "primary.main",
          opacity: 0.05,
          borderRadius: "50%",
          filter: "blur(120px)",
          zIndex: -1,
        }}
      />
    </Box>
  );
};

// Contact Form

const ContactForm = () => {
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

        <Typography color="text.secondary" mt={2} maxWidth={500}>
          Have a project in mind or just want to say hi? My inbox is always
          open.
        </Typography>
      </Box>

      <Box component="form">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <NeonField label="Your Name" />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <NeonField label="Email Address" type="email" />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <NeonField label="Subject" />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <NeonField
              label="Tell me about your project..."
              multiline
              rows={5}
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

// Campo Neon

const NeonField = ({
  label,
  multiline = false,
  rows = 1,
  type = "text",
}: any) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      multiline={multiline}
      rows={rows}
      type={type}
      sx={{
        "& .MuiOutlinedInput-root": {
          transition: "0.3s",
          "& fieldset": {
            borderColor: "divider",
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

// Glass Button

const GlassButton = () => {
  return (
    <Button
      type="submit"
      endIcon={<SendIcon />}
      sx={{
        px: 6,
        py: 2,
        borderRadius: 3,
        fontWeight: 600,
        color: "primary.main",
        background: "rgba(43,108,238,0.1)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(43,108,238,0.2)",
        transition: "0.3s",
        "&:hover": {
          bgcolor: "primary.main",
          color: "white",
        },
      }}
    >
      Send Message
    </Button>
  );
};

// Sidebar

const ContactSidebar = () => {
  return (
    <Stack spacing={8}>
      <DirectContact />
      <SocialChannels />
      <MiniMap />
    </Stack>
  );
};

// Direct Contact

const DirectContact = () => {
  return (
    <Stack spacing={4}>
      <Typography variant="h6" fontWeight={700}>
        Direct Contact
      </Typography>

      <Stack spacing={3}>
        <ContactItem
          icon={<EmailIcon />}
          title="Email Me"
          value="hello@developer.com"
        />

        <ContactItem
          icon={<LocationOnIcon />}
          title="Location"
          value="Remote / San Francisco, CA"
        />
      </Stack>
    </Stack>
  );
};

// Contact Item Reutilizable

const ContactItem = ({ icon, title, value }: any) => {
  return (
    <Stack
      direction="row"
      spacing={3}
      alignItems="center"
      sx={{
        p: 2,
        borderRadius: 2,
        transition: "0.3s",
        "&:hover": {
          bgcolor: "action.hover",
        },
      }}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: 2,
          bgcolor: "primary.main",
          opacity: 0.1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "primary.main",
        }}
      >
        {icon}
      </Box>

      <Box>
        <Typography variant="caption" color="text.secondary">
          {title}
        </Typography>
        <Typography fontWeight={600}>{value}</Typography>
      </Box>
    </Stack>
  );
};

// Social Channels

const SocialChannels = () => {
  const socials = ["LinkedIn", "GitHub", "Twitter / X"];

  return (
    <Stack spacing={3}>
      <Typography variant="h6" fontWeight={700}>
        Social Channels
      </Typography>

      {socials.map((name, index) => (
        <Card
          key={index}
          sx={{
            p: 2,
            border: "1px solid",
            borderColor: "divider",
            transition: "0.3s",
            "&:hover": {
              transform: "translateX(8px)",
              borderColor: "primary.main",
            },
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography fontWeight={500}>{name}</Typography>
            <NorthEastIcon sx={{ opacity: 0.5 }} />
          </Stack>
        </Card>
      ))}
    </Stack>
  );
};

// Mini-map

const MiniMap = () => {
  return (
    <Box
      sx={{
        height: 120,
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
        border: "1px solid",
        borderColor: "divider",
        filter: "grayscale(100%)",
        transition: "0.4s",
        "&:hover": {
          filter: "grayscale(0%)",
        },
      }}
    >
      <Box
        component="img"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAWafgX0XvzYy-jFumXDtEPx5ocBxwbYsrvolrmBAVP0408rhujOl8b8o7DSl8tSqybLPAh6KP46NYj6v9lC7XNCY3qEZXGGzhwnIdfRZrBH8zftRYtlUYsXi4JA06HoYJI2FjTy6XzmftskKHtY0VJgY0hhgDr2oZx9oHVeFPwCbya6XN-vMbY91U7XF__yZ2J4iZHhDHKjtrxp85SP-hLY09yIGxGv5kBb5aLfqEu5uOO5NwJ5XyJbrX5xkEntq0cM5VtLqYToo"
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "primary.main",
          opacity: 0.2,
        }}
      />
    </Box>
  );
};
