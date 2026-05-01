import { Container, Box } from "@mui/material";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { ProjectsContainer } from "../components/projects/ProjectsContainer";

export const ProjectsPage = () => {
  return (
    <Box sx={{ bgcolor: "#101622", color: "white", minHeight: "100vh", px: 6 }}>
      <Header />
      <Container maxWidth="xl" sx={{ py: 10 }}>
        <ProjectsContainer />
      </Container>
      <Footer />
    </Box>
  );
};
