import { Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import EmailIcon from "@mui/icons-material/AlternateEmail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ContactItem } from "./ContactItem";

export const DirectContact = () => {
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