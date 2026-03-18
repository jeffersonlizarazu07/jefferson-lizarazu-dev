import { Box, Stack, Typography, Grid, Card, CardContent } from "@mui/material";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import HubIcon from "@mui/icons-material/Hub";
import LayersIcon from "@mui/icons-material/Layers";
import ReactIcon from "../../assets/react.svg?react";

const techStack = [
  { name: "React", icon: <ReactIcon /> },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: <SettingsInputComponentIcon /> },
  { name: "GraphQL", icon: <HubIcon /> },
  { name: "Next.js", icon: "NX" },
  { name: "Docker", icon: <LayersIcon /> },
];

export const TechSection = () => {
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
    </Box>
  );
};
