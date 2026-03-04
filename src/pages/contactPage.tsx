import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  Card,
  Avatar,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/AlternateEmail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RemoveIcon from "@mui/icons-material/Remove";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export const ContactPage = () => {
  return (
    <Box
      sx={{
        bgcolor: "#0B1623",
        color: "white",
        overflowX: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        p: 6,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Header />
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
      ></Box>

      <Container
        maxWidth="xl"
        sx={{ position: "relative", zIndex: 2, marginTop: "6.25rem" }}
      >
        <Grid container spacing={10} alignItems="center" marginBottom="3rem">
          <Grid size={{ xs: 12, lg: 7 }}>
            <ContactForm />
          </Grid>

          <Grid size={{ xs: 12, lg: 5 }}>
            <ContactSidebar />
          </Grid>
        </Grid>
        <Footer />
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

// Campo Neon

const NeonField = ({
  label,
  multiline = false,
  rows = 1,
  type = "text",
  color,
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
        "& .MuiInputLabel-root": { color: color },
        "& .MuiInputLabel-root.Mui-focused": { color: color },
        "& .MuiOutlinedInput-root": {
          transition: "0.3s",
          "& fieldset": {
            borderColor: color || "divider",
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
    </Stack>
  );
};

// Direct Contact

const DirectContact = () => {
  return (
    <Stack spacing={4}>
      <Typography
        variant="h6"
        fontWeight={700}
        sx={{ display: "flex", alignItems: "center", color: "primary.main" }}
      >
        <RemoveIcon sx={{ width: "100px", fontSize: "80px" }} />
        Direct Contact
      </Typography>

      <Stack spacing={3}>
        <ContactItem
          icon={<EmailIcon sx={{ color: "#2b6cee" }} />}
          title="Email Me"
          value="jeffersonlizarazu@hotmail.com"
        />

        <ContactItem
          icon={<LocationOnIcon sx={{ color: "#2b6cee" }} />}
          title="Location"
          value="Bogotá D.C, Colombia"
        />
      </Stack>
    </Stack>
  );
};

// Contact Item Reutilizable

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  titleColor?: string;
  valueColor?: string;
}

const ContactItem = ({
  icon,
  title,
  value,
  titleColor = "#64748b",
  valueColor = "#ffffff",
}: ContactItemProps) => {
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
          bgcolor: "#1e293b",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "primary.main",
        }}
      >
        {icon}
      </Box>

      <Box>
        <Typography variant="caption" color="#64748b" fontSize="15px">
          {title}
        </Typography>
        <Typography fontWeight={600}>{value}</Typography>
      </Box>
    </Stack>
  );
};

// Social Channels

const SocialChannels = () => {
  const socialsAndIcons = [
    { name: "Linledin", Icon: LinkedInIcon },
    { name: "GitHub", Icon: GitHubIcon },
  ];

  return (
    <Stack spacing={3}>
      <Typography
        variant="h6"
        fontWeight={900}
        sx={{ display: "flex", alignItems: "center", color: "primary.main" }}
      >
        <RemoveIcon sx={{ width: "100px", fontSize: "80px" }} />
        Social Channels
      </Typography>
      {socialsAndIcons.map((item, index) => {
        const { Icon, name } = item;
        return (
          <Card
            key={index}
            sx={{
              p: 2,
              border: "1px solid",
              borderRadius: 2,
              borderColor: "#94a3b8",
              transition: "0.3s",
              bgcolor: "#0B1623",

              "&:hover": {
                transform: "translateX(8px)",
                borderColor: "primary.main",
              },
            }}
          >
            <Stack direction="row" justifyContent="space-between">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  gap: 2,
                }}
              >
                <Avatar
                  variant="rounded"
                  sx={{
                    backgroundColor: "#1e293b",
                    padding: "1px",
                    width: 45,
                    height: 45,
                    transition: "0.3s",
                  }}
                >
                  <Icon
                    sx={{ color: "#94a3b8", fontSize: "2rem", boxShadow: 5 }}
                  />
                </Avatar>
                <Typography fontWeight={500} color="#ffffff">
                  {name}
                </Typography>
              </Box>
            </Stack>
          </Card>
        );
      })}
    </Stack>
  );
};
