import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import RocketIcon from "@mui/icons-material/RocketLaunch";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";

export const BottomNav = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: "#0B1623",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Inicio" icon={<HomeIcon />} />
        <BottomNavigationAction label="Proyectos" icon={<RocketIcon />} />
        <BottomNavigationAction label="Sobre mí" icon={<PersonIcon />} />
        <BottomNavigationAction label="Contacto" icon={<ChatIcon />} />
      </BottomNavigation>
    </Paper>
  );
};
