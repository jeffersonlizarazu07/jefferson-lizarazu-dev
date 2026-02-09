import { Box, Typography } from "@mui/material";
import { Header } from "./Header";
import { MainCard } from "./MainCard";
import { ContactForm } from "./Form";
import { Footer } from "./Footer";

export const Profile = () => {
  return (
    <Box>
      <Box></Box>

      <Box>
        <Typography>Sobre mi</Typography>
        <Typography>
          Hola. Mi nombre es Jefferson Lizarazu. Soy desarrollador full stack y
          he decidido crear un lugar donde pueda compartir con ustedes mis
          proyectos realizados y aquellos proyectos que me encuentro realizando
          actualmente.
        </Typography>
      </Box>

      <Box>
        <ContactForm />
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
};
