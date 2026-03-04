import {
  Container,
  Box,
  Typography,
  Button,
  Stack,
  Grid,
  Card,
  CardMedia,
  Chip,
  IconButton,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CodeIcon from "@mui/icons-material/Code";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Header } from "../components/layout/Header";

export const ProjectsPage = () => {
  const projects = [
    {
      title: "Nexus Analytics",
      description:
        "Real-time data processing platform with customizable widget architecture.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAfDdfZzg4CDJtsdEm1CTLs_A54RbTn_rBGuMfELgK8Lai9KvXZKScOAUYMKRq_aiBsfZRolNP1en1mpL6x6fDgGRDXJJX7-R-EgIp2TfoCMmup30rfp5PZb3JQPRLy4TdTvLvvt6xmuzADyKIoie2UyEPRBY3pVEJu_VHmMVryfjs__NxaK0NeC0y1bVQQp6FZTyUV_fXzaYtywbBePd5c-XEPNuq1r-Z5TK5kZTST7gda_DBwq-acEJg9uSb2gvo1sr7920AVnOI",
      tech: ["React", "Tailwind", "D3.js"],
    },
    {
      title: "Cryptoslate SDK",
      description:
        "A powerful typescript-first SDK for decentralized finance protocols.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDzI577nhpcYWSnl-IHVyKtviS5GqxwAblZS6Y_OK526jjgd8c2KreITDixqhKNOsMufGBCMbzlTkRIIQDrCQNVmehYQjn0LifXH1Wht9z-_BsWa3Ja2CZNhZCypqAw7eZe1mmMrehk5tu9Aq4cpCb0DMjGiJLi0bcFa2dmacjTZHVE7K0NHeesM1rFTzv3fTRpHP2LdGz5Hh7eCABosT4JO2mcS1OKJmHpdDJcPp5H4s7w-r4fCbytlRNNGDkBoWdTscpZpPCqbyw",
      tech: ["TypeScript", "Web3", "Node.js"],
    },
  ];
  return (
    <Box sx={{ bgcolor: "#101622", color: "white", minHeight: "100vh" }}>
      {/* HEADER */}
      <Header />
      {/* MAIN */}
      <Container maxWidth="xl" sx={{ py: 10 }}>
        {/* SECTION HEADER */}
        <Box maxWidth={600} mb={8} marginTop={6}>
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Selected{" "}
            <Box component="span" color="primary.main">
              Works
            </Box>
          </Typography>
          <Typography color="grey.400">
            A collection of projects focused on performance, accessibility and
            user experience.
          </Typography>
        </Box>

        {/* FILTER BUTTONS */}
        <Stack direction="row" spacing={2} flexWrap="wrap" mb={8}>
          <Button variant="contained">All Projects</Button>
          <Button variant="outlined">Web Apps</Button>
          <Button variant="outlined">Mobile</Button>
          <Button variant="outlined">UI Components</Button>
          <Button variant="outlined">Open Source</Button>
        </Stack>

        {/* GRID */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Card
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 3,
                  bgcolor: "#1A2233",
                  "&:hover .overlay": {
                    opacity: 1,
                  },
                  "&:hover img": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  sx={{
                    height: 320,
                    objectFit: "cover",
                    transition: "transform .5s ease",
                  }}
                />

                {/* OVERLAY */}
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(16,22,34,0.95)",
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    opacity: 0,
                    transition: "opacity .3s ease",
                  }}
                >
                  <Stack direction="row" justifyContent="flex-end" spacing={2}>
                    <IconButton
                      sx={{ bgcolor: "primary.main", color: "white" }}
                    >
                      <OpenInNewIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      sx={{ bgcolor: "rgba(255,255,255,0.1)", color: "white" }}
                    >
                      <CodeIcon fontSize="small" />
                    </IconButton>
                  </Stack>

                  <Box>
                    <Typography variant="h6" fontWeight={700} mb={1}>
                      {project.title}
                    </Typography>

                    <Typography variant="body2" color="grey.400" mb={2}>
                      {project.description}
                    </Typography>

                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      {project.tech.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: "rgba(43,108,238,0.2)",
                            color: "primary.main",
                            fontWeight: 600,
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <Box
          textAlign="center"
          mt={20}
          pt={10}
          borderTop="1px solid rgba(255,255,255,0.1)"
        >
          <Typography variant="h4" fontWeight={700} mb={3}>
            Have a project in mind?
          </Typography>

          <Typography color="grey.400" maxWidth={600} mx="auto" mb={5}>
            I'm currently available for freelance work. Let's build something
            exceptional together.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            justifyContent="center"
          >
            <Button variant="contained" size="large">
              Start a Project
            </Button>
            <Button variant="outlined" size="large">
              View Resume
            </Button>
          </Stack>
        </Box>
      </Container>

      {/* Scroll to top */}
      <IconButton
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          bgcolor: "rgba(43,108,238,0.2)",
          color: "primary.main",
          "&:hover": {
            bgcolor: "primary.main",
            color: "white",
          },
        }}
      >
        <ArrowUpwardIcon />
      </IconButton>
    </Box>
  );
};
