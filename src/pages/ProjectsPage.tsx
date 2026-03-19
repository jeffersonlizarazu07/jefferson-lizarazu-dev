import { Container, Box, Typography, Button, Stack } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { HeaderSection } from "../components/projects/HeaderSection";
import { ProjectsList } from "../components/projects/ProjectsList";
import { FreelanceSection } from "../components/projects/FreelanceSection";

export const ProjectsPage = () => {
  return (
    <Box sx={{ bgcolor: "#101622", color: "white", minHeight: "100vh", px: 6 }}>
      <Header />
      <Container maxWidth="xl" sx={{ py: 10 }}>
        <HeaderSection />
        <ProjectsList />
        <FreelanceSection />
      </Container>
      <Footer />
    </Box>
  );
};
