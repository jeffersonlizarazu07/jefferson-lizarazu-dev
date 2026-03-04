import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  Chip,
  Card,
  CardContent,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import HubIcon from "@mui/icons-material/Hub";
import LayersIcon from "@mui/icons-material/Layers";
import ReactIcon from "../assets/react.svg?react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/Footer";

export const AboutPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 12,
        position: "relative",
        overflow: "hidden",
        bgcolor: "#0B1623",
        color: "white",
        overflowX: "hidden",
      }}
    >
      {/* Glow Orbs */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          left: -100,
          width: 400,
          height: 400,
          bgcolor: "primary.main",
          opacity: 0.08,
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      />
      <Header />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: -100,
          width: 300,
          height: 300,
          bgcolor: "primary.main",
          opacity: 0.05,
          filter: "blur(100px)",
          borderRadius: "50%",
        }}
      />

      <Container maxWidth="xl">
        <AboutSection />
        <TechSection />
      </Container>
    </Box>
  );
};

// About Section

const AboutSection = () => {
  return (
    <Grid container spacing={10} alignItems="center" mb={20}>
      {/* Image */}
      <Grid size={{ xs: 12, lg: 5 }}>
        <Box sx={{ position: "relative", maxWidth: 400, mx: "auto" }}>
          <Box
            component="img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiOjaym-ny1MDTnxPAGmTry3G2Dh5WoUS9t0rlQb_4dlfzgrd3IN0fIoJtsEbtvlu9h-89J-y_5pgIvwQ_Nmuo5Q6soLj1611l8IjtsMxwCfNIE9KsTaUid48hmyj39sTFHMx7wbzRGEDfoZgQVdvgW1v1EjgeHgTyjTjd3HpCNgs5l04zRVom2UYx0BrFl4C81VbB6_MVmgbsujQxR3Fe-3TyY97iZZADbiK3yo_rC7Md20YrS40r8FkzAMloigpbrxozUfSbqg4"
            sx={{
              width: "100%",
              borderRadius: 3,
              objectFit: "cover",
              filter: "grayscale(100%)",
              transition: "0.6s",
              "&:hover": {
                filter: "grayscale(0%)",
              },
            }}
          />

          {/* Experience Badge */}
          <Box
            sx={{
              position: "absolute",
              bottom: -20,
              right: -20,
              bgcolor: "primary.main",
              color: "white",
              p: 3,
              borderRadius: 3,
              textAlign: "center",
              boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
            }}
          >
            <Typography variant="h4" fontWeight={800}>
              8+
            </Typography>
            <Typography variant="caption" sx={{ letterSpacing: 2 }}>
              YEARS EXP
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* Content */}
      <Grid size={{ xs: 12, lg: 7 }}>
        <Stack spacing={5}>
          <Chip
            label="About me"
            sx={{
              bgcolor: "primary.main",
              color: "white",
              width: "fit-content",
              fontWeight: 700,
            }}
          />

          <Typography variant="h3" fontWeight={800}>
            Building digital experiences with{" "}
            <Box component="span" color="primary.main">
              precision.
            </Box>
          </Typography>

          <Typography color="#ffffff" fontSize={18}>
            I am a Senior Full-Stack Developer passionate about crafting
            high-performance web applications that merge elegant design with
            robust engineering.
          </Typography>

          <Typography color="#ffffff" fontSize={18}>
            I focus on user experience and scalable architecture. Modern
            software should work flawlessly and feel intuitive.
          </Typography>

          <Stack direction="row" spacing={3} flexWrap="wrap">
            <Button
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
            >
              Download CV
            </Button>

            <Button variant="outlined" size="large">
              Get in touch
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

// Tech Section
const techStack = [
  { name: "React", icon: <ReactIcon /> },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: <SettingsInputComponentIcon /> },
  { name: "GraphQL", icon: <HubIcon /> },
  { name: "Next.js", icon: "NX" },
  { name: "Docker", icon: <LayersIcon /> },
];

const TechSection = () => {
  return (
    <Box>
      <Stack spacing={10}>
        {/* Header */}
        <Stack direction="row" alignItems="center" spacing={4}>
          <Box>
            <Typography variant="h4" fontWeight={800}>
              My Ecosystem
            </Typography>
            <Typography color="#ffffff" maxWidth={500}>
              I specialize in modern JavaScript ecosystems and cloud-native
              architectures.
            </Typography>
          </Box>
        </Stack>

        {/* Tech Grid */}
        <Grid container spacing={4}>
          {techStack.map((tech, index) => (
            <Grid size={{ xs: 6, md: 4, lg: 2 }} key={index}>
              <Card
                sx={{
                  backgroundColor: "#16223a",
                  p: 4,
                  textAlign: "center",
                  transition: "0.3s",
                  border: "1px solid",
                  borderColor: "divider",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    borderColor: "primary.main",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      mb: 2,
                      fontSize: 28,
                      color: "primary.main",
                    }}
                  >
                    {tech.icon}
                  </Box>
                  <Typography fontWeight={700} color="#ffffff">
                    {tech.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Stats */}
        <Box
          sx={{
            p: 6,

            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            backgroundColor: "#16223a",
            borderRadius: "0.75rem",
          }}
        >
          <Grid container spacing={6} sx={{}}>
            {[
              { value: "50+", label: "Projects Done" },
              { value: "20+", label: "Happy Clients" },
              { value: "10k+", label: "Commits" },
              { value: "4", label: "Certifications" },
            ].map((stat, i) => (
              <Grid size={{ xs: 6, md: 3 }} key={i}>
                <Typography variant="h4" fontWeight={800}>
                  {stat.value}
                </Typography>
                <Typography variant="caption" color="#64748b">
                  {stat.label.toUpperCase()}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
      <Footer />
    </Box>
  );
};
