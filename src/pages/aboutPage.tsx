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

export const AboutPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 12,
        position: "relative",
        overflow: "hidden",
        bgcolor: "background.default",
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

// Principal component

export const AboutPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 12,
        position: "relative",
        overflow: "hidden",
        bgcolor: "background.default",
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

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: <SettingsInputComponentIcon /> },
  { name: "GraphQL", icon: <HubIcon /> },
  { name: "Next.js", icon: "NX" },
  { name: "Docker", icon: <LayersIcon /> },
];

const TechSection = () => {
  return (
    <Stack spacing={10}>
      
      {/* Header */}
      <Stack direction="row" alignItems="center" spacing={4}>
        <Box>
          <Typography variant="h4" fontWeight={800}>
            My Ecosystem
          </Typography>
          <Typography color="text.secondary" maxWidth={500}>
            I specialize in modern JavaScript ecosystems and cloud-native architectures.
          </Typography>
        </Box>
      </Stack>

      {/* Tech Grid */}
      <Grid container spacing={4}>
        {techStack.map((tech, index) => (
          <Grid item xs={6} md={4} lg={2} key={index}>
            <Card
              sx={{
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
                <Typography fontWeight={700}>
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
          borderRadius: 4,
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Grid container spacing={6}>
          {[
            { value: "50+", label: "Projects Done" },
            { value: "20+", label: "Happy Clients" },
            { value: "10k+", label: "Commits" },
            { value: "4", label: "Certifications" },
          ].map((stat, i) => (
            <Grid item xs={6} md={3} key={i}>
              <Typography variant="h4" fontWeight={800}>
                {stat.value}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {stat.label.toUpperCase()}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};
